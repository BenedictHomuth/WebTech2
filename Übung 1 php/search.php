<?php

$mysqli = new mysqli("localhost", "root", "", "fh-swf");

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$id = $_GET["q"];

$stmt = "select name from programmiersprachen WHERE name like "%'.id.'%". limit 10";

$result = $mysqli->query($std);

if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        echo $row["name"] . "<br>";
    }
}else{
    echo "0 results";
}


?>