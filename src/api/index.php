<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *"); 
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    if (!isset($_POST['name'])) die();

    if($_POST){
        http_response_code(200);
        echo $_POST['name'];
    }
    if($_POST){
        http_response_code(200);
        $subject = $_POST['name'];
        $to = "mau.petersen@gmail.com";
        $from = $_POST['email'];

        $message = $_POST['name'];

        $headers = "MIME-Version: 1.0\r\n";
        $headers.= "Content-type: text/html; charset=UTF-8\r\n";
        $headers.= "From: " . $from;
        mail($to, $subject, $message, $headers);
        
        echo json_encode(array(
            "sent" => true
        ));
    }

?>