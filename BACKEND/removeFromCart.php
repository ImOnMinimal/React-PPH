<?php 
    require('controlalloworigin.php');


    require('connectDB.php');

    $user_id = $_GET['user_id'];
    $product_id = $_GET['product_id'];
    
    $query = "DELETE FROM cart WHERE user_id = '$user_id' AND product_id = '$product_id'";
    mysqli_query($link, $query) or die(mysqli_error($link))


    
?>