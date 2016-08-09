package org.gitmining.dao;

import org.gitmining.bean.CountryCount;
import org.gitmining.bean.Sort;
import org.gitmining.bean.State;
import org.gitmining.bean.User;
import org.gitmining.bean.UserScore;

import java.util.List;

public interface UserDao {
	public List<User> selectAllUsers();
	public int countUsers();
	public User selectUserById(int id);
	public User selectUserByName(String login);
	public UserScore selectUserScoreById(int id);
	public List<User> selectTOP20Users();
	public List<CountryCount> countCountry();
	public List<State> selectStates();
	
    public List<User> getSimpleUsersByTypeAndSortPagination(
			List<String> tagName, Sort type, int begin, int itemsPerPage);

    public int getResultCountPagination(List<String> tagName, Sort type);
}
