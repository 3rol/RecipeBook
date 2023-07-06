<?php

require_once __DIR__ . '/BaseDao.class.php';

class RecipeTipsDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("tips");
    }

    public function get_all_tips()
    {
        return parent::get_all();
    }

    public function add_tip($entity)
    {
        return parent::add($entity);
    }
    public function remove_tip($id)
    {
        return parent::delete($id);
    }

    public function edit_tip($id, $entity)
    {
        return parent::update($id, $entity);
    }

    public function get_tip_by_id($id)
    {
        return parent::get_by_id($id);
    }


}
?>