<?php
	include_once 'connectDB.php';

	$useID = "webstoryboy";
	$uname = "황상연";
	$upassword = "forever0";
	$email = "webstoryboy@naver.com";
	$birthDay = "1999-09-09";
	$phone = "01071122049";
	$gender = "m";

	//쿼리문 작성 
	$sql = "INSERT INTO myMember(useID, uname, upassword, email, birthDay, phone, gender, regTime) VALUES('{$useID}','{$uname}','{$upassword}','{$email}','{$birthDay}','{$phone}','{$gender}', now() )";

	//퀴리문 전송 
	$result = $dbConnect->query($sql);
	
	if($result){
		echo "yes";
	} else {
		echo "No!!!!!!!!!!!!!!!!!!!!!!!!!!!";
	}

	
?>