<?php


mail("info@emergency-survival-app.com",
"Es gibt eine neue Kontaktanfrage",
"Email: {$_POST['email']}, Name: {$_POST['name']}, Nachricht: {$_POST['message']}"
);

header("Location: /#/success");
?>

