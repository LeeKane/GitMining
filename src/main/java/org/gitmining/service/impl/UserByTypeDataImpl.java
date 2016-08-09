package org.gitmining.service.impl;

import org.gitmining.bean.Repository;
import org.gitmining.bean.Sort;
import org.gitmining.bean.User;
import org.gitmining.dao.RepositoryDao;
import org.gitmining.dao.UserDao;
import org.gitmining.service.UserByTypeDataService;

import java.util.List;

/**
 * Created by Akari on 16/5/29.
 */
public class UserByTypeDataImpl implements UserByTypeDataService {
    UserDao userDao;

    public UserDao getUserDao() {
        return userDao;
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public List<User> searchAndSortByTypePagination(Sort type, int currentPage, int itemsPerPage) {
        int begin=0;
        if (currentPage!=0) {
            begin = (currentPage - 1) * itemsPerPage;
        }

        List<User> simpleUsers = userDao.selectTOP20Users();

        for (int i = 0; i < simpleUsers.size(); i++) {
            simpleUsers.get(i).setCreated_at(
                    simpleUsers.get(i).getCreated_at().substring(0, 10));
            simpleUsers.get(i).setUpdated_at(
                    simpleUsers.get(i).getUpdated_at().substring(0, 10));
        }
        return simpleUsers;
    }

    @Override
    public int resultCount(Sort type) {
        return 20;
    }
}
