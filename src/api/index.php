<?php 
try {
    $db = new PDO(
    'mysql:host=localhost;dbname=la_fete;charset=utf8',
    'root',
    'root',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} 
catch (Exception $e) {
    die('Erreur: ' . $e->getMessage());
}

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *"); 
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    if (!isset($_POST['name']) || 
    !isset($_POST['phone']) ||
    !isset($_POST['date']) ||
    !isset($_POST['price']) ||
    !isset($_POST['sleep']) ||
    !isset($_POST['sheets']) ||
    !isset($_POST['food']) ||
    !isset($_POST['participation'])||
    !isset($_POST['question'])
    ) die();

    if($_POST){
        http_response_code(200);
        echo $_POST['name'];
    }
    if($_POST){

        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $price = $_POST['price'];
        $sleep = $_POST['sleep'];
        $sheets = $_POST['sheets'];
        $food = $_POST['food'];
        $participation = $_POST['participation'];
        $question = $_POST['question'];

        http_response_code(200);
        $sqlQuery = 'INSERT INTO participants(full_name, email) VALUES (:full_name, :email)';
        
        $insertParticipant = $db->prepare($sqlQuery);
        $insertParticipant->execute([
            'full_name' => $name,
            'email' => $email
        ]);
    }

?>
