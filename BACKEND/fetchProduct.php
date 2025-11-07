<?php
    require('controlalloworigin.php');
?>
<?php
    require('connectDB.php');
?>
<?php
if (!empty($_GET['slug']) && !empty($_GET['id'])) {
    $query = "SELECT name, company, rating, reviewsNum, price, image, description FROM product WHERE id='$_GET[id]' AND slug='$_GET[slug]'";
    $result = mysqli_query($link, $query) or die(mysqli_error($link));
    // Инициализация массива для хранения данных
    $data = [];

    while ($row = $result->fetch_assoc()) {
        // Получение данных из базы
        $product_name = $row['name'];
        $product_company = $row['company'];
        $product_price = $row['price'];
        $product_rating = $row['rating'];
        $product_reviewsNum = $row['reviewsNum'];
        $product_description = $row['description'];

        // Получение изображения из базы данных (например, в виде BLOB)
        $product_image = $row['image'];

        // Формирование объекта с данными и изображением
        $product = [
            'name' => $product_name,
            'company' => $product_company,
            'price' => $product_price,
            'rating' => $product_rating,
            'reviewsNum' => $product_reviewsNum,
            'description' => $product_description,
            'image' => base64_encode(file_get_contents($product_image)),
            'rating' => $product_rating,
            'reviewsNum' => $product_reviewsNum
        ];

        // Добавление объекта в массив
        $data[] = $product;
    }
    header('Content-Type: application/json');
    echo json_encode($data);
}
else{
    echo json_encode('nuh uh');
}
    
    
?>

