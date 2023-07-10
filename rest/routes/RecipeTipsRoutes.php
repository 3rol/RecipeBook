<?php
require_once __DIR__ . '/../services/RecipeTipsService.php';

use OpenApi\Annotations as OA;

Flight::route('GET /tip', function () {
    /**
     * @OA\Get(
     *     path="/tip",
     *     tags={"tip"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\Response(response="200", description="Get all tips")
     * )
     */
    Flight::json(Flight::recipeTipsService()->get_all_tips());
});

Flight::route('GET /tip/@id', function ($id) {
    /**
     * @OA\Get(
     *     path="/tip/{id}",
     *     tags={"tip"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\Parameter(name="id", in="path", required=true, description="Tip ID", @OA\Schema(type="integer")),
     *     @OA\Response(response="200", description="Get tip by ID")
     * )
     */
    Flight::json(Flight::recipeTipsService()->get_tip_by_id($id));
});

Flight::route('POST /tip', function () {
    /**
     * @OA\Post(
     *     path="/tip",
     *     tags={"tip"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\RequestBody(
     *         @OA\JsonContent(ref="#/components/schemas/TipInput")
     *     ),
     *     @OA\Response(response="200", description="Add a new tip")
     * )
     */
    Flight::json(Flight::recipeTipsService()->add_tip(Flight::request()->data->getData()));
});

Flight::route('PUT /tip/@id', function ($id) {
    /**
     * @OA\Put(
     *     path="/tip/{id}",
     *     tags={"tip"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\Parameter(name="id", in="path", required=true, description="Tip ID", @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         @OA\JsonContent(ref="#/components/schemas/TipInput")
     *     ),
     *     @OA\Response(response="200", description="Update tip by ID")
     * )
     */
    $data = Flight::request()->data->getData();
    Flight::json(Flight::recipeTipsService()->edit_tip($id, $data));
});

Flight::route('DELETE /tip/@id', function ($id) {
    /**
     * @OA\Delete(
     *     path="/tip/{id}",
     *     tags={"tip"},
     *     security={{"ApiKeyAuth": {}}},
     *     @OA\Parameter(name="id", in="path", required=true, description="Tip ID", @OA\Schema(type="integer")),
     *     @OA\Response(response="200", description="Delete tip by ID")
     * )
     */
    Flight::recipeTipsService()->remove_tip($id);
    Flight::json(["message" => "Tip deleted"]);
});

?>