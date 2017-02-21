<?php
	
	$url = "http://api.douban.com/v2/movie/top250";
	$city = $_GET["city"];
	$result = file_get_contents($url . "?city=" . $city);
	echo $result;
?>