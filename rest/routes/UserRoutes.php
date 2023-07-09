<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

Flight::route('POST /register', function () {
    $registerUser = Flight::request()->data->getData();
    $storedUser = Flight::userDao()->get_user_by_email_($registerUser['email']);

    if (isset($storedUser['email'])) {
        Flight::json(["message" => "User with that email already exists. Try different email."], 404);
    } else {
        Flight::json(Flight::userDao()->add(Flight::request()->data->getData()));
    }
});


Flight::route('POST /login', function () {
    $login = Flight::request()->data->getData();
    $user = Flight::userDao()->get_user_by_email($login['email']);

    if (isset($user['id'])) {
        if ($user['password'] == $login['password']) {
            unset($user['password']);
            $jwt = JWT::encode($user, Config::JWT_SECRET(), 'HS256');
            Flight::json(['token' => $jwt]);
        } else {
            Flight::json(["message" => "Wrong password"], 404);
        }
    } else {
        Flight::json(["message" => "User doesn't exist"], 404);
    }
});

?>