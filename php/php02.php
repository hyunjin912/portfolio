<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>PHP</title>
	<style>
		.clock {background: #f00; color: #fff;}
	</style>
</head>
<body>
	
	<div class="clock"></div>

	<script>
		let today = new Date();	//날짜 객체를 생성하고 변수에 저장 
		let nowMonth = today.getMonth();	//현재 월을 변수에 저장
		let nowDate = today.getDate();		//현재 일을 변수에 저장 
		let nowFullYear = today.getFullYear();		//현재 년도 

		document.write(today,"<br>"); 
		document.write(nowMonth,"<br>"); 
		document.write(nowDate,"<br>"); 
		document.write(nowFullYear,"<br>"); 

		let clock = document.querySelector(".clock");

		setInterval(function(){
			clock.innerHTML = new Date().toLocaleString();
		},1000);
	</script>
	

	<?php
		ini_set("date.timezone","Asia/Seoul");
		echo "<br>";
		echo "1970년 1월 1일 0시 0분 0초로부터 ".time()."초가 지났습니다. ";
		echo "<br>";
		echo "현재 시간은 " .date("Y년 m월 d일 H시 i분 s초", time());
	?>

</body>
</html>