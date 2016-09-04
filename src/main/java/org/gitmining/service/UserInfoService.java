package org.gitmining.service;

import org.gitmining.bean.Sort;
import org.gitmining.bean.StarRepo;
import org.gitmining.bean.User;

import java.util.List;
import java.util.Map;

public interface UserInfoService {
	public User getUserInfo(int id);
	public Map getUserScore(int id);
	public Map getRecommendRepos(User user);
	public List<User> getTop20Users();
	public List<User> getAllUsers();
	public List<StarRepo> getStaredRepo(String login);

	//分页
	public List<User> searchAndSortByTypePagination(List<String> tagName, Sort type, int currentPage, int itemsPerPage);

	// 结果集总行数
	public int resultCount(List<String> tagName, Sort type);
}
