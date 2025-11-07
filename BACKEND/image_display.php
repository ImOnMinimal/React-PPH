<?php
require('controlalloworigin.php');
// Подключение к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "PPH";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Получение пути к последнему загруженному изображению из базы данных
$user_id = $_GET['user_id'];
$sql = "SELECT avatar FROM users WHERE id = '$user_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $image_path = $row["avatar"];
    // $image_type = $row["image_type"];

    // Отправка изображения браузеру с правильным типом контента
    header("Content-type: image/");
    readfile($image_path);
} else {
    echo "Изображение не найдено.";
}

$conn->close();