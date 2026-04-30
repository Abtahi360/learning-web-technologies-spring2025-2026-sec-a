<?php
    session_start();
    require_once('../model/userModel.php');

    $id = $_GET['id'];
    $user = getUserById($id);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Edit User</title>
</head>
<body>

        <h1>List of User </h1>
        <a href="user_list.php">Back</a> |
        <a href="../controller/logout.php">Logout</a> 
        <br>
        
        <form method="post" action="../controller/updateCheck.php" enctype="">
            <fieldset>
                <legend>Edit User</legend>
            ID: <input type="text" name="id" readonly value="<?=$user['id']?>"/> <br>
            Username: <input type="text" name="username" value="<?=$user['username']?>"/> <br>
            Email: <input type="email" name="email" value="<?=$user['email']?>"/> <br>
                    <input type="submit" name="submit" value="Update"/>
            </fieldset>
        </form>
        <a href="login.php">login</a>
</body>
</html>