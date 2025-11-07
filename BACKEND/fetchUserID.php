<?php
    require('controlalloworigin.php');
?>
<?php
    require('connectDB.php');
?>
<?php
if (!empty($_GET['email'])) {
    $query = "SELECT id FROM users WHERE email='$_GET[email]'";
    $result = mysqli_query($link, $query) or die(mysqli_error($link));
    // for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row);
    echo json_encode(mysqli_fetch_assoc($result)['id']);
}
else{
    echo json_encode('nuh uh');
}
    
    
?>

