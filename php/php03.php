<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>get	</title>
</head>
<body>
	<?php
		//http://richclub9.dothome.co.kr/php/php03.php?type=first&mobile=ok
		echo "GET['type']는 " .$_GET['type']."<br>";
		echo "GET['mobile']는 " .$_GET['mobile']."<br>";
	?>


	<h1>회원가입</h1>
	<form aForever0!ction="php03-1.php" method="post" name="data">
		<label for="email">email</label>
		<input type="email" name="email" id="email" placeholder="이메일">
		<label for="password">비밀번호</label>
		<input type="password" name="password" id="password" placeholder="비밀번호 입력">
		<input type="submit" value="전달">
	</form>
</body>
</html>






























