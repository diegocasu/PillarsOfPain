
<?php 


  function encodeSpecialChars(&$string) {

    $string = htmlentities($string, 0, 'UTF-8') ;

  }


  function decodeSpecialChars(&$string) {

  	$string = html_entity_decode($string, 0 ,'UTF-8' ) ;

  }


?>