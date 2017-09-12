<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);
$message = htmlspecialchars($_POST["message"]);
/* Устанавливаем e-mail адресата */
$myemail = "bomcrimea@gmail.ru";
/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$name = check_input($_POST["name"], "Введите ваше имя!");
$phone = check_input($_POST["phone"], "Введите номер телефона!");

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! 
Имя отправителя: $name 
Телефон: $phone 
Текст сообщения: $message 
Конец";
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$phone> \r\n Reply-To: $phone \r\n"; 
mail($myemail, $name, $message_to_myemail, $from);
?>
<p>Ваше сообщение было успешно отправлено!</p>
<p>На <a href="index.html">Главную >>></a></p>