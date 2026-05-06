<?php
session_start();
require_once('../model/jobModel.php');


function loggedIn(){
    return isset($_SESSION['status']) && $_SESSION['status'] === true;
}


$action = $_REQUEST['action'] ?? '';

if($action === 'admin_signup'){
    if(isset($_POST['submit'])){
        $name = $_REQUEST['name'] ?? '';
        $email = $_REQUEST['email'] ?? '';
        $username = $_REQUEST['username'] ?? '';
        $password = $_REQUEST['password'] ?? '';

        if($name == '' || $email == '' || $username == '' || $password == ''){
            echo 'null name/email/username/password';
        }else{
            $admin = ['name'=>$name, 'email'=>$email, 'username'=>$username, 'password'=>$password];
            if(addAdmin($admin)){
                header('location: ../view/login.php');
            }else{
                echo 'admin registration failed';
            }
        }
    }else{
        header('location: ../view/signup.php');
    }
    exit;
}


if($action === 'admin_login'){
    if(isset($_POST['submit'])){
        $username = $_REQUEST['username'] ?? '';
        $password = $_REQUEST['password'] ?? '';

        if($username == '' || $password == ''){
            echo 'null username/password';
        }else{
            $admin = ['username'=>$username, 'password'=>$password];
            if(loginAdmin($admin)){
                $_SESSION['username'] = $username;
                $_SESSION['status'] = true;
                setcookie('status', true, time()+3600, '/');
                header('location: ../view/home.php');
            }else{
                echo 'invalid user!';
            }
        }
    }else{
        header('location: ../view/login.php');
    }
    exit;
}
