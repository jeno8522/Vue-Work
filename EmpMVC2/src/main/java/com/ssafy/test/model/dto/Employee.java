package com.ssafy.test.model.dto;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import io.swagger.annotations.ApiParam;


public class Employee implements Serializable{

	@ApiParam(value="사원번호", required = true)
	private int empno;
	@ApiParam(value="이름", required = true)
	private String name;
	@ApiParam(value="이메일")
	private String email;
	@ApiParam(value="고용일")
	private Date hire_date;
	@ApiParam(value="직업")
	private String job;
	@ApiParam(value="연봉")
	private double salary;
	@ApiParam(value="부서번호")
	private int deptno;
	private List<JobHistory> history;

	public Employee() {
		super();
	}

	public Employee(int empno, String name, String email, Date hire_date, String job, double salary, int deptno) {
		super();
		this.empno = empno;
		this.name = name;
		this.email = email;
		this.hire_date = hire_date;
		this.job = job;
		this.salary = salary;
		this.deptno = deptno;
	}

	public int getEmpno() {
		return empno;
	}

	public void setEmpno(int empno) {
		this.empno = empno;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getHire_date() {
		return hire_date;
	}

	public void setHire_date(Date hire_date) {
		this.hire_date = hire_date;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public int getDeptno() {
		return deptno;
	}

	public void setDeptno(int deptno) {
		this.deptno = deptno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	

	public List<JobHistory> getHistory() {
		return history;
	}

	public void setHistory(List<JobHistory> history) {
		this.history = history;
	}

	@Override
	public String toString() {
		return "Employee [empno=" + empno + ", name=" + name + ", email=" + email + ", hire_date=" + hire_date
				+ ", job=" + job + ", salary=" + salary + ", deptno=" + deptno + ", history=" + history + "]";
	}
}
