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

$tl = $data["title"];
$cont = $data["content"];
$tl = preg_replace("/\r?\n/", "\\n", addslashes($tl));
$cont = preg_replace("/\r?\n/", "\\n", addslashes($cont));

$title = htmlspecialchars($tl);
$content = htmlspecialchars($cont);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE content SET cont='$content', title='$title' WHERE id=$id";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
?>