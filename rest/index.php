<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require '../vendor/autoload.php';
require_once __DIR__ . '/services/RecipeService.php';

Flight::register('recipeService', 'RecipeService');


require_once __DIR__ . '/routes/RecipeRoutes.php';
Flight::start();
?>