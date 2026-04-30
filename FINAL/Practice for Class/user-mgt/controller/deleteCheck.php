<?php
    require_once('../model/userModel.php');

    $id = $_GET['id'];

    $status = deleteUser($id);

    if($status){
        header('location: ../view/user_list.php');
    }else{
        echo "delete failed!";
    }
?>