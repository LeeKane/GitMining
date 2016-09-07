require 'log4r'
require 'yajl'
require 'em-http'
require "redis"

include EM

##
## Setup
##

@log = Log4r::Logger.new('github')
@log.add(Log4r::StdoutOutputter.new('console', {
  :formatter => Log4r::PatternFormatter.new(:pattern => "[#{Process.pid}:%l] %d :: %m")
}))

##
## Crawler
##

EM.run do
  stop = Proc.new do
    puts "Terminating crawler"
    EM.stop
  end

  Signal.trap("INT",  &stop)
  Signal.trap("TERM", &stop)

  @latest = []
  @latest_key = lambda { |e| "#{e['id']}" }

  @redis = Redis.new

  process = Proc.new do
      req = HttpRequest.new("https://api.github.com/events?per_page=50", {
        :inactivity_timeout => 25,
        :connect_timeout => 25
      }).get({
      :head => {
        'user-agent' => 'githubarchive.org',
        'Authorization' => 'token ' + 'f087789843135774ebee3cb649f8c1be19b5aacd'
      }
    })

    req.callback do
      begin
        latest = Yajl::Parser.parse(req.response)
        urls = latest.collect(&@latest_key)
        new_events = latest.reject {|e| @latest.include? @latest_key.call(e)}

        @latest = urls
        new_events.sort_by {|e| [Time.parse(e['created_at']), e['id']] }.each do |event|
          @redis.rpush("github_events", Yajl::Encoder.encode(event))
        end

        remaining = req.response_header.raw['X-RateLimit-Remaining']
        reset = Time.at(req.response_header.raw['X-RateLimit-Reset'].to_i)
        @log.info "Found #{new_events.size} new events, API: #{remaining}, reset: #{reset}"

        if new_events.size >= 50
          @log.info "Missed records.."
        end

      rescue Exception => e
        @log.error "Processing exception: #{e}, #{e.backtrace.first(5)}"
        @log.error "Response: #{req.response_header}, #{req.response}"
      ensure
        EM.add_timer(0.1, &process)
      end
    end

    req.errback do
      @log.error "Error: #{req.response_header.status}, \
                  header: #{req.response_header}, \
                  response: #{req.response}"

      EM.add_timer(2.0, &process)
    end
  end

  process.call
end
