<?php 
    require('controlalloworigin.php');


    require('connectDB.php');

    if (!empty($_GET['search'])) {
        // Запрос к базе данных для получения данных и изображений
        $search = $_GET['search'];
        $query = "SELECT * FROM product WHERE name LIKE '%$search%' OR description LIKE '%$search%' OR company LIKE '%$search%';";
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

            // Получение изображения из базы данных (например, в виде BLOB)
            $product_image = $row['image'];

            // Формирование объекта с данными и изображением
            $product = [
                'id' => $product_id,
                'name' => $product_name,
                'company' => $product_company,
                'price' => $product_price,
                'description' => $product_description,
                'image' => base64_encode(file_get_contents($product_image))
            ];

            // Добавление объекта в массив
            $data[] = $product;
        }

        // Отправка данных в формате JSON
        header('Content-Type: application/json');
        echo json_encode($data);
    }
    else{
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

            // Получение изображения из базы данных (например, в виде BLOB)
            $product_image = $row['image'];

            // Формирование объекта с данными и изображением
            $product = [
                'id' => $product_id,
                'name' => $product_name,
                'company' => $product_company,
                'price' => $product_price,
                'description' => $product_description,
                'image' => base64_encode(file_get_contents($product_image))
            ];

            // Добавление объекта в массив
            $data[] = $product;
        }

        // Отправка данных в формате JSON
        header('Content-Type: application/json');
        echo json_encode($data);

        
    }
?>