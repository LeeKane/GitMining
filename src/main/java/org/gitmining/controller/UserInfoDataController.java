package org.gitmining.controller;

import org.gitmining.bean.Sort;
import org.gitmining.bean.User;
import org.gitmining.service.UserByTypeDataService;
import org.gitmining.service.UserDataService;
import org.gitmining.service.UserInfoService;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserInfoDataController {
	private UserDataService userDataService;
	private UserInfoService userInfoService;
	private UserByTypeDataService UserByTypeDataService;

	public UserByTypeDataService getUserByTypeDataService() {
		return UserByTypeDataService;
	}
	public void setUserByTypeDataService(UserByTypeDataService UserByTypeDataService) {
		this.UserByTypeDataService = UserByTypeDataService;
	}

	public UserDataService getUserDataService() {
		return userDataService;
	}
	public void setUserDataService(UserDataService userDataService) {
		this.userDataService = userDataService;
	}
	
	public UserInfoService getUserInfoService() {
		return userInfoService;
	}
	public void setUserInfoService(UserInfoService userInfoService) {
		this.userInfoService = userInfoService;
	}
	@RequestMapping(value="/simpleUser")
	public ModelAndView getUserView(HttpServletRequest request) throws Exception {
		ModelMap result=new ModelMap();
		result.put("type", "USER");
		return new ModelAndView("userinfo","result",result);
	}
	
	@RequestMapping(value="/user/content")
	public ModelAndView getUserContent(HttpServletRequest request,HttpServletResponse response) throws Exception {
		ModelMap result=new ModelMap();
		int user_id = Integer.parseInt(request.getParameter("id"));
		User user = userInfoService.getUserInfo(user_id);
		user.setCreated_at(user.getCreated_at().substring(0, 10));
		
		Map userScores = userInfoService.getUserScore(user_id);
		
		Map<String, List> relatedRepos = userInfoService.getRecommendRepos(user);
		result.put("type", "USER");
		result.put("user", user);
		result.put("score", userScores);
		result.put("repos", relatedRepos);
		return new ModelAndView("user","result",result);
	}	
	
	@RequestMapping(value="/user/top")
	public ModelAndView getTopUserContent(HttpServletRequest request,HttpServletResponse response) throws Exception {
		ModelMap result=new ModelMap();
		List<User> users = userInfoService.getTop20Users();
		for (int i = 0; i < users.size(); i++) {
			users.get(i).setFollowers(users.get(i).getFollowers()/240);
			System.out.println(users.get(i).getId());
		}
		result.put("type", "USER");
		result.put("users", users);
		return new ModelAndView("useroverview","result",result);
	}

	@RequestMapping(value="/users")
	public ModelAndView getUsersView(HttpServletRequest request) throws Exception {
		ModelMap result=new ModelMap();
        result.put("type", "USER");
//        List<User> users = userInfoService.getTop20Users();
//		result.put("users", users);
		String key = request.getParameter("key") == null ? "" : request.getParameter("key");
		List<String> tagNameList = new ArrayList<String>();
		tagNameList.add(key);
		result.put("searchTag", tagNameList);
		return new ModelAndView("users","result",result);
	}

	@RequestMapping(value = "/users/sort", method = RequestMethod.POST)
	public Map getGeneralUsers(HttpServletRequest request,
							   HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		Map<String, Object> result = new HashMap<String, Object>();
		int currentPage = Integer.parseInt(request.getParameter("pageIndex"));
		int itemsperPage = Integer.parseInt(request.getParameter("pageSize"));

		String key = request.getParameter("key") == null ? "" : request.getParameter("key");
		List<String> tagNameList = new ArrayList<String>();
		tagNameList.add(key);

		int type = Integer.parseInt(request.getParameter("type"));
		List<User> users = new ArrayList<User>();

		switch (type) {

			case 1:
				users = userInfoService.searchAndSortByTypePagination(tagNameList,Sort.GENERAL, currentPage, itemsperPage);
				break;
			case 2:
				users = userInfoService.searchAndSortByTypePagination(tagNameList,Sort.FOLLOWER, currentPage, itemsperPage);
				break;
			case 3:
				users = userInfoService.searchAndSortByTypePagination(tagNameList,Sort.REPO, currentPage, itemsperPage);
				break;
			default:
				break;
		}
		int totalCount = userInfoService.resultCount(tagNameList, Sort.GENERAL);

		result.put("users", users);
		result.put("count", totalCount);

		return result;
	}
}
