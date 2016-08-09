package org.gitmining.dao.impl;

import org.gitmining.bean.CountryCount;
import org.gitmining.bean.Sort;
import org.gitmining.bean.State;
import org.gitmining.bean.User;
import org.gitmining.bean.UserScore;
import org.gitmining.dao.UserDao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserDaoImpl extends BaseDaoImpl implements UserDao {

	@Override
	public List<User> selectAllUsers() {
		// TODO Auto-generated method stub
		return sqlSession.selectList("user.selectAllUsers");
	}

	@Override
	public int countUsers() {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("user.countUsers");
	}

	@Override
	public User selectUserById(int id) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("user.selectUserById",id);
	}

	@Override
	public UserScore selectUserScoreById(int id) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("user.selectUserScoreById",id);
	}

	@Override
	public User selectUserByName(String login) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("user.selectUserByName",login);
		}

	@Override
	public List<User> selectTOP20Users() {
		// TODO Auto-generated method stub
		return sqlSession.selectList("user.selectTOP20Users");
	}

	@Override
	public List<CountryCount> countCountry() {
		// TODO Auto-generated method stub
		return sqlSession.selectList("user.countCountry");
    }
	
	@Override
	public List<State> selectStates() {
		return sqlSession.selectList("user.selectState");
	}

    @Override
    public List<User> getSimpleUsersByTypeAndSortPagination(List<String> tagName, Sort type, int begin, int itemsPerPage) {
        // TODO Auto-generated method stub
        Map<String, Object> map = new HashMap<String, Object>();
		if (!tagName.get(0).equals(""))
			map.put("key", tagName.get(0));

		map.put("beginItem", begin);
        map.put("itemsPerPage", itemsPerPage);
        if (type == Sort.GENERAL) {
			if (!tagName.get(0).equals(""))
				return sqlSession.selectList(
                    "user.selectSimpleUsersSortGeneralPaginationWithKey", map);
			else
				return sqlSession.selectList(
						"user.selectSimpleUsersSortGeneralPagination", map);
		} else if (type == Sort.REPO) {
            map.put("type", "public_repos");
        } else if (type == Sort.FOLLOWER) {
            map.put("type", "followers");
        } else {
			if (!tagName.get(0).equals(""))
				return sqlSession.selectList(
						"user.selectSimpleUsersSortGeneralPaginationWithKey", map);
			else
				return sqlSession.selectList(
						"user.selectSimpleUsersSortGeneralPagination", map);
        }

		if (!tagName.get(0).equals(""))
			return sqlSession.selectList(
                "user.selectSimpleUsersByTypeSortPaginationWithKey", map);
		else
			return sqlSession.selectList(
					"user.selectSimpleUsersByTypeSortPagination", map);
	}

    @Override
    public int getResultCountPagination(List<String> tagName, Sort type) {
		Map<String, Object> map = new HashMap<String, Object>();
		if (!tagName.get(0).equals("")){
			map.put("key", tagName.get(0));
			return sqlSession.selectOne("user.countUsersWithKey", map);
		}
		else
			return sqlSession.selectOne("user.countUsers");
    }

	

}
