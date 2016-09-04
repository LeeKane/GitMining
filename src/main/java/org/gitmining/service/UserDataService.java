package org.gitmining.service;

import org.gitmining.bean.User;

import java.util.List;
import java.util.Map;

public interface UserDataService {
	/**
	 * user count of each company
	 * @return
	 */
	public Map<String, Integer> getCompanyUserCount();
	
	/**
	 * user count of each blog domain
	 * @return
	 */
	public Map<String, Integer> getBlogUserCount();
	
	/**
	 * user count of each dwell place
	 * @return
	 */
	public Map<String,Integer> getLocationCount();
	
	/**
	 * user count of each email domain
	 * @return
	 */
	public Map<String,Integer> getEmailCount();
	
	public Map<String,Integer> getCountryCount();

	public List<User> getAllUsers();
	
	public Map<String,Integer> getStateCount();
	
	public int getUserCount();
	
	public int getOrgCount();
	
	public Map<String,int[]> getCompanyTime();
	
	public Map<Integer,Integer> getUserRepoData();
	public Map<Integer,Integer> getUserGistData();
	public Map<Integer,Integer> getUserFollowerData();
	public Map<Integer,Integer> getUserFollowingData();
	
	public Map<String,int[]> getUserActiveData();
	
	public Map<String, Integer> refreshCompanyUserCache();
	public Map<String, Integer> refreshBlogUserCache();

	public Map<String, Integer> refreshLocationCache();

	public Map<String, Integer> refreshEmailCache();

	public Map<Integer, Integer> refreshFollowingCache();

	public Map<Integer, Integer> refreshFollowerCache();

	public Map<Integer, Integer> refreshGistCache();

	public Map<Integer, Integer> refreshRepoCache();

	
}
