package org.gitmining.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import net.spy.memcached.MemcachedClient;

import org.gitmining.bean.CountryCount;
import org.gitmining.bean.State;
import org.gitmining.bean.User;
import org.gitmining.dao.OrganizationDao;
import org.gitmining.dao.UserDao;
import org.gitmining.service.UserDataService;
import org.gitmining.util.DomainRetriever;

public class UserDataServiceImpl implements UserDataService {
	private UserDao userDao;
	private OrganizationDao organizationDao;
	private MemcachedClient memcachedClient;

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	public OrganizationDao getOrganizationDao() {
		return organizationDao;
	}

	public void setOrganizationDao(OrganizationDao organizationDao) {
		this.organizationDao = organizationDao;
	}

	public MemcachedClient getMemcachedClient() {
		return memcachedClient;
	}

	public void setMemcachedClient(MemcachedClient memcachedClient) {
		this.memcachedClient = memcachedClient;
	}

	@Override
	public Map<String, int[]> getCompanyTime() {
		Map<String, int[]> result = new HashMap<>();
		List<User> users = userDao.selectAllUsers();
		int[] shopify = new int[9];
		int[] google = new int[9];
		int[] github = new int[9];
		int[] twitter = new int[9];
		int[] facebook = new int[9];
		int[] microsoft = new int[9];
		for (User user : users) {
			String createDate = user.getCreated_at();
			int createYear = Integer.parseInt(createDate.split("-")[0]);
			String company = user.getCompany();
			if (company != null) {
				company = company.toLowerCase();
			} else {
				continue;
			}

			if (company.contains("shopify")) {
				shopify[createYear - 2007]++;
			} else if (company.contains("google")) {
				google[createYear - 2007]++;
			} else if (company.contains("github")) {
				github[createYear - 2007]++;
			} else if (company.contains("twitter")) {
				twitter[createYear - 2007]++;
			} else if (company.contains("facebook")) {
				facebook[createYear - 2007]++;
			} else if (company.contains("microsoft")) {
				microsoft[createYear - 2007]++;
			}
		}
	
		result.put("shopify", shopify);
		result.put("google", google);
		result.put("github", github);
		result.put("twitter", twitter);
		result.put("facebook", facebook);
		result.put("microsoft", microsoft);

		return result;
	}

	@Override
	public List<User> getAllUsers() {
		return userDao.selectAllUsers();
	}

	@Override
	public Map<String, Integer> refreshCompanyUserCache() {
		Map<String, Integer> result = new TreeMap<String, Integer>();
		List<User> users = userDao.selectAllUsers();
		Map<String, Integer> companyMap = new HashMap<String, Integer>();
		for (User user : users) {
			String company = user.getCompany();
			if (company == null || company == "") {
				company = "empty";
			}
			if (!companyMap.containsKey(company)) {
				companyMap.put(company, 1);
			} else {
				companyMap.put(company, companyMap.get(company) + 1);
			}
		}
		companyMap.put("others", 0);
		Iterator<String> keys = companyMap.keySet().iterator();
		List<String> deleteKeys = new ArrayList<String>();
		while (keys.hasNext()) {
			String key = keys.next();
			int count = companyMap.get(key);
			if (count < 50) {
				deleteKeys.add(key);
				companyMap.put("others", companyMap.get("others") + count);
			}
		}
		for (String key : deleteKeys) {
			companyMap.remove(key);
		}

		Set<String> keysRemain = companyMap.keySet();
		for (String key : keysRemain) {
			if (!key.equals("empty") && !key.equals("others")) {
				result.put(key, companyMap.get(key));
			} else {
				System.out.println(key + ":" + companyMap.get(key) + "company");
			}
		}
		memcachedClient.add("companyMap", 0, result);
		return result;
	}

	@Override
	public Map<String, Integer> getCompanyUserCount() {
		// TODO Auto-generated method stub
		Map<String, Integer> result = new TreeMap<String, Integer>();
		if (memcachedClient.get("companyMap") != null) {
			result = (Map<String, Integer>) memcachedClient.get("companyMap");
		} else {
			result = refreshCompanyUserCache();
		}
		return result;
	}

