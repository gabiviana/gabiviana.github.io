<?php
if(isset($_POST['email'])) {

    // CHANGE THE TWO LINES BELOW
    $email_to = "gabiviana@gabiviana.com";

    $email_subject = "GabiViana.com contact form message";


    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }

    // validation expected data exists
    if(
        !isset($_POST['email']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $email_from = $_POST['email']; // required
    $comments = $_POST['comments']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";


// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
?>

<!-- HTML SECTION IS LIKE THE INDEX.HTML SECTION :: JUST CHANGE WHAT YOU NEED TO CHANGE ! -->


<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" itemscope itemtype="http://schema.org/Product"> <!--<![endif]-->

<head>

    <meta charset="utf-8">
    <!-- Title and meta tag /-->
    <title>Gabriela Viana : UX/UI Designer</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">

    <!-- Stylesheets /-->
    <link rel="stylesheet" href="css/gumby.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="js/libs/modernizr-2.6.2.min.js"></script>

</head>


<body>


<!-- CONTAINER EMAIL ############################################### -->


	<!-- TITLE -->

	    <div class="row">
	      <div class="twelve columns centered">
	      <br>
	      <br>
	        <h2>Thank you. I will reply soon.</h2>
	      </div>
	    </div>

	    <div class="row" style="margin-top:35px;">

	    <div class="twelve columns centered">
		      <a class="buttom" href="index.html" >Back to the website</a>
		  </div>

	    </div>






<!-- END CONTAINER EMAIL ############################################### -->


  <!-- Grab Google CDN's jQuery, fall back to local if offline -->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.9.1.min.js"><\/script>')</script>


  </body>
</html>


<?php
}
die();
?>
