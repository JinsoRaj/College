<!DOCTYPE html>

<html>
    <head>
        <title>Add Employee</title>
    </head>
    <body>
        <?php

            $servername = "localhost";
            $username   = "admin";
            $password   = "password";
            $database   = "itlab";
            $table      = "employee";

            $conn = new mysqli($servername, $username, $password, $database);

            $sql = $conn->prepare("INSERT INTO $table (name, department, email, phone, address) VALUES (?, ?, ?, ?, ?)");
            $sql->bind_param("sssis", $name, $department, $email, $phone, $address);

            $name       = $_POST["name"];
            $department = $_POST["department"];
            $email      = $_POST["email"];
            $phone      = $_POST["phone"];
            $address    = $_POST["address"];

            $sql->execute();
            
            echo "Added Successfully";

            $conn->close();
        ?>
        <br>
        <a href="index.html">Home</a>
    </body>
</html>