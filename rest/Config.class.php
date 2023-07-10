<?php
class Config
{

    public static function DB_HOST()
    {
        return Config::get_env("DB_HOST", "http://recipe-book-do-user-14358885-0.b.db.ondigitalocean.com/");
    }
    public static function DB_USERNAME()
    {
        return Config::get_env("DB_USERNAME", "doadmin");
    }
    public static function DB_PASSWORD()
    {
        return Config::get_env("DB_PASSWORD", "AVNS_cxrg9CMM6n73y65B4xw");
    }
    public static function DB_SCHEME()
    {
        return Config::get_env("DB_SCHEME", "recipe_book");
    }
    public static function DB_PORT()
    {
        return Config::get_env("DB_PORT", "25060");
    }

    public static function JWT_SECRET()
    {

        return Config::get_env("JWT_SECRET", "recipe-book");
    }


    public static function get_env($name, $default)
    {
        return isset($_ENV[$name]) && trim($_ENV[$name]) != '' ? $_ENV[$name] : $default;
    }
}
?>