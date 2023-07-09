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

//middleware method for login

Flight::route('/*', function () {
    $path = Flight::request()->url;
    if ($path == '/login' || $path == '/register' || $path == '/country' || $path == '/docs.json') {
        return TRUE;
    }
    $headers = getallheaders();
    if (@!$headers['Authorization']) {
        Flight::json(["message" => "Unauthorized access"], 403);
        return FALSE;
    } else {
        try {
            $decoded = (array) JWT::decode($headers['Authorization'], new Key(Config::JWT_SECRET(), 'HS256'));
            Flight::set('validUser', $decoded);
            return TRUE;
        } catch (\Exception $e) {
            Flight::json(["message" => "Token authorization invalid"], 403);
            return FALSE;
        }
    }
});


require_once __DIR__ . '/routes/RecipeRoutes.php';
require_once __DIR__ . '/routes/RecipeTypeRoutes.php';
require_once __DIR__ . '/routes/RecipeTipsRoutes.php';
require_once __DIR__ . '/routes/UserRoutes.php';
Flight::start();
?>