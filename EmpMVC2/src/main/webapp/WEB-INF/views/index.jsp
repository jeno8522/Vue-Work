<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<!-- head include 하기 -->
<%@ include file="./include/head.jsp" %>
</head>
<body>
	<!-- nav include 하기 -->
	<%@ include file="./include/nav.jsp" %>
	<%-- 페이지만의 내용 --%>
	<div class="container p-4">
		<div class="row mt-2">
			<h4>[새로 나온 프로그래밍언어 ]</h4>
		</div>
		<div class="row">
			<div class="card col-lg-3 col-md-6 col-sm-12">
				<img src="resources/image/book/p_book01.png" class="card-img-top" alt="xx책">
				<div class="card-body">
					<h5 class="card-title">점프 투 파이썬</h5>
					<p class="card-text">18000원</p>
					<a href="#" class="btn btn-primary">구매하기</a>
				</div>
			</div>
			<div class="card col-lg-3 col-md-6  col-sm-12">
				<img src="resources/image/book/p_book02.png" class="card-img-top" alt="xx책">
				<div class="card-body">
					<h5 class="card-title">API 프로그래밍</h5>
					<p class="card-text">25000원</p>
					<a href="#" class="btn btn-primary">구매하기</a>
				</div>
			</div>
			<div class="card col-lg-3 col-md-6  col-sm-12">
				<img src="resources/image/book/p_book03.png" class="card-img-top" alt="xx책">
				<div class="card-body">
					<h5 class="card-title">Vue.js 입문</h5>
					<p class="card-text">15000원</p>
					<a href="#" class="btn btn-primary">구매하기</a>
				</div>
			</div>
			<div class="card col-lg-3 col-md-6  col-sm-12">
				<img src="resources/image/book/p_book04.png" class="card-img-top" alt="xx책">
				<div class="card-body">
					<h5 class="card-title">Java 프로그래밍</h5>
					<p class="card-text">30000원</p>
					<a href="#" class="btn btn-primary">구매하기</a>
				</div>
			</div>
		</div>
	</div>
	<!-- footer include 하기 -->
	<%@ include file="./include/footer.jsp" %>