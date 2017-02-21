<?php
	$url = "http://api.douban.com/v2/movie/subject/";
	$id = $_GET["id"];
	$result = file_get_contents($url .  $id);
	echo $result;
?>