<?php
require_once __DIR__ . '/../services/RecipeService.php';
// CRUD operations for recipes

Flight::route('GET /recipes', function () {
    Flight::json(Flight::recipeService()->get_all());
});


Flight::route('GET /recipes/@id', function ($id) {
    Flight::json(Flight::recipeService()->get_by_id($id));
});


Flight::route('POST /recipes', function () {
    Flight::json(Flight::recipeService()->add(Flight::request()->data->getData()));
});


Flight::route('PUT /recipes/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::recipeService()->update($id, $data));
});


Flight::route('DELETE /recipes/@id', function ($id) {
    Flight::recipeService()->delete($id);
    Flight::json(["message" => "deleted"]);
});

?>