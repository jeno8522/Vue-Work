package com.ssafy.test.model.dto;

import java.io.Serializable;

public class JobHistory implements Serializable{
	private int empno;
	private String sdate;
	private String edate;
	private String job;
	private int deptno;
	
	public JobHistory() {
		
	}

	public JobHistory(int empno, String sdate, String edate, String job, int deptno) {
		super();
		this.empno = empno;
		this.sdate = sdate;
		this.edate = edate;
		this.job = job;
		this.deptno = deptno;
	}

	public int getEmpno() {
		return empno;
	}

	public void setEmpno(int empno) {
		this.empno = empno;
	}

	public String getSdate() {
		return sdate;
	}

	public void setSdate(String sdate) {
		this.sdate = sdate;
	}

	public String getEdate() {
		return edate;
	}

	public void setEdate(String edate) {
		this.edate = edate;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public int getDeptno() {
		return deptno;
	}

	public void setDeptno(int deptno) {
		this.deptno = deptno;
	}

	
	
	@Override
	public String toString() {
		return "JobHistory [empno=" + empno + ", sdate=" + sdate + ", edate=" + edate + ", job=" + job + ", deptno="
				+ deptno + "]";
	}
	
	
}
