
<?php

  function tabellaSpeciali($tipo) {

  	switch ($tipo) {

 		case "live" :
 			$tabella = "LiveReport" ;
 			break ;

 		case "intervista" :
 			$tabella = "Interviste" ;
 			break ;

 		case "articolo" :
 			$tabella = "Articoli" ;
 			break ; 			
 		default :
 			exit("Errore di riconoscimento dello speciale") ;

    }

    return $tabella ;

  }

?>

<?php

 require_once "./Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;


 $valid_Id = false ;  /* Variabile di controllo usata in AltriSpeciali.php */


 if ( isset( $_GET['id'] ) ) {

 	  $idSpeciale = $mysqli->sqlInjectionFilter( $_GET['id'] ) ;

 	  if ( $idSpeciale == false ) 
 	 		exit("Errore nel riconoscimento della Notizia") ;


 	  $tableCheck = explode('_',$idSpeciale) ;
 	  $queryTable = tabellaSpeciali($tableCheck[0]) ;
 	  

	  $query = "SELECT IdSpeciale, NomeBand, Cartella, Titolo, Testo, Immagini, DataPubblicazione, NumeroCommenti, IdRedattore, NomeRedattore 
	  			FROM   $queryTable NATURAL JOIN Redazione R
	  			WHERE  IdSpeciale = '$idSpeciale'" ;

	  $datiSpeciale = $mysqli->performQuery($query) ;

	  $coded_Speciali = json_encode($datiSpeciale) ;
	  $valid_Id = true ;
 	
 }

?>