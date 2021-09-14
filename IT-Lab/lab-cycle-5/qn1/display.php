<!DOCTYPE html>

<html>
    <head>
        <title>List</title>
    </head>
    <body>
        <?php
            $servername = "localhost";
            $username   = "admin";
            $password   = "password";
            $database   = "itlab";
            $table      = "student";

            $conn = new mysqli($servername, $username, $password, $database);

            $sql = "SELECT * FROM student";
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0) {
                echo "<table border=\"1px\"><tr><th>ID</th><th>Name</th><th>Address</th><th>Age</th><th>Email</th><th>Phone</th></tr>";
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row["id"]        . "</td>";
                    echo "<td>" . $row["name"]      . "</td>";
                    echo "<td>" . $row["address"]   . "</td>";
                    echo "<td>" . $row["age"]       . "</td>";
                    echo "<td>" . $row["email"]     . "</td>";
                    echo "<td>" . $row["phone"]     . "</td>";
                    echo "</tr>";
                }
                echo "</table>";
            } else {
                echo "0 results";
            }

            $conn->close();
        ?>
    </body>
</html>