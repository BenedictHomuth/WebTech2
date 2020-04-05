<?php

$conn = new mysqli("localhost", "root", "", "fh-swf");

if($conn->errno){
    echo "<br>Something went wrong! ". $conn->errno . "<br>";
}

$searchTerm = $_GET["term"];
$stmt = "SELECT * FROM programmiersprachen WHERE name LIKE '%".$searchTerm."%'";


$result = $conn->query($stmt);
if($conn->error){
    echo "<br>Query failed!<br>";
}

$dataArr = [];
while($datensatz = $result->fetch_object()){
    array_push($dataArr,$datensatz->name);
}

echo json_encode($dataArr);

?>