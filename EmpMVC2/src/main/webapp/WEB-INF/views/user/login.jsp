<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<%@ include file="/WEB-INF/views/include/head.jsp" %>
</head>
<body>
	<%@ include file="/WEB-INF/views/include/nav.jsp" %>
	<%-- 페이지만의 내용 --%>
	<c:if test="${!empty param.referer}">
		<c:set var='referer'  value='${param.referer}'/>
	</c:if>
	<div class="container p-4">
	  <h2>로그인</h2>
	  <form action="${root}/user/login" method="post">
	  	<input type="hidden" name="referer" value="${referer}">
	  	<c:if test="${!empty msg }">
	  	  <div class="form-group">
	  	  <h3 class='text-center text-danger'>${msg}</h3>
	    </div>
	  	</c:if>
	    <div class="form-group">
	      <label for="id">id:</label>
	      <input type="text" class="form-control" id="id" name="id" placeholder="ID 입력" value="${cookie.saveId.value}">
	    </div>
	    <div class="form-group">
	      <label for="pw">Password:</label>
	      <input type="password" class="form-control" id="pw" name="pw" placeholder="비밀번호 입력" >
	    </div>
	    <div class="form-group form-check">
	      <label class="form-check-label">
	      	<c:choose>
	      		<c:when test="${empty cookie.saveId}">
	        		<input class="form-check-input" type="checkbox" name="remember"> 아이디 기억하기
	        	</c:when>
	        	<c:otherwise>
	        		<input class="form-check-input" type="checkbox" name="remember" checked="checked"> 아이디 기억하기
	        	</c:otherwise>
	        </c:choose>
	      </label>
	    </div>
	    <button type="submit" class="btn btn-primary">로그인</button>
	    <a class="btn btn-secondary" href="${root}" >메인 페이지로</a>
	    <a class="btn btn-secondary" href="${root}/user/regist" >회원가입</a>
	  </form>
	</div>
<%@ include file="/WEB-INF/views/include/footer.jsp" %>