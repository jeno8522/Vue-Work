package com.ssafy.test;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ssafy.test.model.dto.User;
import com.ssafy.test.model.service.UserService;

@Controller
@RequestMapping("/user")
public class UserController {

	UserService service;
	
	public UserController(UserService service) {
		super();
		this.service = service;
	}

	@GetMapping("/login")
	private void login() {
		
	}
	
	@PostMapping("/login")
	private String login(@RequestParam("id") String id, @RequestParam("pw") String pass, HttpSession session) {
		
		User user = service.login(id, pass);
		
		session.setAttribute("userInfo", user);
		
		return "index";
	}
	
	@GetMapping("/logout")
	private String logout(HttpSession session) {
		
		session.invalidate();
		
		return "index";
	}
	
}
