<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="com.ssafy.test.model.dto.*"%>
<!DOCTYPE html>
<html>
<head>
<title>Insert title here</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
	rel="stylesheet">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
<%@ include file="/WEB-INF/views/include/head.jsp"%>
</head>
<body>
	<%@ include file="/WEB-INF/views/include/nav.jsp"%>
	
	<div class="container p-4">
		<h2 class='text-center'>직원 정보 상세</h2>
			<table class='table' border='1'>
				<tr>
					<td><label for="empno" class="form-label">사원번호</label></td>
					<td>${employee.empno}</td>
				</tr>
				<tr>
					<td><label for="name" class="form-label">이름</label></td>
					<td>${employee.name}</td>
				</tr>
				<tr>
					<td><label for="email" class="form-label">이메일</label></td>
					<td>${employee.email}</td>
				</tr>
				<tr>
					<td><label for="hire_date" class="form-label">입사일</label></td>
					<td>${employee.hire_date}</td>
				</tr>
				<tr>
					<td><label for="job" class="form-label">직무</label></td>
					<td><pre>${employee.job}</pre></td>
				</tr>
				<tr>
					<td><label for="salary" class="form-label">급여</label></td>
					<td><pre>${employee.salary}</pre></td>
				</tr>
				<tr>
					<td><label for="deptno" class="form-label">부서</label></td>
					<td><pre>${employee.deptno}</pre></td>
				</tr>
			</table>
			
			<table class="table" border="1">
				<caption>근무이력</caption>
				<tr>
				<td>부서번호</td>
				<td>담당업무</td>
				<td>시작</td>
				<td>종료</td>
				</tr>
				<c:forEach items="${employee.history }" var ="history">
				<tr>
				<td>${history.deptno }</td>
				<td>${history.job }</td>
				<td>${history.sdate }</td>
				<td>${history.edate }</td>
				</tr>
				</c:forEach>
			</table>
			<div class='text-center'>
					<a class='btn btn-primary' href='${root}/emp/update?empno=${employee.empno}'>직원정보 수정</a>
					<a class='btn btn-primary' href='${root}/emp/remove?empno=${employee.empno}'>직원정보 삭제</a>
					<a class='btn btn-primary' href='${root}/emp/list'>직원 목록</a>
			</div>
		</form>
	</div>
</body>

<script>
	
</script>
</html>
