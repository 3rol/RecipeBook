<?php
require_once __DIR__ . '/../services/RecipeTipsService.php';
// CRUD operations for recipes

Flight::route('GET /tip', function () {
    Flight::json(Flight::recipeTipsService()->get_all_tips());
});


Flight::route('GET /tip/@id', function ($id) {
    Flight::json(Flight::recipeTipsService()->get_tip_by_id($id));
});


Flight::route('POST /tip', function () {
    Flight::json(Flight::recipeTipsService()->add_tip(Flight::request()->data->getData()));
});


Flight::route('PUT /tip/@id', function ($id) {
    $data = Flight::request()->data->getData();
    Flight::json(Flight::recipeTipsService()->edit_tip($id, $data));
});


Flight::route('DELETE /tip/@id', function ($id) {
    Flight::recipeTipsService()->remove_tip($id);
    Flight::json(["message" => "recipe type deleted"]);
});

?>