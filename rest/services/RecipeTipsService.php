<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/RecipeTipsDao.class.php';
class RecipeTipsService extends BaseService
{
    protected $dao;

    public function __construct()
    {
        $this->dao = new RecipeTipsDao();
        parent::__construct($this->dao);
    }

    public function get_all_tips()
    {
        return $this->dao->get_all_tips();
    }



    public function add_tip($entity)
    {
        return $this->dao->add_tip($entity);

    }

    public function remove_tip($id)
    {
        return $this->dao->remove_tip($id);
    }

    public function edit_tip($id, $entity)
    {
        return $this->dao->edit_tip($id, $entity);
    }

    public function get_tip_by_id($id)
    {
        return $this->dao->get_tip_by_id($id);
    }




}