<?php
	$http_origin = $_SERVER['HTTP_ORIGIN'];

	$allowed_domains = array(
	  'https://il-ilce-rest-api.herokuapp.com/',
	);

	if (in_array($http_origin, $allowed_domains))
	{  
	    header("Access-Control-Allow-Origin: $http_origin");
	}
?>