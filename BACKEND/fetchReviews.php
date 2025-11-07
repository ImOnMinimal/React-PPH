<?php
require('controlalloworigin.php');
require('connectDB.php');

$product_id = $_GET['product_id'];

$query = "
    SELECT
        reviews.id,
        reviews.content,
        reviews.rating,
        reviews.user_id,
        reviews.created_at,
        users.avatar,
        users.login
    FROM reviews
    JOIN users ON reviews.user_id = users.id
    WHERE reviews.product_id = '$product_id' ORDER BY reviews.created_at DESC
";

$result = mysqli_query($link, $query) or die(mysqli_error($link));

$data = [];

while ($row = $result->fetch_assoc()) {
    $review = [
        'id' => $row['id'],
        'content' => $row['content'],
        'rating' => $row['rating'],
        'user_id' => $row['user_id'],
        'user_avatar' => base64_encode(file_get_contents($row['avatar'])),
        'user_login' => $row['login'],
        'created_at' => $row['created_at']
    ];
    $data[] = $review;
}

header('Content-Type: application/json');
echo json_encode($data);
?>