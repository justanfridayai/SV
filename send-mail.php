<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // ENTER YOUR EMAIL HERE
    $to = "sanjayprakashrp@gmail.com";

    // Form Fields
    $name    = $_POST["full-name"];
    $email   = $_POST["email"];
    $mobile  = $_POST["number"];
    $message = $_POST["comments"];

    // Email Subject
    $subject = "New Contact Form Message from $name";

    // Email Body
    $body = "
    Name: $name
    Email: $email
    Mobile: $mobile

    Message:
    $message
    ";

    // Headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "failed";
    }
}
?>
