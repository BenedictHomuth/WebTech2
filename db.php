<?php

    $con = new mysqli("localhost", "root", "", "webtech2");

    if($con->connect_errno){
        echo "Failed!";
    }

    $result = $con->query("SELECT * FROM filme");


    while($datensatz  = $result->fetch_assoc()){

        $array[] = $datensatz;
    }

    //print_r($array);

    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    echo json_encode($array);
?>