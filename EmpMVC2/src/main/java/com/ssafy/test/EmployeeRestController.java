package com.ssafy.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.test.model.dto.EmpException;
import com.ssafy.test.model.dto.Employee;
import com.ssafy.test.model.dto.PageBean;
import com.ssafy.test.model.service.EmployeeService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController // rest 서비스를 전용으로 하는 controller, 모든 메서드는 @RespoㅜseBody를 붙인 효과
@CrossOrigin(origins = { "*" }, maxAge = 6000) // 다른 서버에서 ajax로 요청이 와도 서비스 되도록
@RequestMapping("/rest")
@Api(value = "emp REST-ful위한 API", description = "emp 정보")
public class EmployeeRestController {

	@Autowired
	private EmployeeService employeeService;
	
	private static final Logger logger = LoggerFactory.getLogger(EmployeeRestController.class);
	private static final String SUCCESS = "success";

	@ApiOperation(value = "emp 목록 정보", notes = "검색 조건에 맞는 emp 정보를 검색한 목록 정보")
	@GetMapping("/emp")
	public ResponseEntity<?> searchAll(Model model, PageBean bean) {

		List<Employee> employees = employeeService.searchAll(bean);

		Map<String, Object> result = new HashMap<String, Object>();
		result.put("employees", employees);
		result.put("pageLink", bean.getPageLink());

		if (employees != null && !employees.isEmpty()) {
			return new ResponseEntity<Map<String, Object>>(result, HttpStatus.OK);
		} else {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
	}

	@ApiOperation(value = "emp 정보 등록", notes = "emp 정보를 등록시킨다.")
	@PostMapping("/emp")
	public ResponseEntity<String> regist(@RequestBody Employee employee) {
		employeeService.insert(employee);
		return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
	}

	@ApiOperation(value = "emp 정보 수정", notes = "emp 정보를 수정한다.")
	@PutMapping("/emp")
	public ResponseEntity<String> update(@RequestBody Employee employee) {
		employeeService.update(employee);
		return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
	}

	@ApiOperation(value = "emp 정보 조회", notes = "emp 정보를 조회한다.")
	@GetMapping("/emp/{empno}") // PathVariable @GetMapping 여러개를 구별하므로 반드시 전달되어야 한다.
	public ResponseEntity<?> search(@PathVariable int empno) {
		Employee employee = employeeService.search(empno);
		if (employee != null) {
			return new ResponseEntity<Employee>(employee, HttpStatus.OK);
		} else {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
	}

	@ApiOperation(value = "emp 정보 삭제", notes = "emp 정보를 삭제한다.")
	@DeleteMapping("/emp/{empno}") // PathVariable @GetMapping 여러개를 구별하므로 반드시 전달되어야 한다.
	public ResponseEntity<?> remove(@PathVariable int empno) {
		employeeService.remove(empno);
		return new ResponseEntity<String>(SUCCESS, HttpStatus.NO_CONTENT);
	}

	@ExceptionHandler
	public ResponseEntity<String> handler(Exception e) {
		logger.debug("book.error..........msg:{}", e.getMessage());
		HttpHeaders resHeader = new HttpHeaders();
		resHeader.add("Content-Type", "application/json;charset=UTF-8");
		if (e instanceof EmpException) {
			return new ResponseEntity<String>(e.getMessage(), resHeader, HttpStatus.FAILED_DEPENDENCY);
		} else {
			return new ResponseEntity<String>("처리중 오류발생", resHeader, HttpStatus.FAILED_DEPENDENCY);
		}
	}

}
