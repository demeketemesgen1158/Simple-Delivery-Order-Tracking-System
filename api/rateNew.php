<?php
$servername="localhost";
$username="maflinkcom";
$password="B4mM8tO1bD9zP6x";
$dbname="maflinkcom_caseDB";

$objData=$_GET["q"];
$data=json_decode($objData, true);

$user = $data["userName"];
$q1 = $data["question1"];
$q2 = $data["question2"];
$q3 = $data["question3"];
$q4 = $data["question4"];
$comt =$data["comment"];

$comt = preg_replace("/\r?\n/", "\\n", addslashes($comt));
$comt = htmlspecialchars($comt);

$starRate = ((int)$q1 + (int)$q2 + (int)$q3 + (int)$q4)/4;
//$rDate = date("F \- j \- y");
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO rates (user, q1, q2, q3, q4, starRate, comment)
VALUES ('$user', '$q1', '$q2', '$q3', '$q4', '$starRate', '$comt')";

if ($conn->query($sql) === TRUE) {
  echo "Record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>