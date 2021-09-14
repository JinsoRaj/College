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

            $id         = $_POST["id"];
            $name       = $_POST["name"];
            $department = $_POST["department"];
            $email      = $_POST["email"];
            $phone      = $_POST["phone"];
            $address    = $_POST["address"];
            
            $sql = "UPDATE $table SET name='$name', department='$department', email='$email', phone='$phone', address='$address' WHERE id=$id";

            if ($conn->query($sql) === TRUE) {
              echo "Update Success";
            } else {
              echo "Error updating: " . $conn->error;
            }

            $conn->close();
        ?>
        <br>
        <a href="qn5/index.html">Home</a>
    </body>
</html>