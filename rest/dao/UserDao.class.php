<?php
require_once __DIR__ . '/BaseDao.class.php';

class UserDao extends BaseDao
{

    public function __construct()
    {
        parent::__construct("users");
    }
    public function get_user_by_email($email)
    {
        return $this->query_unique("SELECT * FROM users WHERE email = :email", ['email' => $email]);
    }

    public function get_user_by_name($name)
    {
        return $this->query_unique("SELECT * FROM users WHERE name = :name", ['name' => $name]);
    }

    public function get_user_by_id($id)
    {
        return $this->query_unique("SELECT * FROM users WHERE id = :id", ['id' => $id]);
    }



}

?>