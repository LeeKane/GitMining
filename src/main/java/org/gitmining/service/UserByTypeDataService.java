package org.gitmining.service;

import org.gitmining.bean.Repository;
import org.gitmining.bean.Sort;
import org.gitmining.bean.User;

import java.util.List;

/**
 * Created by Akari on 16/5/29.
 */
public interface UserByTypeDataService {

    //分页
    public List<User> searchAndSortByTypePagination(Sort type, int currentPage, int itemsPerPage);

    // 结果集总行数
    public int resultCount(Sort type);

}
