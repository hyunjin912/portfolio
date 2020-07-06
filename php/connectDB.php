<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>	</title>
</head>
<body>
	<?php
		$host = "localhost";
		$user = "jinlee22";
		$pw = "guswls!!23";
		$dbName = "jinlee22";
		$dbConnect = new mysqli($host, $user, $pw, $dbName);
		$dbConnect -> set_charset("utf8");

		if(mysqli_connect_errno()){
			echo "데이터베이스 접속 실패";
			echo mysqli_connect_errno();
		} else {
			echo "데이터베이스 접속 성공";
		}
	?>
</body>
</html>