
<?php

  require_once "./Utility/DataBaseConnection.php" ;
  require_once "./Utility/SpecialChars.php"   ; 

  $mysqli = new MysqlConnection() ;
  

  if ( isset($_GET['id']) ) {

 	  $idOggetto = $mysqli->sqlInjectionFilter( $_GET['id'] ) ;

 	  if ( $idOggetto == false ) 
 		   exit("Errore nel riconoscimento della stringa") ;


 	  /* Recupero Commenti */


 	  $queryCommenti_Level1 = "SELECT IdCommento, NomeUtente, Testo, DataPubblicazione, Voto
 	  						   FROM   Commenti
 	  						   WHERE  Articolo = '$idOggetto' AND Risposta = 0 
 	  						   ORDER BY DataPubblicazione DESC " ;

 	  $queryCommenti_Level2 = "SELECT IdCommento, NomeUtente, Testo, DataPubblicazione, Voto, Risposta
 	  						   FROM   Commenti
 	  						   WHERE  Articolo = '$idOggetto' AND Risposta <> 0 " ;
 	  						   

 	  $commenti_Level1 = $mysqli->performQuery( $queryCommenti_Level1 ) ;  
 	  $commenti_Level2 = $mysqli->performQuery( $queryCommenti_Level2 ) ;  


 	  for ( $i = 0 ; $i < sizeof($commenti_Level1) ; $i++ ) {

 	  		decodeSpecialChars( $commenti_Level1[$i]['Testo'] ) ;
 	  	    decodeSpecialChars( $commenti_Level1[$i]['NomeUtente'] ) ;

 	  }


 	   for ( $i = 0 ; $i < sizeof($commenti_Level2) ; $i++ ) {

 	  		decodeSpecialChars( $commenti_Level2[$i]['Testo'] ) ;
 	  	    decodeSpecialChars( $commenti_Level2[$i]['NomeUtente'] ) ;
 	  	    
 	  }


 	  $datiCommenti = array( 'Level1'=> $commenti_Level1, 'Level2'=>$commenti_Level2 ) ;
 	  $coded_Commenti = json_encode($datiCommenti) ;

  }

?>