<!DOCTYPE html>

<html>
    <head>
        <title>Employee List</title>
    </head>
    <body>
        <?php

            $servername = "localhost";
            $username   = "admin";
            $password   = "password";
            $database   = "itlab";
            $table      = "employee";

            $conn = new mysqli($servername, $username, $password, $database);

            $sql = "SELECT * FROM $table";
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0) {
                echo "<table border=\"1px\"><tr>";
                echo "<th>ID</th><th>Name</th><th>Department</th><th>Email</th>";
                echo "</th><th>Phone</th><th>Address</th><th>Action</th></tr>";
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row["id"]         . "</td>";
                    echo "<td>" . $row["name"]       . "</td>";
                    echo "<td>" . $row["department"] . "</td>";
                    echo "<td>" . $row["email"]      . "</td>";
                    echo "<td>" . $row["phone"]      . "</td>";
                    echo "<td>" . $row["address"]    . "</td>";
                    echo "<td><a href=\"qn5/update-frm.php?id=" . $row["id"] . "\">Update</a>";
                    echo " <a href=\"qn5/delete.php?id=" . $row["id"] . "\">Delete</a></td>";
                    echo "</tr>";
                }
                echo "</table>";
            } else {
                echo "0 results";
            }

            $conn->close();
        ?>
        <br>
        <a href="qn5/index.html">Home</a>
    </body>
</html>