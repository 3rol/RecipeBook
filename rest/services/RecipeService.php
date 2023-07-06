<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/RecipeDao.class.php';
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
        return parent::getAll();
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
        return parent::getById($id);
    }




}