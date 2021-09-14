<!DOCTYPE html>

<html>
    <head>
        <title>Update Employee</title>
    </head>
    <body>
        <?php

            $servername = "localhost";
            $username   = "admin";
            $password   = "password";
            $database   = "itlab";
            $table      = "employee";

            $conn = new mysqli($servername, $username, $password, $database);

            $id = $_GET["id"];

            $sql = "SELECT * FROM $table WHERE id=$id";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $name       = $row["name"];
                $department = $row["department"];
                $email      = $row["email"];
                $phone      = $row["phone"];
                $address    = $row["address"];
            }else{
                echo "<h1>Not Found</h1>";
                die();
            }

            $conn->close();
        ?>
        <form method="POST" action="qn5/update.php">
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" value="<?php echo $name ?>" required><br>

            <label for="department">Department:</label>
            <input type="text" id="department" name="department" value="<?php echo $department ?>"><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="<?php echo $email ?>"><br>

            <label for="phone">Phone:</label>
            <input type="number" id="phone" name="phone" value="<?php echo $phone ?>"><br>

            <label for="address">Address: </label>
            <textarea id="address" name="address" required><?php echo $address ?></textarea><br>

            <input type="hidden" name="id" id="hiddenid" value="<?php echo $id ?>" />
    
            <input type="reset" value="Reset">
            <input type="submit" value="Submit">
        </form>
        <br>
        <a href="qn5/index.html">Home</a>
    </body>
</html>