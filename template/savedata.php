<?php 
		$to      = 'andreydvurechensky@gmail.com';
		$subject = 'Order started for '.$_POST['name'];	
		

		$message = $_POST['name'].' '.$_POST['email'].' '.$_POST['phone'].' '.$_POST['txt'];
		$headers = 'From: webmaster@vb48.ru' . "\r\n".
		
		'To: '.$to . "\r\n".
	    'Reply-To: webmaster@vb48.ru' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

		$result = mail($to, $subject, $message, $headers);
		echo "sended!".$result;
		
 ?>