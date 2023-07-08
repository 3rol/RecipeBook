<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

require '../vendor/autoload.php';
require_once __DIR__ . '/services/RecipeService.php';
require_once __DIR__ . '/dao/RecipeDao.class.php';
require_once __DIR__ . '/services/RecipeTypeService.php';
require_once __DIR__ . '/dao/RecipeTypeDao.class.php';
require_once __DIR__ . '/dao/UserDao.class.php';

Flight::register('recipeService', 'RecipeService');
Flight::register('recipeDao', 'RecipeDao');
Flight::register('recipeTypeService', 'RecipeTypeService');
Flight::register('recipeTypeDao', 'RecipeTypeDao');
Flight::register('recipeTipsService', 'RecipeTipsService');
Flight::register('recipeTipsDao', 'RecipeTipsDao');
Flight::register('userDao', 'UserDao');

require_once __DIR__ . '/routes/RecipeRoutes.php';
require_once __DIR__ . '/routes/RecipeTypeRoutes.php';
require_once __DIR__ . '/routes/RecipeTipsRoutes.php';
require_once __DIR__ . '/routes/UserRoutes.php';
Flight::start();
?>