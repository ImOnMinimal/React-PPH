<?php
    require('controlalloworigin.php');


    // require('connectDB.php');

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['user_id']) && !empty($_FILES["image"]["name"])) {
        $target_dir = "images/";
        // $target_file = $target_dir . basename($_FILES["image"]["name"]);
        $user_id = $_POST['user_id'];
        echo $user_id;
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION));
        $target_file = $target_dir . $_POST['user_id'] . '.' . $imageFileType;
    
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
                $sql = "UPDATE users SET avatar='$target_file' WHERE id='$user_id'";
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
        
    }
    else{
        echo "nuh uh";
    }
    // $title = $_POST['image_title'];                  // image title
    // $image  = $_FILES['image_upload'];              // get image from post data 
    // $image_name=$image['name'];                   // image name
    // $image_tmp_name=$image['tmp_name'];          // temp file path
    // $destination="images/".$image_name;       // Folder path Where Image saved
    // move_uploaded_file($image_tmp_name , $destination);   // this function are used to store the file in destination path 
    // $query="INSERT INTO `images`( `title` , `image`) VALUES ( '{$title}' , '{$image_name}') ";
    // $result=mysqli_query($conn , $query);
?>