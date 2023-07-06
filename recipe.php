<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once("./rest/dao/BaseDao.class.php");
require_once("./rest/dao/UserDao.class.php");
require_once("./rest/dao/RecipeDao.class.php");

$recipe_dao = new RecipeDao();
$recipe = $recipe_dao->getRecipesById(1);
print_r($recipe)

    ?>