<?php

if(!empty($_POST['firstname']) && !empty($_POST['lastname']) && !empty($_POST['email']) && !empty($_POST['message']) ) {

    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {

    }
    else {
        echo "Email non valide.";
    }
}
else {
    header('Location: index.html');
}