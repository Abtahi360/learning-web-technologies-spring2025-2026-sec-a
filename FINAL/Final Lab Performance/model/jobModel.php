<?php
require_once('db.php');

function clean($value){
    $con = getConnection();
    return mysqli_real_escape_string($con, trim($value));
}

function loginAdmin($admin){
    $con = getConnection();
    $username = clean($admin['username']);
    $password = clean($admin['password']);
    $sql = "SELECT * FROM admins WHERE username='{$username}' AND password='{$password}'";
    $result = mysqli_query($con, $sql);
    return ($result && mysqli_num_rows($result) == 1);
}

?>