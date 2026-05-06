<?php
session_start();
require_once('../model/jobModel.php');
if(!isset($_COOKIE['status'])){
    header('location: login.php');
}
$employers = getAllEmployers();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Employer Dashboard</title>
</head>
<body>
    <h1>Welcome Home <?php echo $_SESSION['username']; ?></h1>
    <a href="../controller/action.php?action=logout">Logout</a>
    <br><br>

    <form method="post" action="../controller/action.php?action=create_employer" enctype="">
        <fieldset>
            <legend>Register New Employer</legend>
            Employer Name: <input type="text" name="employer_name" value="" /> <br>
            Company Name: <input type="text" name="company_name" value="" /> <br>
            Contact No: <input type="text" name="contact_no" value="" /> <br>
            Username: <input type="text" name="username" value="" /> <br>
            Password: <input type="password" name="password" value="" /> <br>
            <input type="submit" name="submit" value="Register" />
        </fieldset>
    </form>

    <br>
    Search Employer: <input type="text" id="search_key" onkeyup="searchEmployers()" />
    <br><br>