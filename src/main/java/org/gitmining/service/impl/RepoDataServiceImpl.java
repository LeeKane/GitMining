package org.gitmining.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import net.spy.memcached.MemcachedClient;
import com.google.gson.reflect.TypeToken;

import org.gitmining.bean.*;
import org.gitmining.dao.RepositoryDao;
import org.gitmining.service.RepoDataService;
import org.gitmining.util.NetworkConnect;

import static sun.misc.Version.println;

public class RepoDataServiceImpl implements RepoDataService {

	private RepositoryDao repositoryDao;
	private MemcachedClient memcachedClient;

	public MemcachedClient getMemcachedClient() {
		return memcachedClient;
	}

	public void setMemcachedClient(MemcachedClient memcachedClient) {
		this.memcachedClient = memcachedClient;
	}

	public RepositoryDao getRepositoryDao() {
		return repositoryDao;
	}

	public void setRepositoryDao(RepositoryDao repositoryDao) {
		this.repositoryDao = repositoryDao;
	}

	@Override
	public List<SimpleRepo> searchRepo(String name) {
		// TODO Auto-generated method stub
		String pattern = "%" + name + "%";
		repositoryDao.getStatCounts("year_stat");
		repositoryDao.getStatTypes("year_stat", "year");
		return repositoryDao.searchRepos(pattern);
	}

	@Override
	public Repository getRepositoryById(int id) {
		return repositoryDao.getRepositoryById(id);
	}

	@Override
	public Map<String, Integer> getRepositoryScoreById(int id) {
		// TODO Auto-generated method stub
		RepoScore repoScore = repositoryDao.getRepoScoreById(id);
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("hot", repoScore.getHot());
		map.put("mature", repoScore.getMature());
		map.put("popular", repoScore.getPopular());
		map.put("famous", repoScore.getNb());
		map.put("size", repoScore.getSize());
		map.put("contributor", repoScore.getContributor());
		map.put("total", repoScore.getTotal());
		return map;
	}

	@Override
	public Map<String, List> relatedRepos(Repository repository) {
		// TODO Auto-generated method stub
		Map<String, List> result = new TreeMap<String, List>();
		result.put("tag", getRelatedTagRepos(repository.getId()));
		result.put("owner", getRelatedOwnerRepos(repository));
		result.put("viewer", getRelatedViewerRepos(repository.getId()));
		return result;
	}

	@Override
	public History getRepositoryHistory(int id) {
		// TODO Auto-generated method stub
		History history = new History();
		history.setId("History of Repository");
		history.setTitle("History of Repository");
		history.setFocus_date("2015-07-01 12:00");
		history.setColor("#82530d");
		history.setInitial_zoom(45);
		history.setSize_importance("true");
		List<Event> events = new ArrayList<Event>();
		Event event = new Event();
		event.setDescription("description of repo" + id);
		event.setEnddate("2015-07-01 12:00");
		event.setHigh_threshold(60);
		event.setLow_threshold(1);
		event.setImportance(45);
		event.setId(1);
		event.setSlug("");
		event.setStartdate("2015-08-01 12:00");
		event.setTitle("title");
		event.setYpix(0);
		events.add(event);
		history.setEvents(events);
		return history;
	}

	public List<Repository> getRelatedTagRepos(int id) {

		List<RepoPairRelation> related = repositoryDao.getSimilarRepoPairRelation(id);
		ArrayList<Repository> relatedRepository = new ArrayList<Repository>();

		for (int index = 0; index < 5; index++) {
			int rid = related.get(index).getRepo_relate_id();
			Repository repository = repositoryDao.getRepositoryById(rid);
			relatedRepository.add(repository);
		}

		return relatedRepository;
	}

	public List<Repository> getRelatedOwnerRepos(Repository repository) {
		List<Repository> repositories = repositoryDao.getRepositoryByOwnerName(repository.getOwner_name());
		repositories.remove(repository);
		return repositories;
	}

	public List<Repository> getRelatedViewerRepos(int id) {
		return getRelatedReposStub();
	}

	public List<Repository> getRelatedReposStub() {
		List<Repository> repositories = new ArrayList<Repository>();
		for (int i = 0; i < 5; i++) {
			Repository repository = new Repository();
			repository.setId(i + 1);
			repository.setFull_name("repo" + (i + 1));
			repositories.add(repository);
		}

		return repositories;
	}

	public Map<String, Integer> getRepositoryScoreByIdStub() {

		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("hot", 88);
		map.put("mature", 70);
		map.put("popular", 95);
		map.put("size", 66);
		map.put("contributor", 77);
		map.put("total", 90);
		return map;
	}

	public Map<String, List> getStatCounts(String type) {
		Map<String, List> result = new TreeMap<String, List>();
		if (type.equals("year")) {
			List<String> years = repositoryDao.getStatTypes("year_stat", "year");
			List<Integer> counts = repositoryDao.getStatCounts("year_stat");
			result.put("type", years);
			result.put("counts", counts);
		}

		if (type.equals("type")) {
			List<String> types = repositoryDao.getStatTypes("type_stat", "type");
			List<Integer> counts = repositoryDao.getStatCounts("type_stat");
			result.put("type", types);
			result.put("counts", counts);
		}

		if (type.equals("language")) {

			List<String> languages = repositoryDao.getStatTypes("language_stat", "language");
			List<Integer> counts = repositoryDao.getStatCounts("language_stat");
			result.put("type", languages);
			result.put("counts", counts);
		}

		return result;
	}

	@Override
	public Map<String, Integer> getLanguageAndNumber() {
		// TODO Auto-generated method stub
		return repositoryDao.getLanguageAndNumber();
	}

	@Override
	public List<String> getRepoCreateTime() {
		// TODO Auto-generated method stub
		return repositoryDao.getRepoCreateTime();
	}

	@Override
	public List<Integer> getContributorNumber() {
		// TODO Auto-generated method stub
		return repositoryDao.getContributorNumber();
	}

	@Override
	public List<Integer> getCollaboratorNumber() {
		// TODO Auto-generated method stub
		return repositoryDao.getCollaboratorNumber();
	}

	@Override
	public List<Languagetime> getLanguagetime() {
		// TODO Auto-generated method stub
		return repositoryDao.getLanguagetime();
	}

	@Override
	public List<ActionTime> getActiontime() {
		// TODO Auto-generated method stub
		return repositoryDao.getActiontime();
	}

	@Override
	public List<Duration> getDuration() {
		// TODO Auto-generated method stub
		return repositoryDao.getDuration();
	}

	@Override
	public List<LanguageContri> getLanguagecontri() {
		// TODO Auto-generated method stub
		return repositoryDao.getLanguagecontri();
	}

	@Override
	public List<Commit> getRecentCommit(String fn) {
		// TODO Auto-generated method stub
		return repositoryDao.getRecentCommit(fn);
	}

	@Override
	public List<Issue> getAllIssue(String fn) {
		return repositoryDao.getAllIssue(fn);
	}

	@Override
	public List<Contributor> getContributors(int id){
		Repository repo = getRepositoryById(id);
		String fn = repo.getFull_name();
		String httpUrl = "https://api.github.com/repos/";
		String httpArg = fn+"/contributors"+"?access_token=9389e7a747d56ab2a8193c8687f35dfd8e7f707f";
		List<Contributor> contributors = NetworkConnect.gson.fromJson(NetworkConnect.getJson(httpUrl,httpArg),new TypeToken<List<Contributor>>() {
		}.getType());
		if(contributors.size()>10) {
			contributors = contributors.subList(0, 10);
		}
		return contributors;
	}




}
