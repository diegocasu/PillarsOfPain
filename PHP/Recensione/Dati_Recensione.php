
<?php

 require_once "./Utility/DataBaseConnection.php" ;
 require_once "./Recensione/TipoRecensione.php"  ;

 $mysqli = new MysqlConnection() ;


 $valid_IdRecensione = false ;  /* Variabile di controllo utilizzata in AltreRecensioni.php */

 if ( isset($_GET['id']) ) {

 	$idRecensione = $mysqli->sqlInjectionFilter( $_GET['id'] ) ;

 	if ( $idRecensione == false ) 
 		exit("Errore nel riconoscimento della stringa") ;


 	/* Recupero dati recensione */

 	$tipoRecensione = explode('_',$idRecensione)  ;
 	$tabella = tipoRecensione($tipoRecensione[0]) ;
 	
 	$queryDati = "SELECT T.*, I.AnnoPubblicazione, I.Label, I.Genere, I.Tracklist, I.Formazione, R.NomeRedattore, '$tabella' AS Tipologia 
 			  	  FROM   $tabella T NATURAL JOIN InfoAlbum I NATURAL JOIN Redazione R
 			  	  WHERE  T.IdRecensione = '$idRecensione'" ;

 	$datiRecensione = $mysqli->performQuery( $queryDati ) ; 

 	$coded_Recensione = json_encode($datiRecensione) ;
 	$valid_IdRecensione = true ;

 }

?>