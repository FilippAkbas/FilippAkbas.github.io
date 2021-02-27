<?php
$gender = $_POST['gender'];
$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$formText = $_POST['form-text'];
$gender = htmlspecialchars($gender);
$name = htmlspecialchars($name);
$surname = htmlspecialchars($surname);
$phone = htmlspecialchars($phone);
$formText = htmlspecialchars($formText);
$gender = urldecode($gender);
$name = urldecode($name);
$surname = urldecode($surname);
$phone = urldecode($phone);
$formText = urldecode($formText);
$gender = trim($gender);
$name = trim($name);
$surname = trim($surname);
$phone = trim($phone);
$formText = trim($formText);
if (mail("info@luresthetic.com", "Sayin ", "".$name." ".$surname , "randevunuz alındı" ,"info@luresthetic.com taraftan gönderildi \r\n"))
 {     echo "Mesajınız Gönderildi";
} else {
    echo "Bir hata oluştu";
}
?>