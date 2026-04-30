<?php

    //include('db.php');
    //include_once('dba.php');
    //require('db.php');
    require_once('db.php');

    function login($user){
        $con = getConnection();
        $sql = "select * from users where username='{$user['username']}' and password='{$user['password']}'";
        $result = mysqli_query($con, $sql);

        if(mysqli_num_rows($result) == 1){
            return true;
        }else{
            return false;
        }
    }

    function addUser($user){
        $con = getConnection();
        $sql = "insert into users values (null, '{$user['username']}', '{$user['password']}', '{$user['email']}')";
        if(mysqli_query($con, $sql)){
            return true;
        }else{
            return false;
        }
    }

    function getAllUser(){
        $con = getConnection();
        $sql = "select * from users";
        $result = mysqli_query($con, $sql);

        $users = [];
        
        while($row = mysqli_fetch_assoc($result)){
            $users[] = $row;
        }
        return $users;
    }

    function getUserById($id){
        $con = getConnection();
        $sql = "select * from users where id={$id}";
        $result = mysqli_query($con, $sql);
        $user = mysqli_fetch_assoc($result);
        return $user;
    }

    function deleteUser($id){

    }

    function updateUser($user){

    }
?>