	@Override
	public Map<String, Integer> refreshBlogUserCache() {
		Map<String, Integer> blogMap = new HashMap<String, Integer>();
		List<User> users = userDao.selectAllUsers();
		for (User user : users) {
			String blog = user.getBlog();
			if (blog == null || blog == "") {
				blog = "empty";
			} else {
				blog = DomainRetriever.extractBlogDomain(blog);
			}
			if (!blogMap.containsKey(blog)) {
				blogMap.put(blog, 1);
			} else {
				blogMap.put(blog, blogMap.get(blog) + 1);
			}
		}
		blogMap.put("others", 0);
		Iterator<String> keys = blogMap.keySet().iterator();
		List<String> deleteKeys = new ArrayList<String>();
		while (keys.hasNext()) {
			String key = keys.next();
			int count = blogMap.get(key);
			if (count < 50) {
				deleteKeys.add(key);
				blogMap.put("others", blogMap.get("others") + count);
			}
		}

		for (String key : deleteKeys) {
			blogMap.remove(key);
		}
		System.out.println("empty" + blogMap.get("empty") + "blog");
		System.out.println("others" + blogMap.get("others") + "blog");
		blogMap.remove("empty");
		blogMap.remove("others");
		memcachedClient.add("blogMap", 0, blogMap);
		return blogMap;
	}

	@Override
	public Map<String, Integer> getBlogUserCount() {
		// TODO Auto-generated method stub
		Map<String, Integer> blogMap = new HashMap<String, Integer>();
		if (memcachedClient.get("blogMap") != null) {
			blogMap = (Map<String, Integer>) memcachedClient.get("blogMap");
		} else {
			blogMap = refreshBlogUserCache();
		}
		return blogMap;
	}

	@Override
	public Map<String, Integer> refreshLocationCache() {
		Map<String, Integer> locationMap = new HashMap<String, Integer>();
		List<User> users = userDao.selectAllUsers();
		for (User user : users) {
			String location = user.getLocation();
			if (location == null || location == "") {
				location = "empty";
			}
			if (!locationMap.containsKey(location)) {
				locationMap.put(location, 1);
			} else {
				locationMap.put(location, locationMap.get(location) + 1);
			}
		}
		locationMap.put("others", 0);
		Iterator<String> keys = locationMap.keySet().iterator();
		List<String> deleteKeys = new ArrayList<String>();
		while (keys.hasNext()) {
			String key = keys.next();
			int count = locationMap.get(key);
			if (count < 200) {
				deleteKeys.add(key);
				locationMap.put("others", locationMap.get("others") + count);
			}
		}

		for (String key : deleteKeys) {
			locationMap.remove(key);
		}
		System.out.println("empty" + locationMap.get("empty") + "locationMap");
		System.out.println("others" + locationMap.get("others") + "locationMap");
		locationMap.remove("empty");
		locationMap.remove("others");
		memcachedClient.add("locationMap", 0, locationMap);
		return locationMap;
	}

	@Override
	public Map<String, Integer> getLocationCount() {
		// TODO Auto-generated method stub
		Map<String, Integer> locationMap = new HashMap<String, Integer>();
		if (memcachedClient.get("locationMap") != null) {
			locationMap = (Map<String, Integer>) memcachedClient.get("locationMap");
		} else {
			locationMap = refreshLocationCache();
		}
		return locationMap;
	}

	@Override
	public Map<String, Integer> refreshEmailCache() {
		List<User> users = userDao.selectAllUsers();
		Map<String, Integer> emailMap = new HashMap<String, Integer>();
		for (User user : users) {
			String email = user.getEmail();
			if (email == null || email == "") {
				email = "empty";
			} else {
				email = DomainRetriever.extractEmailDomain(email);
			}

			if (!emailMap.containsKey(email)) {
				emailMap.put(email, 1);
			} else {
				emailMap.put(email, emailMap.get(email) + 1);
			}
		}
		emailMap.put("others", 0);
		Iterator<String> keys = emailMap.keySet().iterator();
		List<String> deleteKeys = new ArrayList<String>();
		while (keys.hasNext()) {
			String key = keys.next();
			int count = emailMap.get(key);
			if (count < 50) {
				deleteKeys.add(key);
				emailMap.put("others", emailMap.get("others") + count);
			}
		}

		for (String key : deleteKeys) {
			emailMap.remove(key);
		}
		System.out.println("empty" + emailMap.get("empty") + "emailMap");
		System.out.println("others" + emailMap.get("others") + "emailMap");
		emailMap.remove("empty");
		emailMap.remove("others");

		memcachedClient.add("emailMap", 0, emailMap);
		return emailMap;
	}

