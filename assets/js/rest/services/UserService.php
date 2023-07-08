<?php
require_once __DIR__ . '/BaseService.php';
require_once __DIR__ . '/../dao/UserDao.class.php';
class UserService extends BaseService
{
    protected $dao;
    public function __construct()
    {
        $this->dao = new UserDao();
        parent::__construct($this->dao);
    }
    public function login($name, $password)
    {
        return $this->dao->login($name, $password);
    }
}