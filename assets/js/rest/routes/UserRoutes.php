<?php

require_once __DIR__ . '/../services/UserService.php';

Flight::route('POST /login', function () {
    $login = Flight::request()->data->getData();

    try {
        $userDao = new UserDao();
        $result = $userDao->login($login['email'], $login['password']);
        Flight::json($result);
    } catch (Exception $e) {
        Flight::json(["message" => $e->getMessage()], 404);
    }
});

?>