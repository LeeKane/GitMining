package org.gitmining.service;

import java.util.List;
import java.util.Map;

import org.gitmining.bean.*;

public interface RepoDataService {
	public List<SimpleRepo> searchRepo(String name);
	public Repository getRepositoryById(int id);
	public Map<String,Integer> getRepositoryScoreById(int id);
	public Map<String,List> relatedRepos(Repository repository);
	public History getRepositoryHistory(int id);
	public List<Commit> getRecentCommit(String fn);
	public List<Issue> getAllIssue(String fn);
	/**
	 * get statistics of repo languages and so on 
	 * @param type
	 * @return
	 */
	public Map<String, List> getStatCounts(String type);
	public Map<String, Integer> getLanguageAndNumber();
	public List<String> getRepoCreateTime();
	public List<Integer> getContributorNumber();
	public List<Integer> getCollaboratorNumber();
	public List<Languagetime> getLanguagetime();
	public List<ActionTime> getActiontime();	
	public List<Duration> getDuration();
	public List<LanguageContri> getLanguagecontri();
}
