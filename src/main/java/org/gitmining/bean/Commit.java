package org.gitmining.bean;

public class Commit {
	private String repo_name;
	private String commiter_name;
	private String message;
	private String sha;
	private String date;

	public String getRepo_name() {
		return repo_name;
	}

	public void setRepo_name(String repo_name) {
		this.repo_name = repo_name;
	}

	public String getCommiter_name() {
		return commiter_name;
	}

	public void setCommiter_name(String commiter_name) {
		this.commiter_name = commiter_name;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getSha() {
		return sha;
	}

	public void setSha(String sha) {
		this.sha = sha;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

}
