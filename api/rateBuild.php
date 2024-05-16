<?php  
$servername="localhost";
$username="maflinkcom";
$password="B4mM8tO1bD9zP6x";
$dbname="maflinkcom_caseDB";

//create connection
$conn=mysqli_connect($servername, $username, $password, $dbname);

//check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql="SELECT * FROM rates ORDER BY id";
$result=mysqli_query($conn, $sql);
if (mysqli_num_rows($result)>0) {
	//output data of each row
	echo '{"0":{"0":{"0":"NO"}}';
	while($row=mysqli_fetch_assoc($result)){
		$data = new stdClass();
		$id=$row["id"];
        $data->$id=$row;
		$data = json_encode($data);
    	echo ",".'"'."$id".'"'.":";
    	echo $data;
	}
	echo "}";
}
else{
	echo "No results found";
}
mysqli_close($conn);
?>