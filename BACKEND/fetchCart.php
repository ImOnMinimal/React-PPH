<?php
require('controlalloworigin.php');
require('connectDB.php');

$user_id = $_GET['user_id'];

// Получение данных о продуктах в корзине пользователя с количеством
$query = "
SELECT p.*, c.quantity
FROM product p
JOIN cart c ON p.id = c.product_id
WHERE c.user_id = '$user_id'
";
$result = mysqli_query($link, $query) or die(mysqli_error($link));

// Инициализация массива для хранения данных
$data = [];

while ($row = $result->fetch_assoc()) {
    // Получение данных из базы
    $product_id = $row['id'];
    $product_name = $row['name'];
    $product_company = $row['company'];
    $product_price = $row['price'];
    $product_rating = $row['rating'];
    $product_reviewsNum = $row['reviewsNum'];
    $product_description = $row['description'];
    $product_image = $row['image'];
    $product_quantity = $row['quantity'];

    // Формирование объекта с данными, изображением и количеством
    $product = [
        'id' => $product_id,
        'name' => $product_name,
        'company' => $product_company,
        'price' => $product_price,
        'rating' => $product_rating,
        'reviewsNum' => $product_reviewsNum,
        'description' => $product_description,
        'image' => base64_encode(file_get_contents($product_image)),
        'quantity' => $product_quantity
    ];

    // Добавление объекта в массив
    $data[] = $product;
}

header('Content-Type: application/json');
echo json_encode($data);
?>
