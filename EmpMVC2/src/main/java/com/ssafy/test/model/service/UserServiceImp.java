package com.ssafy.test.model.service;

import java.sql.SQLException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.test.model.dao.UserDao;
import com.ssafy.test.model.dto.EmpException;
import com.ssafy.test.model.dto.User;

@Service
public class UserServiceImp implements UserService {
	
	UserDao dao;
	
	public UserServiceImp(UserDao dao) {
		super();
		this.dao = dao;
	}

	public User login(String id, String pass) {
		try {
			User user = dao.search(id);
			
			if(user == null) throw new EmpException("등록되지 않은 아이디입니다.");
			
			if(!pass.equals(user.getPass()))
				throw new EmpException("비밀 번호 오류 발생!!!!");
			
			return user;
		} catch (SQLException e) {
			throw new EmpException("로그인 처리 중 오류 발생");
		}
	}

	@Transactional
	@Override
	public void regist(User user) {
		try {
			User find = dao.search(user.getId());
			if(find!=null) {
				throw new EmpException("이미 등록된 아이디 입니다.");
			}
			dao.regist(user);
		} catch (SQLException e) {
			throw new EmpException("회원 정보 처리 중 오류 발생!!!");
		}
	}

	@Transactional
	@Override
	public void update(User user) {
		// TODO Auto-generated method stub

	}

	@Transactional
	@Override
	public void remove(String id) {
		// TODO Auto-generated method stub

	}

}
