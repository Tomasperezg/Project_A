<?php

// define variables and set to empty values
$name = "";
$email = "";
$body = "";
$nameErr ="";
$emailErr ="";
$bodyErr = "";
$successMessage ="";

if(isset($_POST['submit'])){
  if (empty($_POST["name"])){
    $nameErr = "Please enter your Name";
  } else {
    $name = test_input($_POST["name"]);
    // check if name is valid or not
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }
  if (empty($_POST["email"])) {
  $emailError = "Email is required";
  } else {
  $email = test_input($_POST["email"]);
  // check if e-mail address syntax is valid or not
  if (!preg_match("/([w-]+@[w-]+.[w-]+)/",$email)) {
  $emailErr = "Invalid email format";
  }
  }
  if (empty($_POST["body"]))
  {
  $bodyErr = "Message is required";
  }
  else
   {
  $body = test_input($_POST["body"]);
  } // Checking null values inthe message.
  if( !($name=='') && !($email=='') &&!($body=='') )
  { // Checking valid email.
  if (preg_match("/([w-]+@[w-]+.[w-]+)/",$email))
  {
  $header= $name."<". $email .">";
  $headers = "FormGet.com"; /* Let's prepare the message for the e-mail */
  $msg = "Hello! $name Thank you...! For Contacting Us.
  Name: $name
  E-mail: $email
  Message: $message
  This is a Contact Confirmation mail. We Will contact You as soon as possible.";
  $msg1 = " $name Contacted Us. Hereis some information about $name.
  Name: $name
  E-mail: $email
  Message: $message "; /* Send the message using mail() function */
  if(mail($email, $headers, $msg ) && mail("tomy1356@live.com", $header, $msg1 ))
  {
  $successMessage = "Message sent successfully.......";
  }
  }
  else
  {
    $emailErr = "Invalid Email";
   }
   }
  } // Function for filtering input values.function test_input($data)
  {
  $data = trim($data);
  $data =stripslashes($data);
  $data =htmlspecialchars($data);
  return $data;
  }

?>
