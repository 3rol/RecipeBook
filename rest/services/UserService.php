<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/UserDao.class.php';

class UserService extends BaseService
{

    public function __construct()
    {
        $this->dao = new UserDao();
        parent::__construct($this->dao);
    }

    public function get_user_by_id($id)
    {
        return $this->dao->get_user_by_id($id);
    }


}


?>