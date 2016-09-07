var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var redis = require("redis");
var client = redis.createClient();

var events = initEvents();
var trending = initTrending();

var lastError = 0;

function initEvents() {
  return {
    timestamp: new Date().getTime(),
    total: 0,
    count: {},
    comments: 0,
    commits: 0,
    pr_opened: 0,
    pr_merged: 0,
    starred: 0,
    fork: 0,
    new_repo: {},
    new_branch: {}
  };
}

function initTrending() {
  return {
    timestamp: new Date().getTime(),
    user: {},
    repo: {}
  };
}

client.blpop("github_events", 0, processGithubEvent);
function processGithubEvent(err, reply) {
  // reply: [key, value]
  if (!(reply instanceof Array) || reply.length != 2) {
    // Prevent from writing in loop.
    var now = new Date().getTime();
    if (now - lastError > 1000)
      console.log("Invalid event: " + reply);
    lastError = now;

    client.blpop("github_events", 0, processGithubEvent);
    return;
  }

  try {
    var event = JSON.parse(reply[1]);
    events.total++;

    var type = event.type;
    if (events.count[type] == null)
      events.count[type] = 0;
    events.count[type]++;

    if (type == 'CreateEvent') {
      if (event.payload.ref_type == 'repository')
        events.new_repo[event.repo.name] = event.created_at;
      else
        events.new_branch[event.repo.name + '/' + event.payload.ref] = event.created_at;
    } else if (type.indexOf('Comment') > -1) {
      events.comments++;
    } else if (type == 'PushEvent') {
      events.commits += event.payload.commits.length;
    } else if (type == 'PullRequestEvent') {//console.log(event);
      if (event.payload.action == 'opened')
        events.pr_opened++;
      else if (event.payload.action == 'closed' && event.payload.pull_request.merged)
        events.pr_merged++;
    } else if (type == 'WatchEvent') {
      events.starred++;
    } else if (type == 'ForkEvent') {
      events.fork++;
    }

    // Update trending.
    if (event.actor) {
      var username = event.actor.login;
      if (trending.user[username] == null)
        trending.user[username] = {count: 0};
      trending.user[username].count++;
      trending.user[username].time = new Date().getTime();
    }
    if (event.repo) {
      var repo = event.repo.name;
      if (trending.repo[repo] == null)
        trending.repo[repo] = {count: 0};
      trending.repo[repo].count++;
      trending.repo[repo].time = new Date().getTime();
    }
  } catch (e) {}
  client.blpop("github_events", 0, processGithubEvent);
}

// Clear data per 2 seconds.
setInterval(function() {
  var deleteOldTrend = function(dict) {
    var time = new Date().getTime();
    // Keep 10 mins.
    var maxPersist = 600 * 1000;
    for (item in dict) {
      if (time - dict[item].time > maxPersist)
        delete dict[item];
    }
  };
  deleteOldTrend(trending.user);
  deleteOldTrend(trending.repo);

  var getTopTrend = function(dict) {
    var list = [];
    for (item in dict) {
      list.push([item, dict[item], dict[item].count]);
    }
    list.sort(function(a, b) {return a[2] - b[2]});
    list = list.slice(-7);
    list = list.reverse();
    var result = {};
    for (var i = 0; i < list.length; i++) {
      result[list[i][0]] = list[i][1];
    }
    return result;
  };

  events.trend = {};
  events.trend.user = getTopTrend(trending.user);
  events.trend.repo = getTopTrend(trending.repo);

  io.sockets.emit('set_events', events);
  events = initEvents();
}, 3000);

server.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/visual.html');
});

app.get('/gauge.min.js', function(req, res) {
  res.sendFile(__dirname + '/gauge.min.js');
});

app.get('/moment.min.js', function(req, res) {
  res.sendFile(__dirname + '/moment.min.js');
});

io.on('connection', function(socket) {
  socket.emit('set_events', events);
});
