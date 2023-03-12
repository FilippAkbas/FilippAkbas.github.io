<?php

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'POST') {
  exit();
}

$to = 'avtortest@proton.me'; 
$from = 'filipp.akbas@gmail.com'; 
$fromName = 'Заява на отримання знижки з сайту avtor.com'; 
 
$subject = "Заява на отримання знижки"; 
$message = '';

$color_counter = 1;

foreach ($_POST as $key => $value) {
    if ($value === '') {
        continue;
    }
    $color = $color_counter % 2 === 0 ? '#fff' : '#f8f8f8';
    $message .= "
        <tr style='background-color: $color;'>
        <td style='padding: 10px; border: 1px solid #e9e9e9;'>$key</td>
        <td style='padding: 10px; border: 1px solid #e9e9e9;'>$value</td>
        </tr>";

    $color_counter++;
}
 
$message = "<table style='width: 100%;'>$message</table>";
 
// Set content-type header for sending HTML email 
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
 
// Additional headers 
$headers .= 'From: '.$fromName.'<'.$from.'>' . "\r\n"; 
 
// Send email 
if(mail($to, $subject, $message, $headers)){ 
    echo 'success';
}else{ 
    echo 'error';
}

?>