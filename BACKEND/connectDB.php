<?php
    $http_origin = $_SERVER['SERVER_NAME'];
    if ($http_origin == "cyberblogdota.ru"){ // БД на хостинге
        $host = 'localhost';
        $user = 'логин';
        $pass = 'пароль';
        $db = 'u2520888_default';
        $link = mysqli_connect($host, $user, $pass, $db); //, $db
        mysqli_query($link, "SET NAMES 'utf8'");
    }
    else if($http_origin == "pph"){                                   // БД на разработке
        $host = 'localhost';
        $user = 'root';
        $pass = '';
        $db = 'PPH';
        $link = mysqli_connect($host, $user, $pass, $db); //, $db           
        mysqli_query($link, "SET NAMES 'utf8'");
    }
?>