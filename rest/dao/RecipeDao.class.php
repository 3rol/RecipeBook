<?php
require_once __DIR__ . "/BaseDao.class.php";
class RecipeDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct("recipes");
    }

    public function get_all_recipes()
    {
        return parent::get_all();
    }

    public function add_recipe($entity)
    {
        return parent::add($entity);
    }

    public function remove_recipe($id)
    {
        return parent::delete($id);
    }

    public function edit_recipe($id, $entity)
    {
        return parent::update($id, $entity);
    }

    public function get_recipe_by_id($id)
    {
        return parent::get_by_id($id);
    }





}