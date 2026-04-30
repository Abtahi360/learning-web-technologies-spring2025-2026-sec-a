<?php
    require_once('../model/userModel.php');

    if(isset($_POST['submit'])){

        $id = $_REQUEST['id'];
        $username = $_REQUEST['username'];
        $email = $_REQUEST['email'];

        if($id == "" || $username == "" || $email == ""){
            echo "null value!";
        }else{

            $user = [
                'id'=> $id,
                'username'=> $username,
                'email'=> $email
            ];

            $status = updateUser($user);

            if($status){
                header('location: ../view/user_list.php');
            }else{
                echo "update failed!";
            }
        }

    }else{
        header('location: ../view/user_list.php');
    }
?>