	@Override
	public Map<String, Integer> getEmailCount() {
		Map<String, Integer> emailMap = new HashMap<String, Integer>();
		if (memcachedClient.get("emailMap") != null) {
			emailMap = (Map<String, Integer>) memcachedClient.get("emailMap");
		} else {
			emailMap = refreshEmailCache();
		}
		return emailMap;
	}

	@Override
	public Map<String, Integer> getCountryCount() {
		Map<String, Integer> countryMap = new HashMap<String, Integer>();
		List<CountryCount> list = userDao.countCountry();
		for (CountryCount countryCount : list) {
			countryMap.put(countryCount.getcountry(), countryCount.getuser_count());
		}
		return countryMap;
	}

	@Override
	public Map<String, Integer> getStateCount() {
		Map<String, Integer> stateMap = new HashMap<String, Integer>();
		List<State> list = userDao.selectStates();
		for (State state : list) {
			stateMap.put(state.getValue(), state.getCount());
		}
		return stateMap;
	}

	@Override
	public int getUserCount() {
		// TODO Auto-generated method stub
		return userDao.countUsers();
	}

	@Override
	public int getOrgCount() {
		// TODO Auto-generated method stub
		return organizationDao.countOrganizations();
	}

	@Override
	public Map<Integer, Integer> refreshRepoCache() {
		Map<Integer, Integer> repoMap = new TreeMap<Integer, Integer>();
		int[] bounds = { 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 52713 };
		int[] counts = new int[bounds.length];
		List<User> users = userDao.selectAllUsers();
		Collections.sort(users, new Comparator<User>() {
			@Override
			public int compare(User u1, User u2) {
				// TODO Auto-generated method stub
				return u1.getPublic_repos() - u2.getPublic_repos();
			}
		});

		int bound = 0;
		for (int i = 0; i < users.size(); i++) {
			if (users.get(i).getPublic_repos() > bounds[bound]) {
				counts[bound] = i;
				bound++;
			}
		}
		counts[counts.length - 1] = users.size();

		for (int i = 0; i < counts.length; i++) {
			repoMap.put(bounds[i], counts[i]);
		}

		memcachedClient.add("repoMap", 0, repoMap);
		return repoMap;
	}

	@Override
	public Map<Integer, Integer> getUserRepoData() {
		// TODO Auto-generated method stub
		Map<Integer, Integer> repoMap = new TreeMap<Integer, Integer>();
		if (memcachedClient.get("repoMap") != null) {
			repoMap = (Map<Integer, Integer>) memcachedClient.get("repoMap");
		} else {
			repoMap = refreshRepoCache();
		}
		return repoMap;
	}

	@Override
	public Map<Integer, Integer> refreshGistCache() {
		Map<Integer, Integer> gistMap = new TreeMap<Integer, Integer>();
		int[] bounds = { 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 3044 };
		int[] counts = new int[bounds.length];
		List<User> users = userDao.selectAllUsers();
		Collections.sort(users, new Comparator<User>() {
			@Override
			public int compare(User u1, User u2) {
				// TODO Auto-generated method stub
				return u1.getPublic_gists() - u2.getPublic_gists();
			}
		});

		int bound = 0;
		for (int i = 0; i < users.size(); i++) {
			if (users.get(i).getPublic_gists() > bounds[bound]) {
				counts[bound] = i;
				bound++;
			}
		}
		counts[counts.length - 1] = users.size();

		for (int i = 0; i < counts.length; i++) {
			gistMap.put(bounds[i], counts[i]);
		}
		memcachedClient.add("gistMap", 0, gistMap);
		return gistMap;
	}

	@Override
	public Map<Integer, Integer> getUserGistData() {
		// TODO Auto-generated method stub
		// init return map
		Map<Integer, Integer> gistMap = new TreeMap<Integer, Integer>();
		if (memcachedClient.get("gistMap") != null) {
			gistMap = (Map<Integer, Integer>) memcachedClient.get("gistMap");
		} else {
			gistMap = refreshGistCache();
		}
		return gistMap;
	}

