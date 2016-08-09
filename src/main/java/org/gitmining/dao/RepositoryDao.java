package org.gitmining.dao;

import java.util.List;
import java.util.Map;

import org.gitmining.bean.*;

public interface RepositoryDao {
	public List<Languagetime> getLanguagetime();
	
	public List<ActionTime> getActiontime();
	
	public List<Duration> getDuration();

	public List<LanguageContri> getLanguagecontri();

	public List<SimpleRepo> searchRepos(String pattern);

	public SimpleRepo searchSimpleRepoById(int id);

	public Repository getRepositoryById(int id);

	public RepoScore getRepoScoreById(int repo_id);

	public Repository getRepositoryByName(String name);

	public List<RepoTagPair> getAllRepoTagPairs();

	public List<RepoTagPair> getRepoTagPairsByTagID(int tid);

	public List<Repository> getRepositoryByOwnerName(String owner_name);

	public List<SimpleRepo> getSimpleReposByTagNode(String node_id);

	public List<SimpleRepo> getSimpleReposByTagName(List<String> tag_name);

	public List<SimpleRepo> getSimpleReposByTagNameAndSort(
			List<String> tag_name, String type);

	public List<Repository> getSimpleReposByTagNameAndSortPagination(
			List<String> tag_name, Sort type, int begin, int itemsPerPage);

	public List<SimpleRepo> getReposSortByHot(List<Integer> tagIDs, int number);

	public List<RepoPairRelation> getSimilarRepoPairRelation(int repo_id);

	public List<Repository> getContributedRepoByUserId(int user_id);

	public int getResultCountPagination(List<String> tagName, Sort type);

	public List<String> getAllLanguages();
	
	public List<Integer> getStatCounts(String table);
	
	public List<String> getStatTypes(String table,String column);
	
	public Map<String, Integer> getLanguageAndNumber();
	
	public List<String> getRepoCreateTime();
	
	public List<Integer> getContributorNumber();
	
	public List<Integer> getCollaboratorNumber();
	
	public List<Commit> getRecentCommit(String fn);
	
	public List<Issue> getAllIssue(String fn);
	
	
}
