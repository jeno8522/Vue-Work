package com.ssafy.test;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ssafy.test.model.dto.Employee;
import com.ssafy.test.model.dto.PageBean;
import com.ssafy.test.model.service.EmployeeService;

@Controller
@RequestMapping("/emp")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;

	@GetMapping("/list")
	public String list(Model model, PageBean bean) {
		
		List<Employee> employees = employeeService.searchAll(bean);
		
		model.addAttribute("employees", employees);
		
		return "/emp/list";
	}
	
	@GetMapping("/detail")
	public String detail(@RequestParam("empno") int empno, Model model) {
		
		Employee employee = employeeService.search(empno);
		
		model.addAttribute("employee", employee);
		
		return "/emp/detail";
	}
	
	@GetMapping("/regist")
	public void regist() {
		
	}
	
	@PostMapping("/regist")
	public String regist(Employee employee) {
		
		employeeService.insert(employee);
		
		return "redirect:/emp/list";
	}

	@GetMapping("/update")
	public String update(@RequestParam("empno") int empno, Model model) {
		
		Employee employee = employeeService.search(empno);
		
		model.addAttribute("employee", employee);
		
		return "/emp/update";
	}
	
	@PostMapping("/update")
	public String update(Employee employee) {
		
		employeeService.update(employee);
		
		return "redirect:/emp/list";
	}
	
	@GetMapping("/remove")
	public String remove(int empno) {
		
		employeeService.remove(empno);
		
		return "redirect:/emp/list";
	}
	
}
