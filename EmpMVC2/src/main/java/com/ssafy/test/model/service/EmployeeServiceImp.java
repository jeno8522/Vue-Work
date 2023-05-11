package com.ssafy.test.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.test.model.dao.EmployeeDao;
import com.ssafy.test.model.dto.EmpException;
import com.ssafy.test.model.dto.Employee;
import com.ssafy.test.model.dto.PageBean;
import com.ssafy.test.util.PageUtility;

@Service
public class EmployeeServiceImp implements EmployeeService {
	
	@Autowired
	EmployeeDao dao;

	@Transactional
	public void insert(Employee employee) {
		try {
			Employee find = dao.search(employee.getEmpno());
			if(find!=null)
				throw new EmpException("이미 등록된 isbn입니다.");
			
			dao.insert(employee);
		} catch (SQLException e) {
			throw new EmpException("책 정보 등록 중 오류 발생");
		}
	}

	@Transactional
	@Override
	public void update(Employee employee) {
		try {
			dao.update(employee);
		} catch (Exception e) {
			throw new EmpException("책 정보 수정 중 오류 발생");
		}
	}

	@Transactional
	@Override
	public void remove(int empno) {
		try {
			dao.remove(empno);
		} catch (Exception e) {
			e.printStackTrace();
			throw new EmpException("책 정보 삭제 중 오류 발생");
		}
	}

	@Override
	public Employee search(int empno) {
		try {
			Employee employee = dao.search(empno);
			System.out.println(employee);
			if(employee == null) {
				throw new EmpException("요청한 책은 등록되지 않은 책 정보입니다.");
			}
			return employee;
		} catch (SQLException e) {
			throw new EmpException("책 정보 조회 중 오류 발생");
		}
	}

	@Override
	public List<Employee> searchAll(PageBean bean) {
		try {
			int total = dao.totalCount(bean);
			
			PageUtility page = new PageUtility(bean.getInterval(), total, bean.getPageNo(), "");
			bean.setPageLink(page.getPageBar());
			
			return dao.searchAll(bean);
		} catch (Exception e) {
			e.printStackTrace();
			throw new EmpException("책 목록 정보를 조회 하는 중 오류 발생!!!");
		}
	}
}
