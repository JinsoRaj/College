<!DOCTYPE html>

<html>
    <head>
        <title>Submited</title>
    </head>
    <body>
        <?php
            $servername = "localhost";
            $username   = "admin";
            $password   = "password";
            $database   = "itlab";
            $table      = "student";

            $conn = new mysqli($servername, $username, $password, $database);

            $sql = $conn->prepare("INSERT INTO $table (name, address, age, email, phone) VALUES (?, ?, ?, ?, ?)");
            $sql->bind_param("ssisi", $name, $address, $age, $email, $phone);

            $name    = $_POST["name"];
            $address = $_POST["address"];
            $age     = $_POST["age"];
            $email   = $_POST["email"];
            $phone   = $_POST["phone"];

            $sql->execute();
            
            echo "Name    : $name<br>";
            echo "Address : $address<br>";
            echo "Age     : $age<br>";
            echo "Email   : $email<br>";
            echo "Phone   : $phone<br>";

            $conn->close();
        ?>
    </body>
</html>