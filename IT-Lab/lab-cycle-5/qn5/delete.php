<!DOCTYPE html>

<html>
    <head>
        <title>Delete Employee</title>
    </head>
    <body>
        <?php
            $servername = "localhost";
            $username   = "admin";
            $password   = "password";
            $database   = "itlab";
            $table      = "employee";

            $conn = new mysqli($servername, $username, $password, $database);

            $id = $_GET['id'];

            $sql = "DELETE FROM $table WHERE id='$id'";
            
            if ($conn->query($sql) === TRUE) {
                echo "Employee deleted successfully";
            } else {
                echo "Error deleting employee: " . $conn->error;
            }
            
            $conn->close();
        ?>
        <br>
        <a href="index.html">Home</a>
    </body>
</html>