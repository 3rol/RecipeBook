<?php
require_once __DIR__ . '/../services/RecipeTypeService.php';

use OpenApi\Annotations as OA;


Flight::route('GET /recipetype', function () {
    /**
     * @OA\Get(
     *     path="/recipetype",
     *     tags={"recipetype"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\Response(response="200", description="Get all recipe types")
     * )
     */
    Flight::json(Flight::recipeTypeService()->get_all_recipe_types());
});

Flight::route('GET /recipetype/@id', function ($id) {
    /**
     * @OA\Get(
     *     path="/recipetype/{id}",
     *     tags={"recipetype"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\Parameter(name="id", in="path", required=true, description="Recipe Type ID", @OA\Schema(type="integer")),
     *     @OA\Response(response="200", description="Get recipe type by ID")
     * )
     */
    Flight::json(Flight::recipeTypeService()->get_recipe_type_by_id($id));
});

Flight::route('GET /recipetype/type/@type', function ($type) {
    /**
     * @OA\Get(
     *     path="/recipetype/type/{type}",
     *     tags={"recipetype"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\Parameter(name="type", in="path", required=true, description="Recipe Type", @OA\Schema(type="string")),
     *     @OA\Response(response="200", description="Get recipe type by name")
     * )
     */
    Flight::json(Flight::recipeTypeService()->get_type_by_name($type));
});

Flight::route('POST /recipetype', function () {
    /**
     * @OA\Post(
     *     path="/recipetype",
     *     tags={"recipetype"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\RequestBody(
     *         @OA\JsonContent(ref="#/components/schemas/RecipeTypeInput")
     *     ),
     *     @OA\Response(response="200", description="Add a new recipe type")
     * )
     */
    Flight::json(Flight::recipeTypeService()->add_recipe_type(Flight::request()->data->getData()));
});

Flight::route('PUT /recipetype/@id', function ($id) {
    /**
     * @OA\Put(
     *     path="/recipetype/{id}",
     *     tags={"recipetype"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\Parameter(name="id", in="path", required=true, description="Recipe Type ID", @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         @OA\JsonContent(ref="#/components/schemas/RecipeTypeInput")
     *     ),
     *     @OA\Response(response="200", description="Update recipe type by ID")
     * )
     */
    $data = Flight::request()->data->getData();
    Flight::json(Flight::recipeTypeService()->edit_recipe_type($id, $data));
});

Flight::route('DELETE /recipetype/@id', function ($id) {
    /**
     * @OA\Delete(
     *     path="/recipetype/{id}",
     *     tags={"recipetype"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\Parameter(name="id", in="path", required=true, description="Recipe Type ID", @OA\Schema(type="integer")),
     *     @OA\Response(response="200", description="Delete recipe type by ID")
     * )
     */
    Flight::recipeTypeService()->remove_recipe_type($id);
    Flight::json(["message" => "Recipe type deleted"]);
});

?>