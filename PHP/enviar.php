<?php
//llamando a los campos
$nombre = $_POST["nombre"];
$email = $_POST["correo"];
$message = $_POST["mensaje"];
//datos
$destinatario ="elfurgon832@gmail.com";
$asunto = "correo de prueba";
$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $message ";
//enviando msj
mail($destinatario, $asunto, $carta); 
header("location:enviado.html")

?>