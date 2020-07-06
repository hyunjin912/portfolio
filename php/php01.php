<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>PHP01</title>
</head>
<body>
	<script>
		let javascript = "javascript";

		document.write(javascript);
		document.write("<br>");
		document.write("나는 " + javascript + " 배웁니다.");
		document.write("<br><br>");
	</script>

	<?php
		$php = "php";

		echo $php;
		echo "<br>";
		echo "나는 " .$php. " 배웁니다.";
		echo "<br>";
		echo "나는 {$php} 배웁니다.";
		echo "<br><br>";


		$fruit = array();
	    
	    array_push($fruit, 'apple','banana','grape','coconut', 'melon');
	    
	    echo $fruit[0]."<br>";
	    echo $fruit[1]."<br>";
	    echo $fruit[2]."<br>";
	    echo $fruit[3]."<br>";
	    echo $fruit[4]."<br>";
	    echo "<br><br>";


	    $earth = array();
    
        $earth['nation'][0] = 'korea';
        $earth['nation'][1] = 'america';
        $earth['nation'][2] = 'canada';
        $earth['nation'][3] = 'japen';
        $earth['nation'][4] = 'china';
        $earth['nation'][5] = 'france';
        
    	//배열의 내용을 보여줍니다.
        var_dump($earth);
        
        echo "<br><br>";
        echo $earth['nation'][4];
	?>

</body>
</html>