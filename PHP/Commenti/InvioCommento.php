
<?php

  require_once "../Utility/DataBaseConnection.php" ;
  require_once "../Utility/SpecialChars.php"       ; 

  $mysqli = new MysqlConnection() ;


  $insertSuccess = true ; 	/* Variabile usata in SendComment.js per determinare se commento è stato inviato con successo */


  $idRisposta = $_POST['idRisposta'] ;

  if ( $idRisposta == null )
       $idRisposta = 0 ;

  else {

       $idRisposta = $mysqli->sqlInjectionFilter( $_POST['idRisposta'] ) ;
       settype($idRisposta, 'integer' ) ;
  }


  $testoCommento = $mysqli->sqlInjectionFilter( $_POST['comment']   ) ;
  $idOggetto 	   = $mysqli->sqlInjectionFilter( $_POST['idOggetto'] ) ;
  $username		   = $mysqli->sqlInjectionFilter( $_POST['username']  ) ;
  $email		     = $mysqli->sqlInjectionFilter( $_POST['email']     ) ;


  if ( $testoCommento == false || $idOggetto == false || $username == false || $email == false )
  		 $insertSuccess = false ;

  encodeSpecialChars( $testoCommento ) ;
  encodeSpecialChars( $username      ) ;


 if ( $insertSuccess == true )  {

  	   $query = "INSERT INTO Commenti(NomeUtente,Email,Testo,Articolo,Risposta)
  				       VALUES ('$username', '$email', '$testoCommento', '$idOggetto', $idRisposta)" ;

  	  if ( $mysqli->performUpdateQuery($query) == false )
	       $insertSuccess = false ;

  }

  $coded_SuccessComment = json_encode($insertSuccess) ;
  echo ($coded_SuccessComment) ;

?>