	@Override
	public Map<Integer, Integer> refreshFollowerCache() {
		Map<Integer, Integer> followerMap = new TreeMap<Integer, Integer>();
		int[] bounds = { 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 31073 };
		int[] counts = new int[bounds.length];
		List<User> users = userDao.selectAllUsers();
		Collections.sort(users, new Comparator<User>() {
			@Override
			public int compare(User u1, User u2) {
				// TODO Auto-generated method stub
				return u1.getFollowers() - u2.getFollowers();
			}
		});

		int bound = 0;
		for (int i = 0; i < users.size(); i++) {
			if (users.get(i).getFollowers() > bounds[bound]) {
				counts[bound] = i;
				bound++;
			}
		}
		counts[counts.length - 1] = users.size();

		for (int i = 0; i < counts.length; i++) {
			followerMap.put(bounds[i], counts[i]);
		}
		memcachedClient.add("followerMap", 0, followerMap);
		return followerMap;
	}

	@Override
	public Map<Integer, Integer> getUserFollowerData() {
		// TODO Auto-generated method stub
		// init result, first check cache
		Map<Integer, Integer> followerMap = new TreeMap<Integer, Integer>();
		if (memcachedClient.get("followerMap") != null) {
			followerMap = (Map<Integer, Integer>) memcachedClient.get("followerMap");
		} else {
			followerMap = refreshFollowerCache();
		}

		return followerMap;
	}

	@Override
	public Map<Integer, Integer> refreshFollowingCache() {
		Map<Integer, Integer> followingMap = new TreeMap<Integer, Integer>();
		int[] bounds = { 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 114992 };
		int[] counts = new int[bounds.length];
		List<User> users = userDao.selectAllUsers();
		Collections.sort(users, new Comparator<User>() {
			@Override
			public int compare(User u1, User u2) {
				// TODO Auto-generated method stub
				return u1.getFollowing() - u2.getFollowing();
			}
		});

		int bound = 0;
		for (int i = 0; i < users.size(); i++) {
			if (users.get(i).getFollowing() > bounds[bound]) {
				counts[bound] = i;
				bound++;
			}
		}
		counts[counts.length - 1] = users.size();

		for (int i = 0; i < counts.length; i++) {
			followingMap.put(bounds[i], counts[i]);
		}

		memcachedClient.add("followingMap", 0, followingMap);
		return followingMap;
	}

	@Override
	public Map<Integer, Integer> getUserFollowingData() {
		// TODO Auto-generated method stub
		Map<Integer, Integer> followingMap = new TreeMap<Integer, Integer>();
		if (memcachedClient.get("followingMap") != null) {
			followingMap = (Map<Integer, Integer>) memcachedClient.get("followingMap");
		} else {
			followingMap = refreshFollowingCache();
		}

		return followingMap;
	}

	@Override
	public Map<String, int[]> getUserActiveData() {
		Map<String, int[]> result = new HashMap<String, int[]>();
		// if(memcachedClient.get("userActiveData") != null){
		// result = (Map<String, int[]>) memcachedClient.get("userActiveData");
		// return result;
		// }else{
		List<User> allUsers = userDao.selectAllUsers();
		Map<Integer, Integer> map = new TreeMap<Integer, Integer>();

		for (int i = 0; i < allUsers.size(); i++) {
			User user = allUsers.get(i);
			String createDate = user.getCreated_at();
			int createYear = Integer.parseInt(createDate.split("-")[0]);
			if (map.containsKey(createYear)) {
				map.put(createYear, map.get(createYear) + 1);
			} else {
				map.put(createYear, 1);
			}
		}
		Set<Integer> yearset = map.keySet();
		int[] years = new int[yearset.size()];
		int[] people = new int[yearset.size()];
		int index = 0;
		for (Integer year : yearset) {
			years[index] = year;
			people[index] = map.get(year);
			index++;
		}
		// memcachedClient.add("userActiveData", 0, result);
		result.put("year", years);
		result.put("people", people);
		return result;
		// }
	}

}
