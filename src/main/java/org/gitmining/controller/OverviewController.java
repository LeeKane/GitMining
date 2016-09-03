package org.gitmining.controller;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.gitmining.bean.Choice;
import org.gitmining.bean.Repository;
import org.gitmining.bean.SimpleRepo;
import org.gitmining.bean.Sort;
import org.gitmining.bean.Tag;
import org.gitmining.bean.User;
import org.gitmining.service.RepoByTagDataService;
import org.gitmining.service.UserDataService;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class OverviewController {

	private RepoByTagDataService repoByTagDataService;
	private UserDataService userDataService;
	private String userName="";

	@RequestMapping(value = "/overview")
	public ModelAndView getOverviewView(HttpSession httpSession,HttpServletRequest request) throws Exception {
		httpSession.setAttribute("username","");
		ModelMap result = new ModelMap();
		result.put("type", "OVERVIEW");
		List<Tag> firsTags = (ArrayList<Tag>) repoByTagDataService.listFirstTag();
		result.put("tags", firsTags);
		return new ModelAndView("overview", "result", result);
	}

	@RequestMapping(value = "/about")
	public ModelAndView getAboutView(HttpServletRequest request) throws Exception {

		return new ModelAndView("about");
	}

	@RequestMapping(value = "/login")
	public ModelAndView getLoginView(HttpServletRequest request) throws Exception {
		ModelMap result = new ModelMap();
		result.put("type", "LOGIN");
		result.put("userName","admin");
//		String userName=request.getParameter("");
//		userName="admin";

		return new ModelAndView("login","result",result);
	}
	@RequestMapping("login.do")
	public ModelAndView login(HttpSession httpSession,String username, String password){
		httpSession.setAttribute("username",username);
		return new ModelAndView("person");
	}

	@RequestMapping(value = "/language")
	public ModelAndView getLanguageDiscoveryView(HttpServletRequest request) throws Exception {
		return new ModelAndView("stat");
	}

	@RequestMapping(value = "/convention")
	public ModelAndView getLanguageConventionView(HttpServletRequest request) throws Exception {
		return new ModelAndView("convention");
	}

	@RequestMapping(value = "/")
	public ModelMap getName(HttpServletRequest request) throws Exception{
		ModelMap result = new ModelMap();
		result.put("userName",userName);
		return  result;
	}

	@RequestMapping(value = "/map")
	public ModelAndView getMapView(HttpServletRequest request) throws Exception {
		return new ModelAndView("map");
	}

	@RequestMapping(value = "/convention/score")
	public ModelAndView getScoreView(HttpServletRequest request) throws Exception {
		String langName = request.getParameter("lang");
		return new ModelAndView(langName);
	}

	@RequestMapping(value = "/open")
	public ModelAndView getOpenView(HttpServletRequest request) throws Exception {
		return new ModelAndView("open");
	}

	@RequestMapping(value = "/repoStatistics")
	public ModelAndView getRepoStatisticstView(HttpServletRequest request) throws Exception {
		return new ModelAndView("repo_statistics");
	}

	@RequestMapping(value = "/userStatistics")
	public ModelAndView getUserStatisticstView(HttpServletRequest request) throws Exception {
		// ModelMap result = new ModelMap();
		Map<String, Object> result = new HashMap<>();
		Map a = userDataService.getCountryCount();
		Map b = userDataService.getStateCount();
		Map c = userDataService.getCompanyTime();
		Map d = userDataService.refreshBlogUserCache();
		List<User> e = userDataService.getAllUsers();

		result.put("country", a);
		result.put("states", b);
		result.put("companyTime", c);
		result.put("blog", d);
		result.put("user", e);

		return new ModelAndView("user_statistics", "result", result);
	}

	@RequestMapping(value = "/repos")
	public ModelAndView getReposView(HttpServletRequest request) throws Exception {
		String tagName = request.getParameter("tag");
		String language = request.getParameter("lan");
		String year = request.getParameter("year");
		String key = request.getParameter("key");
		if (key == null) {
			key = "";
		}

		if (year == null || language == null || tagName == null) {
			year = "all";
			language = "all";
			tagName = "ActiveRecord";
		}

		List<String> tagNameList = new ArrayList<String>();
		tagNameList.add(tagName);
		tagNameList.add(language);
		tagNameList.add(year);
		tagNameList.add(key);

		ModelMap result = new ModelMap();
		result.put("type", "REPOSITORY");
		List<Tag> firsTags = (ArrayList<Tag>) repoByTagDataService.listFirstTag();
		List<Tag> secondTags = (ArrayList<Tag>) repoByTagDataService.listSecondTagByMulti(tagNameList);
		String[] languages = Choice.getLanguages();
		String[] create_years = Choice.getCreate_years();

		result.put("tags", firsTags);
		result.put("languages", languages);
		result.put("createYears", create_years);
		result.put("searchTag", tagNameList);
		return new ModelAndView("repo_list", "result", result);
	}

	@RequestMapping(value = "/repos/sort", method = RequestMethod.POST)
	public Map getGeneralRepos(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		Map<String, Object> result = new HashMap<String, Object>();
		int currentPage = Integer.parseInt(request.getParameter("pageIndex"));
		int itemsperPage = Integer.parseInt(request.getParameter("pageSize"));

		String tag = request.getParameter("tag");
		String language = request.getParameter("language");
		String year = request.getParameter("year");
		String key = request.getParameter("key") == null ? "" : request.getParameter("key");
		System.out.println("haha " + key + " 1");
		if (tag.equals("") || language.equals("") || year.equals("")) {
			year = "all";
			language = "all";
			tag = "ActiveRecord";
		}
		List<String> tagNameList = new ArrayList<String>();
		tagNameList.add(tag);
		tagNameList.add(language);
		tagNameList.add(year);
		tagNameList.add(key);
		int type = Integer.parseInt(request.getParameter("type"));
		List<Repository> repos = new ArrayList<Repository>();

		switch (type) {

		case 1:

			repos = repoByTagDataService.searchAndSortByTagPagination(tagNameList, Sort.GENERAL, currentPage,
					itemsperPage);
			System.out.println("s1   " + type);
			break;
		case 2:
			repos = repoByTagDataService.searchAndSortByTagPagination(tagNameList, Sort.STAR, currentPage,
					itemsperPage);
			break;
		case 3:
			repos = repoByTagDataService.searchAndSortByTagPagination(tagNameList, Sort.FORK, currentPage,
					itemsperPage);
			break;
		case 4:
			repos = repoByTagDataService.searchAndSortByTagPagination(tagNameList, Sort.CONTRIBUTOR, currentPage,
					itemsperPage);
			break;
		default:
			break;
		}
		int totalCount = repoByTagDataService.resultCount(tagNameList, Sort.GENERAL);
		result.put("count", totalCount);
		result.put("repos", repos);
		result.put("count", totalCount);

		return result;
	}

	@RequestMapping(value = "/TopTen", method = RequestMethod.POST)
	public Map getTopTen(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		Map<String, List> result = new HashMap<String, List>();
		String tag = request.getParameter("tag");
		String language = request.getParameter("language");
		String year = request.getParameter("year");
		System.out.println(tag + "," + language + "," + year);
		List<String> tagNameList = new ArrayList<String>();
		tagNameList.add(tag);
		tagNameList.add(language);
		tagNameList.add(year);

		List<Repository> repos = repoByTagDataService.searchAndSortByTagPagination(tagNameList, Sort.HOT, 0, 5);
		result.put("repos", repos);
		return result;
	}

	public RepoByTagDataService getRepoByTagDataService() {
		return repoByTagDataService;
	}

	public void setRepoByTagDataService(RepoByTagDataService repoByTagDataService) {
		this.repoByTagDataService = repoByTagDataService;
	}

	public UserDataService getUserDataService() {
		return userDataService;
	}

	public void setUserDataService(UserDataService userDataService) {
		this.userDataService = userDataService;
	}
}
