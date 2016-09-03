package org.gitmining.controller;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.gitmining.bean.*;
import org.gitmining.service.RepoByTagDataService;
import org.gitmining.service.RepoDataService;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class RepositoryDataController {
	private RepoDataService repoDataService;
	private RepoByTagDataService repoByTagDataService;

	public RepoByTagDataService getRepoByTagDataService() {
		return repoByTagDataService;
	}

	public void setRepoByTagDataService(RepoByTagDataService repoByTagDataService) {
		this.repoByTagDataService = repoByTagDataService;
	}

	public RepoDataService getRepoDataService() {
		return repoDataService;
	}

	public void setRepoDataService(RepoDataService repoDataService) {
		this.repoDataService = repoDataService;
	}

	@RequestMapping(value = "/simpleRepo")
	public ModelAndView getRepoView(HttpServletRequest request) throws Exception {
		ModelMap result = new ModelMap();
		result.put("type", "REPOSITORY");
		return new ModelAndView("searchrepo", "result", result);
	}

	@RequestMapping(value = "/repository/content", method = RequestMethod.GET)
	public ModelAndView getRepositoryContent(HttpServletRequest request, HttpServletResponse response) {
		int repo_id = Integer.parseInt(request.getParameter("id"));
		ModelMap map = new ModelMap();
		Repository repository = repoDataService.getRepositoryById(repo_id);
		List<Commit> commits = repoDataService.getRecentCommit(repository.getFull_name());
		for (Commit commit : commits) {
			String temp = commit.getDate();
			temp = temp.split("T")[0] + "  " + temp.split("T")[1];
			commit.setDate(temp.substring(0, temp.length() - 1));
		}

		List<Contributor> contributors = repoDataService.getContributors(repo_id);
		int totalContribution =0;
		for (Contributor contributor:contributors) {
			totalContribution+=contributor.getContributions();
		}

		List<Double> rates = new ArrayList<>();
		DecimalFormat df = new DecimalFormat("#.00");
		for (int i=0;i<contributors.size();i++) {
			double rate =((double)contributors.get(i).getContributions())/totalContribution*100;
			rate=Double.parseDouble(df.format(rate));
			rates.add(rate);
		}


		List<Issue> issues = repoDataService.getAllIssue(repository.getFull_name());
		String fullname = repository.getFull_name().split("/")[1];
		repository.setFull_name(fullname);
		Map<String, List> relatedRepos = repoDataService.relatedRepos(repository);
		Map<String, Integer> scores = repoDataService.getRepositoryScoreById(repo_id);
		History history = repoDataService.getRepositoryHistory(repo_id);
		map.put("history", history);
		map.put("repository", repository);
		map.put("relatedRepos", relatedRepos);
		map.put("scores", scores);
		map.put("type", "REPOSITORY");
		map.put("commit", commits);
		map.put("issue", issues);
		map.put("contributor",contributors);
		map.put("rate",rates);
		return new ModelAndView("repoDetail", "result", map);
	}

	@RequestMapping(value = "/repository/score")
	public Map userScore(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub

		int repo_id = Integer.parseInt(request.getParameter("id"));
		Map<String, Object> result = new TreeMap<String, Object>();
		List<String> names = new ArrayList<String>();
		List<Integer> nums = new ArrayList<Integer>();
		Map<String, Integer> scores = repoDataService.getRepositoryScoreById(repo_id);
		result.put("total", scores.get("total"));
		scores.remove("total");
		Set<String> keySet = scores.keySet();
		for (String string : keySet) {
			names.add(string);
			nums.add(scores.get(string));
		}

		result.put("names", names);
		result.put("scores", nums);
		return result;
	}

	@RequestMapping(value = "/repository/search", method = RequestMethod.POST)
	public ModelAndView searchRepository(HttpServletRequest request, HttpServletResponse response) {
		String name = request.getParameter("reponame");
		ModelMap result = new ModelMap();
		List<SimpleRepo> simpleRepos = (ArrayList<SimpleRepo>) repoDataService.searchRepo(name);
		result.put("simpleRepos", simpleRepos);
		result.put("type", "REPOSITORY");
		List<String> tagNameList = new ArrayList<String>();
		tagNameList.add("ActiveRecord");
		tagNameList.add("all");
		tagNameList.add("all");
		List<Tag> firsTags = (ArrayList<Tag>) repoByTagDataService.listFirstTag();
		// List<Tag> secondTags = (ArrayList<Tag>) repoByTagDataService
		// .listSecondTagByMulti(tagNameList);
		String[] languages = Choice.getLanguages();
		String[] create_years = Choice.getCreate_years();

		result.put("tags", firsTags);
		result.put("languages", languages);
		result.put("createYears", create_years);
		result.put("searchTag", tagNameList);
		return new ModelAndView("allrepos", "result", result);
	}

	@RequestMapping(value = "/repository/info")
	public ModelAndView getRepository(HttpServletRequest request, HttpServletResponse response) {
		int repo_id = Integer.parseInt(request.getParameter("id"));
		ModelMap map = new ModelMap();
		Repository repository = repoDataService.getRepositoryById(repo_id);
		map.put("repository", repository);
		map.put("type", "REPOSITORY");
		return new ModelAndView("repoinfo", "result", map);
	}

	@RequestMapping(value = "/repoAnalysis")
	public ModelAndView getUserView(HttpServletRequest request) throws Exception {
		ModelMap result = new ModelMap();
		return new ModelAndView("repoanalysis", "result", result);
	}

	@RequestMapping(value = "/statCounts")
	public Map getStatCounts(HttpServletRequest request) throws Exception {
		Map<String, List> result = repoDataService.getStatCounts(request.getParameter("type"));
		return result;
	}

	@RequestMapping(value = "/repository/language")
	public Map<String, Object> getRepoLanguage(HttpServletRequest request) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();
		List<String> language = new ArrayList<String>();
		List<Integer> number = new ArrayList<Integer>();
		Map<String, Integer> temp = repoDataService.getLanguageAndNumber();
		for (String key : temp.keySet()) {
			language.add(key);
			number.add(temp.get(key));
		}
		result.put("language", language);
		result.put("number", number);
		return result;
	}

	@RequestMapping(value = "/repository/createtime")
	public Map<Integer, Integer> getRepoCreateTime(HttpServletRequest request) throws Exception {
		List<String> createtime = repoDataService.getRepoCreateTime();
		Map<Integer, Integer> result = new HashMap<Integer, Integer>();
		for (int i = 0; i < createtime.size(); i++) {
			int year = Integer.parseInt(createtime.get(i).split("-")[0]);
			if (result.containsKey(year)) {
				result.put(year, result.get(year) + 1);
			} else {
				result.put(year, 1);
			}
		}
		return result;
	}

	@RequestMapping(value = "/repository/createseason")
	public Map<String, Integer> getRepoCreateSeason(HttpServletRequest request) throws Exception {
		List<String> createtime = repoDataService.getRepoCreateTime();
		Map<String, Integer> result = new HashMap<String, Integer>();
		for (int i = 0; i < createtime.size(); i++) {
			int month = Integer.parseInt(createtime.get(i).split("-")[1]);
			String season = "spring";
			switch (month) {
			case 1:
				season = "winter";
				break;
			case 2:
				season = "winter";
				break;
			case 6:
				season = "summer";
				break;
			case 7:
				season = "summer";
				break;
			case 8:
				season = "summer";
				break;
			case 9:
				season = "fall";
				break;
			case 10:
				season = "fall";
				break;
			case 11:
				season = "fall";
				break;
			case 12:
				season = "winter";
				break;
			}

			if (result.containsKey(season)) {
				result.put(season, result.get(season) + 1);
			} else {
				result.put(season, 1);
			}
		}
		return result;
	}

	@RequestMapping(value = "/repository/languagetime")
	public Map getLanguageTime(HttpServletRequest request) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();
		List<Languagetime> languagetime = new ArrayList<Languagetime>();
		List<String> language = new ArrayList<String>();
		List<Integer> count1 = new ArrayList<Integer>();
		List<Integer> count2 = new ArrayList<Integer>();
		List<Integer> count3 = new ArrayList<Integer>();
		List<Integer> count4 = new ArrayList<Integer>();
		List<Integer> count5 = new ArrayList<Integer>();
		List<Integer> count6 = new ArrayList<Integer>();
		languagetime = repoDataService.getLanguagetime();

		for (int i = 0; i < languagetime.size(); i++) {
			if (i % 3 == 0) {
				language.add(languagetime.get(i).getLanguage());
			}
			if (i < 3) {
				count1.add(languagetime.get(i).getCount());
			}
			if (i < 6 && i >= 3) {
				count2.add(languagetime.get(i).getCount());
			}
			if (i < 9 && i >= 6) {
				count3.add(languagetime.get(i).getCount());
			}
			if (i < 12 && i >= 9) {
				count4.add(languagetime.get(i).getCount());
			}
			if (i < 15 && i >= 12) {
				count5.add(languagetime.get(i).getCount());
			}
			if (i < 18 && i >= 15) {
				count6.add(languagetime.get(i).getCount());
			}
		}
		// System.out.println(languagetime.get(i).getLanguage()+"ssss"+languagetime.get(i).getYear()+"sss"+languagetime.get(i).getCount());
		result.put("languagetime", languagetime);
		result.put("count1", count1);
		result.put("count2", count2);
		result.put("count3", count3);
		result.put("count4", count4);
		result.put("count5", count5);
		result.put("count6", count6);
		return result;

	}

	@RequestMapping(value = "/repository/languagecount")
	public Map getLanguageCount(HttpServletRequest request) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();
		List<Languagetime> languagetime = new ArrayList<Languagetime>();
		List<String> language = new ArrayList<String>();
		List<Integer> count1 = new ArrayList<Integer>();
		List<Integer> count2 = new ArrayList<Integer>();
		List<Integer> count3 = new ArrayList<Integer>();
		languagetime = repoDataService.getLanguagetime();

		for (int i = 0; i < languagetime.size(); i++) {
			if (i % 3 == 0) {
				language.add(languagetime.get(i).getLanguage());
				count1.add(languagetime.get(i).getCount());
			}
			if ((i - 1) % 3 == 0) {
				count2.add(languagetime.get(i).getCount());
			}
			if ((i - 2) % 3 == 0) {
				count3.add(languagetime.get(i).getCount());
			}

		}
		// System.out.println(languagetime.get(i).getLanguage()+"ssss"+languagetime.get(i).getYear()+"sss"+languagetime.get(i).getCount());
		result.put("languagetime", languagetime);
		result.put("count1", count1);
		result.put("count2", count2);
		result.put("count3", count3);

		return result;

	}

	@RequestMapping(value = "/repository/actiontime")
	public Map getActionTime(HttpServletRequest request) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();
		List<ActionTime> actiontime = new ArrayList<ActionTime>();
		List<Integer> count1 = new ArrayList<Integer>();
		List<Integer> count2 = new ArrayList<Integer>();
		List<Integer> count3 = new ArrayList<Integer>();
		List<Integer> count4 = new ArrayList<Integer>();
		actiontime = repoDataService.getActiontime();
		for (int i = 0; i < actiontime.size(); i++) {
			if (i % 3 == 0) {
				count1.add(actiontime.get(i).getCount());
			}
			if (i == 1 || i == 4 || i == 7 || i == 10) {
				count2.add(actiontime.get(i).getCount());
			}
			if (i == 2 || i == 5 || i == 8 || i == 11) {
				count3.add(actiontime.get(i).getCount());
			}
		}
		int temp = 0;
		temp = count1.get(0);
		count1.set(0, count1.get(3));
		count1.set(3, temp);
		temp = count1.get(1);
		count1.set(1, count1.get(3));
		count1.set(3, temp);

		temp = count2.get(0);
		count2.set(0, count2.get(3));
		count2.set(3, temp);
		temp = count2.get(1);
		count2.set(1, count2.get(3));
		count2.set(3, temp);

		temp = count3.get(0);
		count3.set(0, count3.get(3));
		count3.set(3, temp);
		temp = count3.get(1);
		count3.set(1, count3.get(3));
		count3.set(3, temp);

		for (int i = 0; i < count1.size(); i++) {
			count4.add((count2.get(i) + count3.get(i)) / 2);
		}
		result.put("actiontime", actiontime);
		result.put("count1", count1);
		result.put("count2", count2);
		result.put("count3", count3);
		result.put("count4", count4);
		return result;
	}

	@RequestMapping(value = "/repository/duration")
	public Map getDuration(HttpServletRequest request) throws Exception {
		Map<Integer, Integer> result = new HashMap<Integer, Integer>();
		List<Duration> duration = new ArrayList<Duration>();
		List<Integer> count1 = new ArrayList<Integer>();
		duration = repoDataService.getDuration();
		for (int i = 0; i < duration.size(); i++) {
			result.put(duration.get(i).getDuration(), duration.get(i).getCount());
		}

		return result;

	}

	@RequestMapping(value = "/repository/languagecontri")
	public Map getLanguagecontri(HttpServletRequest request) throws Exception {

		Map<String, Object> result = new HashMap<String, Object>();
		List<LanguageContri> languagecontri = new ArrayList<LanguageContri>();
		List<List<Integer>> countList = new ArrayList<List<Integer>>();
		languagecontri = repoDataService.getLanguagecontri();
		ArrayList<Integer> a1 = new ArrayList<Integer>();
		ArrayList<Integer> a2 = new ArrayList<Integer>();
		ArrayList<Integer> a3 = new ArrayList<Integer>();
		ArrayList<Integer> a4 = new ArrayList<Integer>();
		ArrayList<Integer> a5 = new ArrayList<Integer>();
		ArrayList<Integer> a6 = new ArrayList<Integer>();
		ArrayList<Integer> a7 = new ArrayList<Integer>();
		countList.add(a1);
		countList.add(a2);
		countList.add(a3);
		countList.add(a4);
		countList.add(a5);
		countList.add(a6);
		countList.add(a7);
		for (int i = 0; i < languagecontri.size(); i++) {

			countList.get(i).add(languagecontri.get(i).getMin());
			countList.get(i).add(languagecontri.get(i).getQ1());
			countList.get(i).add(languagecontri.get(i).getMed());
			countList.get(i).add(languagecontri.get(i).getQ3());
			countList.get(i).add(languagecontri.get(i).getMax());
		}

		result.put("count1", countList.get(0));
		result.put("count2", countList.get(1));
		result.put("count3", countList.get(2));
		result.put("count4", countList.get(3));
		result.put("count5", countList.get(4));
		result.put("count6", countList.get(5));
		result.put("count7", countList.get(6));
		return result;

	}

	@RequestMapping(value = "/repository/contributor")
	public Map<String, Integer> getRepoContributor(HttpServletRequest request) throws Exception {
		Map<String, Integer> result = new LinkedHashMap<String, Integer>();
		List<Integer> temp = repoDataService.getContributorNumber();
		result.put("0~25", 0);
		result.put("25~50", 0);
		result.put("50~75", 0);
		result.put("75~100", 0);
		result.put("over 100", 0);
		for (int i = 0; i < temp.size(); i++) {
			if (temp.get(i) >= 0 && temp.get(i) <= 25) {
				result.put("0~25", result.get("0~25") + 1);
			} else if (temp.get(i) > 25 && temp.get(i) <= 50) {
				result.put("25~50", result.get("25~50") + 1);
			} else if (temp.get(i) > 50 && temp.get(i) <= 75) {
				result.put("50~75", result.get("50~75") + 1);
			} else if (temp.get(i) > 75 && temp.get(i) <= 100) {
				result.put("75~100", result.get("75~100") + 1);
			} else {
				result.put("over 100", result.get("over 100") + 1);
			}
		}
		return result;
	}

	@RequestMapping(value = "/repository/collaborator")
	public Map<String, Integer> getRepoCollaborator(HttpServletRequest request) throws Exception {
		Map<String, Integer> result = new LinkedHashMap<String, Integer>();
		List<Integer> temp = repoDataService.getCollaboratorNumber();
		result.put("0~25", 0);
		result.put("25~50", 0);
		result.put("50~75", 0);
		result.put("75~100", 0);
		result.put("over 100", 0);
		for (int i = 0; i < temp.size(); i++) {
			if (temp.get(i) >= 0 && temp.get(i) <= 25) {
				result.put("0~25", result.get("0~25") + 1);
			} else if (temp.get(i) > 25 && temp.get(i) <= 50) {
				result.put("25~50", result.get("25~50") + 1);
			} else if (temp.get(i) > 50 && temp.get(i) <= 75) {
				result.put("50~75", result.get("50~75") + 1);
			} else if (temp.get(i) > 75 && temp.get(i) <= 100) {
				result.put("75~100", result.get("75~100") + 1);
			} else {
				result.put("over 100", result.get("over 100") + 1);
			}
		}
		return result;
	}

	@RequestMapping(value = "/repository/repocharts")
	public ModelAndView RepoChart(HttpServletRequest request) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();
		List<String> language = new ArrayList<String>();
		List<Integer> number = new ArrayList<Integer>();
		Map<String, Integer> temp = repoDataService.getLanguageAndNumber();
		for (String key : temp.keySet()) {
			language.add(key);
			number.add(temp.get(key));
		}
		result.put("language", language);
		result.put("number", number);

		// create time
		List<String> createtime = repoDataService.getRepoCreateTime();
		for (int i = 0; i < createtime.size(); i++) {
			String year = createtime.get(i).split("-")[0];
			if (result.containsKey(year)) {
				result.put(year, ((Integer) result.get(year)) + 1);
			} else {
				result.put(year, 1);
			}
		}

		// create season
		for (int i = 0; i < createtime.size(); i++) {
			int month = Integer.parseInt(createtime.get(i).split("-")[1]);
			String season = "spring";
			switch (month) {
			case 1:
				season = "winter";
				break;
			case 2:
				season = "winter";
				break;
			case 6:
				season = "summer";
				break;
			case 7:
				season = "summer";
				break;
			case 8:
				season = "summer";
				break;
			case 9:
				season = "fall";
				break;
			case 10:
				season = "fall";
				break;
			case 11:
				season = "fall";
				break;
			case 12:
				season = "winter";
				break;
			}

			if (result.containsKey(season)) {
				result.put(season, ((Integer) result.get(season)) + 1);
			} else {
				result.put(season, 1);
			}
		}

		// contributors
		List<Integer> temp1 = repoDataService.getContributorNumber();
		result.put("con.0~25", 0);
		result.put("con.25~50", 0);
		result.put("con.50~75", 0);
		result.put("con.75~100", 0);
		result.put("con.over 100", 0);
		for (int i = 0; i < temp1.size(); i++) {
			if (temp1.get(i) >= 0 && temp1.get(i) <= 25) {
				result.put("con.0~25", (Integer) result.get("con.0~25") + 1);
			} else if (temp1.get(i) > 25 && temp1.get(i) <= 50) {
				result.put("con.25~50", (Integer) result.get("con.25~50") + 1);
			} else if (temp1.get(i) > 50 && temp1.get(i) <= 75) {
				result.put("con.50~75", (Integer) result.get("con.50~75") + 1);
			} else if (temp1.get(i) > 75 && temp1.get(i) <= 100) {
				result.put("con.75~100", (Integer) result.get("con.75~100") + 1);
			} else {
				result.put("con.over 100", (Integer) result.get("con.over 100") + 1);
			}
		}

		// collaborator
		List<Integer> temp2 = repoDataService.getCollaboratorNumber();
		result.put("col.0~25", 0);
		result.put("col.25~50", 0);
		result.put("col.50~75", 0);
		result.put("col.75~100", 0);
		result.put("col.over 100", 0);
		for (int i = 0; i < temp2.size(); i++) {
			if (temp2.get(i) >= 0 && temp2.get(i) <= 25) {
				result.put("col.0~25", (Integer) result.get("col.0~25") + 1);
			} else if (temp2.get(i) > 25 && temp2.get(i) <= 50) {
				result.put("col.25~50", (Integer) result.get("col.25~50") + 1);
			} else if (temp2.get(i) > 50 && temp2.get(i) <= 75) {
				result.put("col.50~75", (Integer) result.get("col.50~75") + 1);
			} else if (temp2.get(i) > 75 && temp2.get(i) <= 100) {
				result.put("col.75~100", (Integer) result.get("col.75~100") + 1);
			} else {
				result.put("col.over 100", (Integer) result.get("col.over 100") + 1);
			}
		}

		return new ModelAndView("repo_charts", "result", result);
	}

}
