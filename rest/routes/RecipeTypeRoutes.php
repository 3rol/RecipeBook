<?php
require_once __DIR__ . '/../services/RecipeTypeService.php';
// CRUD operations for recipes

Flight::route('GET /recipetype', function () {
    Flight::json(Flight::recipeTypeService()->get_all_recipe_types());
});


Flight::route('GET /recipetype/@id', function ($id) {
    Flight::json(Flight::recipeTypeService()->get_recipe_type_by_id($id));
});

Flight::route('GET /recipetype/type/@type', function ($type) {
    Flight::json(Flight::recipeTypeService()->get_type_by_name($type));
});


Flight::route('POST /recipetype', function () {
    Flight::json(Flight::recipeTypeService()->add_recipe_type(Flight::request()->data->getData()));
});


Flight::route('PUT /recipetype/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::recipeTypeService()->edit_recipe_type($id, $data));
});


Flight::route('DELETE /recipetype/@id', function ($id) {
    Flight::recipeTypeService()->remove_recipe_type($id);
    Flight::json(["message" => "recipe type deleted"]);
});

?>