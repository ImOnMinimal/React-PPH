<?php
    $http_origin = $_SERVER['SERVER_NAME'];
    // echo $http_origin;
    if ($http_origin === "cyberblogdota.ru"){  
        header("Access-Control-Allow-Origin: https://cyberblogdota.ru");
    }
    else if($http_origin === "pph"){
        header("Access-Control-Allow-Origin: http://localhost:3000");
    }
// header("Access-Control-Allow-Origin: https://cyberblogdota.ru");

// header("Access-Control-Allow-Origin: http://localhost:3000");
// error_reporting(E_ALL); // (0) / (E_ALL)
// ini_set('display_errors', 'on'); // 'off' / 'on'
?>