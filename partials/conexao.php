<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "apc_web";

$conn = new mysqli($servername, $username,$password,$database);

if ($conn ->connect_error ){
    die("Falha na conexão" . $conn->connect_error);
}

$nome = $_POST["nome"];
$email = $_POST["email"];
$num = $_POST["num"];

$sql = "INSERT INTO info (nome,email,num) VALUES ('$nome','$email','$num')";

if ($conn-> query($sql)===TRUE){
    echo "Formulário preenchido com suçesso!";
    } else  { echo "ERRO : ". $sql . "<br>" . $conn -> error;
}
$conn->close();
?>