<?php 
    require('controlalloworigin.php');


    require('connectDB.php');

    // urlPhp + 'addReview.php?review=' + review + '&rating=' + rating + '&post_id=' + Number(id.id) + '&user_id=' + localStorage.getItem('user_id') + '&login=' + localStorage.getItem('login')
    if (!empty($_GET['review']) && !empty($_GET['rating']) && !empty($_GET['user_id']) && !empty($_GET['product_id'])) {
        function valid($string){
            $string = trim($string);
            $string = htmlspecialchars($string);
            $string = urldecode($string);
            $string = strip_tags($string);
            return $string;
        }
        $rating = valid($_GET['rating']);
        $review = valid($_GET['review']);
        $user_id = valid($_GET['user_id']);
        $product_id = valid($_GET['product_id']);
        
        $query = "INSERT INTO reviews SET content='$review', rating='$rating', user_id='$user_id', product_id='$product_id'";
        mysqli_query($link, $query) or die(mysqli_error($link));

        // посчитать и вставить среднее арифметическое оценки всех отзывов по одному продукту и округлить до десятых
        $query = "SELECT AVG(rating) AS avg_rating FROM reviews WHERE product_id='$product_id'";
        $result = mysqli_query($link, $query) or die(mysqli_error($link));
        $row = mysqli_fetch_assoc($result);
        $avg_rating = round($row['avg_rating'], 1);
        $query = "UPDATE product SET rating='$avg_rating' WHERE id='$product_id'";
        mysqli_query($link, $query) or die(mysqli_error($link));

        // посчитать и вставить количество отзывов по одному продукту
        $query = "SELECT COUNT(rating) AS count FROM reviews WHERE product_id='$product_id'";
        $result = mysqli_query($link, $query) or die(mysqli_error($link));
        $row = mysqli_fetch_assoc($result);
        $count = $row['count'];
        $query = "UPDATE product SET reviewsNum='$count' WHERE id='$product_id'";
        mysqli_query($link, $query) or die(mysqli_error($link));
    }

    
?>