
<?php

 require_once "./Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;

 $valid_Id = false ; 	/* Variabile di controllo usata in AltreNotizie.php */ 

 if ( isset( $_GET['id'] ) ) {

 	  $idNotizia = $mysqli->sqlInjectionFilter( $_GET['id'] ) ; 

 	  if ( $idNotizia == false ) 
 	 		exit("Errore nel riconoscimento della Notizia") ;


 	  $safeCheck = explode('_',$idNotizia) ;

 	  if ( $safeCheck[0] != "notizia" )
 	  		exit("Errore nel riconoscimento della Notizia") ;


 	  /* Recupero informazioni notizia */

	  $queryNotizia = "SELECT IdNotizia, NomeBand, Titolo, Testo, DataPubblicazione, NumeroCommenti, IdRedattore, NomeRedattore 
	  			       FROM   Notizie NATURAL JOIN Redazione 
	  			       WHERE  IdNotizia = '$idNotizia'" ;

	  $datiNotizia = $mysqli->performQuery( $queryNotizia ) ; 

	  $coded_Notizia = json_encode($datiNotizia) ;
	  $valid_Id = true ;

 }

?>

