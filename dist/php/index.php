<?php 
	header("Content-type:text/html;charset=utf-8");

	$link = mysql_connect("localhost","root","123456");

	if (!$link) {
		echo "连接数据库失败";
		exit;
	};

	mysql_set_charset("utf8");

	mysql_select_db("asus");


	$sql = "select * from product";

	$res = mysql_query($sql);

	mysql_close($link);
	$arr=array();

	while ($row = mysql_fetch_assoc($res)) {
		array_push($arr,$row);
	}

	echo json_encode($arr);
 ?>