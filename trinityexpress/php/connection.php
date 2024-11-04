<?php
$servername = "localhost" ;
$username = "root" ;
$password = "" ;
$dbname = "logistics";
// Create connection
$conn = mysqli_connect (
    $servername,
    $username,
    $password,
    $dbname
);
//Check connection
/* if ($conn->connect_error) {
   die("connection failed:".
   $conn->connect_error);
}

echo "connected successfully";

mysqli_close($conn); */

?>