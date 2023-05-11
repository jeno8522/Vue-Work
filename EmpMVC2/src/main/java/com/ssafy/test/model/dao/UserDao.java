package com.ssafy.test.model.dao;

import java.sql.SQLException;

import com.ssafy.test.model.dto.User;


public interface UserDao {
	/**
	 * 입력된 id/pass 기반으로 User를 조회해서 반환한다.
	 * @param id
	 * @param pass
	 * @return
	 * @throws SQLException
	 */
	User search(String id) throws SQLException;
	void regist(User user) throws SQLException;
	void update(User user) throws SQLException;
	void remove(String id) throws SQLException;
}
