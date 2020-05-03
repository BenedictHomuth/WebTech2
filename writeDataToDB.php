<?php
    //https://lornajane.net/posts/2008/accessing-incoming-put-data-from-php
    if($_SERVER['REQUEST_METHOD'] == 'PUT') {
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
    
        parse_str(file_get_contents("php://input"),$result_array); //$result_array is a associative array
        $name = $result_array["name"];
        $jahr = $result_array["jahr"];
        
        $con = new mysqli("localhost", "root", "", "webtech2");
        if($con->connect_errno){
            echo json_encode("DB connection failed!");
        }
    
        $con->query("INSERT INTO filme(name, erscheinungsjahr) VALUES ('$name', '$jahr')");
        echo json_encode("Film created");
    }else{
        echo json_encode("The film was not added to your DB!");
    }


    
    
?>