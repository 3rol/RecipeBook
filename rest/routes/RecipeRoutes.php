<?php
require_once __DIR__ . '/../services/RecipeService.php';

use OpenApi\Annotations as OA;


Flight::route('GET /recipes', function () {
    /**
     * @OA\Get(
     * path="/recipes",
     * tags={"recipe"},
     * security={{"ApiKeyAuth": {}}},
     * @OA\Response(response="200", description="Get all recipes")
     * )
     */
    Flight::json(Flight::recipeService()->get_all_recipes());
});

Flight::route('GET /recipes/@id', function ($id) {
    /**
     * @OA\Get(
     * path="/recipes/{id}",
     * tags={"recipe"},
     * security={{"ApiKeyAuth": {}}},
     * @OA\Parameter(name="id", in="path", required=true, description="Recipe ID", @OA\Schema(type="integer")),
     * @OA\Response(response="200", description="Get recipe by ID")
     * )
     */
    Flight::json(Flight::recipeService()->get_recipe_by_id($id));
});

Flight::route('POST /recipes', function () {
    /**
     * @OA\Post(
     * path="/recipes",
     * tags={"recipe"},
     * security={{"ApiKeyAuth": {}}},
     * @OA\RequestBody(
     * @OA\JsonContent(ref="#/components/schemas/RecipeInput")
     * ),
     * @OA\Response(response="200", description="Add a new recipe")
     * )
     */
    Flight::json(Flight::recipeService()->add_recipe(Flight::request()->data->getData()));
});

Flight::route('PUT /recipes/@id', function ($id) {
    /**
     * @OA\Put(
     * path="/recipes/{id}",
     * tags={"recipe"},
     * security={{"ApiKeyAuth": {}}},
     * @OA\Parameter(name="id", in="path", required=true, description="Recipe ID", @OA\Schema(type="integer")),
     * @OA\RequestBody(
     * @OA\JsonContent(ref="#/components/schemas/RecipeInput")
     * ),
     * @OA\Response(response="200", description="Update recipe by ID")
     * )
     */
    $data = Flight::request()->data->getData();
    Flight::json(Flight::recipeService()->edit_recipe($id, $data));
});

Flight::route('DELETE /recipes/@id', function ($id) {
    /**
     * @OA\Delete(
     * path="/recipes/{id}",
     * tags={"recipe"},
     * security={{"ApiKeyAuth": {}}},
     * @OA\Parameter(name="id", in="path", required=true, description="Recipe ID", @OA\Schema(type="integer")),
     * @OA\Response(response="200", description="Delete recipe by ID")
     * )
     */
    Flight::recipeService()->remove_recipe($id);
    Flight::json(["message" => "Recipe deleted"]);
});
?>