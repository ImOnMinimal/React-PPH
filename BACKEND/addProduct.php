<?php
    require('controlalloworigin.php');


    if (!empty($_GET['name']) && !empty($_GET['company']) && !empty($_GET['price']) && !empty($_GET['description']) && !empty($_GET['slug']) && !empty($_GET['user_id'])) {
        function valid($string){
            $string = trim($string);
            $string = htmlspecialchars($string);
            $string = urldecode($string);
            $string = strip_tags($string);
            return $string;
        }
        $name = valid($_GET['name']);
        $company = valid($_GET['company']);
        $price = valid($_GET['price']);
        $description = valid($_GET['description']);
        $slug = valid($_GET['slug']);
        $user_id = $_GET['user_id'];

        $unique_id = uniqid();
        $target_dir = "images/";
        // $target_file = $target_dir . basename($_FILES["image"]["name"]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION));
        $target_file = $target_dir . $unique_id . '.' . $imageFileType;
    
        // Проверка файла на допустимый тип
        if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
            echo "Допустимы только файлы JPG, JPEG и PNG.";
            $uploadOk = 0;
        }
    
        // Загрузка файла, если все в порядке
        if ($uploadOk == 1) {
            if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "PPH";
    
                // Подключение к базе данных
                $conn = new mysqli($servername, $username, $password, $dbname);
    
                // Проверка подключения
                if ($conn->connect_error) {
                    die("Ошибка подключения: " . $conn->connect_error);
                }
    
                // Сохранение пути к изображению в базе данных
                $sql = "INSERT INTO product SET name='$name', company='$company', price='$price', slug='$slug', description='$description', user_id='$user_id', image='$target_file'"; 
                if ($conn->query($sql) === TRUE) {
                    echo "Изображение успешно загружено и сохранено в базе данных.";
                } else {
                    echo "Ошибка при сохранении изображения в базе данных: " . $conn->error;
                }
    
                $conn->close();
            } else {
                echo "Ошибка при загрузке изображения.";
            }
        }
        




        
        echo json_encode('success');
        
    }
    else if(empty($isUserExist)){
        echo json_encode('Вы не вошли в аккаунт!');
    }
    else{
        echo json_encode('Заполните все поля!');
    }
    
?>

