<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require "vendor/autoload.php";
require_once("./rest/dao/BaseDao.class.php");
$dao = new BaseDao($users);
$results = $dao->get_all();
print_r($results);

?>