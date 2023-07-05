<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once("./rest/dao/BaseDao.class.php");

$user_dao = new UserDao();

$user = $user_dao->get_user_by_email("erol@gmail.com");
print_r($user)

    ?>