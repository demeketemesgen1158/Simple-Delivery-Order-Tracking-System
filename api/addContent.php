<?php
$servername="localhost";
$username="maflinkcom";
$password="B4mM8tO1bD9zP6x";
$dbname="maflinkcom_caseDB";

$objData=$_GET["q"];
$data=json_decode($objData, true);

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

$sql = "INSERT INTO content (cont, title, remark)
VALUES ('$content', '$title', 'active')";

if ($conn->query($sql) === TRUE) {
  echo "Record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>