package org.gitmining.service.impl;

import com.google.gson.reflect.TypeToken;
import net.spy.memcached.MemcachedClient;
import org.gitmining.bean.*;
import org.gitmining.dao.RepositoryDao;
import org.gitmining.dao.UserDao;
import org.gitmining.service.UserInfoService;
import org.gitmining.util.NetworkConnect;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserInfoServiceImpl implements UserInfoService {
	UserDao userDao;
	RepositoryDao repositoryDao;
	MemcachedClient MemcachedClient;
	
	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	public RepositoryDao getRepositoryDao() {
		return repositoryDao;
	}

	public void setRepositoryDao(RepositoryDao repositoryDao) {
		this.repositoryDao = repositoryDao;
	}

	public MemcachedClient getMemcachedClient() {
		return MemcachedClient;
	}

	public void setMemcachedClient(MemcachedClient memcachedClient) {
		MemcachedClient = memcachedClient;
	}

	@Override
	public User getUserInfo(int id) {
		// TODO Auto-generated method stub
		return userDao.selectUserById(id);
	}

	@Override
	public Map getUserScore(int id) {
		// TODO Auto-generated method stub
		UserScore userScore = userDao.selectUserScoreById(id);
		Map<String, Integer> scores = new HashMap<String, Integer>();
//		scores.put("efficiency", userScore.getEfficiency_score());
//		scores.put("quantity", userScore.getQuantity_score());
//		scores.put("total", userScore.getTotal_score());
		scores.put("efficiency", 78);
		scores.put("quantity", 69);
		scores.put("total", 76);
		return scores;
	}

	@Override
	public Map getRecommendRepos(User user) {
		// TODO Auto-generated method stub
		Map<String, List> result = new HashMap<String, List>();
		List<Repository> repositories = repositoryDao.getRepositoryByOwnerName(user.getLogin());
		List<Repository> contriRepositories = repositoryDao.getContributedRepoByUserId(user.getId());
		result.put("own_repo", repositories);
		result.put("contri_repo", contriRepositories);
		return result;
	}

	@Override
	public List<User> getTop20Users() {
		// TODO Auto-generated method stub
		
		return getTop20UsersStub();
	}


	public List<User> getTop20UsersStub(){
		List<User> users = userDao.selectTOP20Users();
		
		return users;
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub

		return getAllUsersStub();
	}

	@Override
	public List<StarRepo> getStaredRepo(String login) {
		String httpUrl = "https://api.github.com/users/";
		String httpArg =login+"/starred"+"?access_token=9389e7a747d56ab2a8193c8687f35dfd8e7f707f";

		List<StarRepo> repos = NetworkConnect.gson.fromJson(NetworkConnect.getJson(httpUrl,httpArg),new TypeToken<List<StarRepo>>() {
		}.getType());
		if(repos.size()>5){
			repos = repos.subList(0,5);
		}
		return repos;
	}

	public List<User> getAllUsersStub() {
		List<User> users = userDao.selectAllUsers();

		return users;
	}

	@Override
	public List<User> searchAndSortByTypePagination(List<String> tagName, Sort type, int currentPage, int itemsPerPage) {
		// TODO Auto-generated method stub
		int begin = 0;
		if (currentPage != 0) {
			begin = (currentPage - 1) * itemsPerPage;
		}

		List<User> simpleUsers = userDao.getSimpleUsersByTypeAndSortPagination(tagName, type, begin, itemsPerPage);

		for (int i = 0; i < simpleUsers.size(); i++) {
			simpleUsers.get(i).setCreated_at(
					simpleUsers.get(i).getCreated_at().substring(0, 10));
			simpleUsers.get(i).setUpdated_at(
					simpleUsers.get(i).getUpdated_at().substring(0, 10));
		}
		return simpleUsers;
	}

	@Override
	public int resultCount(List<String> tagName, Sort type) {
		return userDao.getResultCountPagination(tagName, type);
	}
}
