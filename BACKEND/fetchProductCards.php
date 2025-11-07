<?php 
    require('controlalloworigin.php');


    require('connectDB.php');

    // $query = "SELECT id, name, company, rating, reviewsNum, price, image FROM product";
    // $result = mysqli_query($link, $query) or die(mysqli_error($link));
    // for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row);
    // echo json_encode($data);
    // Запрос к базе данных для получения данных и изображений
    $query = "SELECT * FROM product";
    $result = mysqli_query($link, $query) or die(mysqli_error($link));

    // Инициализация массива для хранения данных
    $data = [];

    while ($row = $result->fetch_assoc()) {
        // Получение данных из базы
        $product_id = $row['id'];
        $product_name = $row['name'];
        $product_company = $row['company'];
        $product_price = $row['price'];
        $product_description = $row['description'];
        $product_rating = $row['rating'];
        $product_reviewsNum = $row['reviewsNum'];

        // Получение изображения из базы данных (например, в виде BLOB)
        $product_image = $row['image'];

        // Формирование объекта с данными и изображением
        $product = [
            'id' => $product_id,
            'name' => $product_name,
            'company' => $product_company,
            'price' => $product_price,
            'description' => $product_description,
            'image' => base64_encode(file_get_contents($product_image)),
            'rating' => $product_rating,
            'reviewsNum' => $product_reviewsNum
        ];

        // Добавление объекта в массив
        $data[] = $product;
    }

    // Отправка данных в формате JSON
    header('Content-Type: application/json');
    echo json_encode($data);

    
?>