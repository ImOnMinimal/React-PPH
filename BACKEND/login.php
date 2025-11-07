<?php
    require('controlalloworigin.php');
    require('connectDB.php');
?>
<?php
    session_start();
    if (!empty($_GET['password']) and !empty($_GET['email'])) {
        function valid($string){
            $string = trim($string);
            $string = htmlspecialchars($string);
            $string = urldecode($string);
            $string = strip_tags($string);
            return $string;
        }
        $email = valid($_GET['email']);
        $password = valid($_GET['password']);

        $query = "SELECT * FROM users WHERE email='$email'";
        $res = mysqli_query($link, $query);
        $user = mysqli_fetch_assoc($res);

        if (!empty($user)) {
            $hash = $user['password']; 
            if (password_verify($password, $hash)) {
                echo json_encode('logged');
            } else {
                echo json_encode('Неверный пароль!');
            }
        }
        else {
            echo json_encode('Пользователя с такой почтой не существует!');
        }
    }
    else {
        echo json_encode('Заполните все поля!');
    }
?>
