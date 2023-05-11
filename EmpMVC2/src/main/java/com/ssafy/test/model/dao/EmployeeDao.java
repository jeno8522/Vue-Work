package com.ssafy.test.model.dao;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.test.model.dto.Employee;
import com.ssafy.test.model.dto.PageBean;

public interface EmployeeDao {
	void insert(Employee employee) throws SQLException;
	void update(Employee employee) throws SQLException;
	void remove(int empno) throws SQLException;
	Employee search(int empno) throws SQLException;
	List<Employee> searchAll(PageBean bean) throws SQLException;
	int totalCount(PageBean bean);
}
