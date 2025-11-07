<?php
    require('controlalloworigin.php');
?>
<?php
    require('connectDB.php');
?>
<?php
$access = true;
$msg = '';
if (!empty($_GET['login']) && !empty($_GET['email']) && !empty($_GET['password']) && !empty($_GET['confirm']) && !empty($_GET['address'])) {
    function valid($string){
        $string = trim($string);
        $string = htmlspecialchars($string);
        $string = urldecode($string);
        $string = strip_tags($string);
        return $string;
    }
    $login = valid($_GET['login']);
    $password = valid($_GET['password']);
    $email = valid($_GET['email']);
    $address = valid($_GET['address']);
    // $firstname = valid($_POST['firstname']);
    // $middlename = valid($_POST['middlename']);
    // $lastname = valid($_POST['lastname']);
    // $dateofbirth = $_POST['dateofbirth'];

    if ($_GET['password'] !== $_GET['confirm']) {
        $access = false;
        $msg .= 'Пароли не совпадают!';
    }

    $query = "SELECT * FROM users WHERE login='$login'";
    $user = mysqli_fetch_assoc(mysqli_query($link, $query));
    $query = "SELECT * FROM users WHERE email='$email'";
    $checkEmail = mysqli_fetch_assoc(mysqli_query($link, $query));
    if (!empty($user) && $access == true) {
        $access = false;
        $msg .= 'Логин уже занят!';  
    }
    if (!empty($checkEmail) && $access == true) {
        $access = false;
        $msg .= 'Почта уже используется!';  
    }
    if ($access == true) {
        $password = password_hash($_GET['password'], PASSWORD_DEFAULT);
        $query = "INSERT INTO users SET login='$login', password='$password', email='$email', address='$address'";
        mysqli_query($link, $query);

        // $id = mysqli_insert_id($link);
        // session_start();
        // $_SESSION['id'] = $id;
        // $_SESSION['auth'] = true;
        // $_SESSION['userLogin'] = $login;
        echo json_encode('logged');
        
        // header('Location: index.php');
        // die();

    }
    else {
        echo json_encode($msg);
    }
}
else{
    echo json_encode('Заполните все поля!');
}
    
    
?>

