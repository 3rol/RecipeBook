<?php
require_once __DIR__ . '/BaseDao.class.php';

class RecipeTypeDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("recipe_types");
    }

    public function get_all_recipe_types()
    {
        return parent::get_all();
    }

    public function add_recipe_type($entity)
    {
        return parent::add($entity);
    }
    public function remove_recipe_type($id)
    {
        return parent::delete($id);
    }

    public function edit_recipe_type($id, $entity)
    {
        return parent::update($id, $entity);
    }

    public function get_recipe_type_by_id($id)
    {
        return parent::get_by_id($id);
    }

    public function get_type_by_name($type)
    {

        return parent::query_without_params("SELECT * FROM recipe_types WHERE type LIKE '%" . $type . "%'");
    }
}
?>