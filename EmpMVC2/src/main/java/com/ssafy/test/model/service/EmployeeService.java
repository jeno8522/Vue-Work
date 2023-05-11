package com.ssafy.test.model.service;

import java.util.List;

import com.ssafy.test.model.dto.Employee;
import com.ssafy.test.model.dto.PageBean;

public interface EmployeeService {
	void insert(Employee employee);
	void update(Employee employee);
	void remove(int empno);
	Employee search(int empno);
	List<Employee> searchAll(PageBean bean);
}
