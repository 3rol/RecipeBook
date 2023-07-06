<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require '../vendor/autoload.php';
require_once __DIR__ . '/services/RecipeService.php';
require_once __DIR__ . '/dao/RecipeDao.class.php';

Flight::register('recipeService', 'RecipeService');
Flight::register('recipeDao', 'RecipeDao');


require_once __DIR__ . '/routes/RecipeRoutes.php';
Flight::start();
?>