<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/RecipeTypeDao.class.php';
class RecipeTypeService extends BaseService
{
    protected $dao;

    public function __construct()
    {
        $this->dao = new RecipeTypeDao();
        parent::__construct($this->dao);
    }

    public function get_all_recipe_types()
    {
        return $this->dao->get_all_recipe_types();
    }



    public function add_recipe_type($entity)
    {
        return $this->dao->add_recipe_type($entity);

    }

    public function remove_recipe_type($id)
    {
        return $this->dao->remove_recipe_type($id);
    }

    public function edit_recipe_type($id, $entity)
    {
        return $this->dao->edit_recipe_type($id, $entity);
    }

    public function get_recipe_type_by_id($id)
    {
        return $this->dao->get_recipe_type_by_id($id);
    }




}