<?php
session_start();
require_once('../model/jobModel.php');


function loggedIn(){
    return isset($_SESSION['status']) && $_SESSION['status'] === true;
}


