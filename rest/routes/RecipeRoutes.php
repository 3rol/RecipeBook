<?php
require_once __DIR__ . '/../services/RecipeService.php';
// CRUD operations for recipes

Flight::route('GET /recipes', function () {
    Flight::json(Flight::recipeService()->get_all_recipes());
});


Flight::route('GET /recipes/@id', function ($id) {
    Flight::json(Flight::recipeService()->get_recipe_by_id($id));
});


Flight::route('POST /recipes', function () {
    Flight::json(Flight::recipeService()->add_recipe(Flight::request()->data->getData()));
});


Flight::route('PUT /recipes/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::recipeService()->edit_recipe($id, $data));
});


Flight::route('DELETE /recipes/@id', function ($id) {
    Flight::recipeService()->remove_recipe($id);
    Flight::json(["message" => "recipe deleted"]);
});

?>