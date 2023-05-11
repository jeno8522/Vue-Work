package com.ssafy.test.model.service;


import com.ssafy.test.model.dto.User;

public interface UserService {
	User login(String id, String pass) ;
	void regist(User user) ;
	void update(User user) ;
	void remove(String id) ;
}
