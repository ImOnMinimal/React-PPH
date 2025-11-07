<?php 
    require('controlalloworigin.php');


    require('connectDB.php');

    $user_id = $_GET['user_id'];
    $product_id = $_GET['product_id'];
    
    $query = "INSERT INTO favourite (user_id, product_id) VALUES ('$user_id', '$product_id')";
    mysqli_query($link, $query) or die(mysqli_error($link))


    
?>