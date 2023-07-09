<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/RecipeDao.class.php';
require_once __DIR__ . '/RecipeTypeService.php';
class RecipeService extends BaseService
{
    protected $dao;

    public function __construct()
    {
        $this->dao = new RecipeDao();
        parent::__construct($this->dao);
    }

    public function get_all_recipes()
    {
        return $this->dao->get_all_recipes();
    }



    public function add_recipe($entity)
    {
        $data = Flight::recipeTypeService()->get_type_by_name($entity['type']);
        unset($entity['type']);
        $entity['type_id'] = $data[0]['id'];
        return $this->dao->add_recipe($entity);

    }

    public function remove_recipe($id)
    {
        return $this->dao->remove_recipe($id);
    }

    public function edit_recipe($id, $entity)
    {
        return $this->dao->edit_recipe($id, $entity);
    }

    public function get_recipe_by_id($id)
    {
        return $this->dao->get_recipe_by_id($id);
    }




}