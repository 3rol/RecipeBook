<?php
require_once __DIR__ . '/BaseDao.class.php';

class UserDao extends BaseDao
{

    public function get_user_by_email($email)
    {
        return $this->query_unique("SELECT * FROM users WHERE email = :email", ['email' => $email]);
    }

}

?>