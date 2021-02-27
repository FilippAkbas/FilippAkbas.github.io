<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$message = $_POST['message'];
$name = htmlspecialchars($name);
$mail = htmlspecialchars($mail);
$message = htmlspecialchars($message);
$name = urldecode($name);
$mail = urldecode($mail);
$message = urldecode($message);
$name = trim($name);
$mail = trim($mail);
$message = trim($message);
if (mail("info@luresthetic.com", "Sayin ", "".$name." ".$mail , "mesajınızı aldık teşekkür ederiz" .$message. "" ,"info@luresthetic.com taraftan gönderildi \r\n"))
 {     echo "Mesajınız Gönderildi";
} else {
    echo "Bir hata oluştu";
}
?>