<?php  
$servername="localhost";
$username="maflinkcom";
$password="B4mM8tO1bD9zP6x";
$dbname="maflinkcom_caseDB";

//create connection

$objData=$_GET["q"];
$data=json_decode($objData, true);
$i = $data["id"];
$id = 1+(int)$i;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE content SET remark='inactive' WHERE id=$id";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
?>