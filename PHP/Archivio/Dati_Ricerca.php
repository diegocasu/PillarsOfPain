
<?php

 function checkTipoRicerca($tipoRicerca,&$tipoId) {

 	switch ($tipoRicerca) {

 		case "ultimeuscite" :
 		case "rispolverati" :
 		case "extrametal"   :
 		case "demo" 		:
 			$tipoId = "IdRecensione" ;
 			break ;

 		case "notizie" :
 			 $tipoId = "IdNotizia" ;
 			 break ; 

 		case "articoli"   :
		case "interviste" :
		case "livereport" :
			$tipoId = "IdSpeciale" ;
			break ;

		case "all" :
 			 break ;

 		default:
 			exit("Errore di riconoscimento tabella") ;

 	}

 }


 function elaboraPagina( &$pagina ) {

 	$cast     = (int)$pagina     ;
 	$positive = abs($cast)       ;
 	$round    = round($positive) ;

 	$pagina = $round ;

 }


 function checkInputSecondari( $mysqli, &$autore, &$inputUtente ) {

 	if ( isset( $_GET['autore'] ) ) {
 		$autoreString = $mysqli->sqlInjectionFilter( $_GET['autore'] ) ;
 		$autore = (int)$autoreString ;
 	}

 	if ( isset( $_GET['inputUtente'] ) )
 		$inputUtente = $mysqli->sqlInjectionFilter( $_GET['inputUtente'] ) ;

 }


 function buildQuery($tipoId,$tipoRicerca,$pagina,$autore,$inputUtente) {

 	$queryCount  = '' ;
 	$querySelect = '' ;

 	$offset = $pagina*10 ;

 	if ( $tipoRicerca != "all" ) {

	 	 $queryCount = "SELECT COUNT(*) AS TotaleElementi
	 	 		        FROM $tipoRicerca NATURAL JOIN Redazione R " ;
 	}
 	else if ( $tipoRicerca == "all" ) {
 		
 		$queryCount = "SELECT COUNT(*) AS TotaleElementi
 				  	   FROM ( 
			 		 		 SELECT IdRecensione AS IdRicerca, Cover, Cartella, Titolo, DataPubblicazione, NumeroCommenti, IdRedattore
			 		 		 FROM   UltimeUscite
			 		 		 UNION
			 		 		 SELECT IdRecensione AS IdRicerca, Cover, Cartella, Titolo, DataPubblicazione, NumeroCommenti, IdRedattore
			 		 		 FROM   Rispolverati
			 		 		 UNION
			 		 		 SELECT IdRecensione AS IdRicerca, Cover, Cartella, Titolo, DataPubblicazione, NumeroCommenti, IdRedattore
			 		 		 FROM   ExtraMetal
			 		 		 UNION
			 		 		 SELECT IdRecensione AS IdRicerca, Cover, Cartella, Titolo, DataPubblicazione, NumeroCommenti, IdRedattore
			 		 		 FROM   Demo
			 		 		 UNION
			 		 		 SELECT IdNotizia AS IdRicerca, Cover, Cartella, Titolo, DataPubblicazione, NumeroCommenti, IdRedattore
			 		 		 FROM   Notizie
			 		 		 UNION
			 		 		 SELECT IdSpeciale AS IdRicerca, Cover, Cartella, Titolo, DataPubblicazione, NumeroCommenti, IdRedattore
			 		 		 FROM   Articoli
			 		 		 UNION
			 		 		 SELECT IdSpeciale AS IdRicerca, Cover, Cartella, Titolo, DataPubblicazione, NumeroCommenti, IdRedattore
			 		 		 FROM   LiveReport
			 		 		 UNION
			 		 		 SELECT IdSpeciale AS IdRicerca, Cover, Cartella, Titolo, DataPubblicazione, NumeroCommenti, IdRedattore
			 		 		 FROM   Interviste
	 		 	  		    ) AS D NATURAL JOIN Redazione R " ;
 	}


 	if ( $inputUtente != null && $autore != null )
	 	 	$queryCount = $queryCount . "WHERE LOWER(Titolo) LIKE LOWER('%" . $inputUtente . "%')" . " AND IdRedattore = $autore " ;

	else if ( $inputUtente != null && $autore == null )
	 	 	$queryCount = $queryCount . "WHERE LOWER(Titolo) LIKE LOWER('%" . $inputUtente . "%')" ;

	else if ( $inputUtente == null && $autore != null )
	 	 	$queryCount = $queryCount . "WHERE IdRedattore = $autore " ;



	if ( $tipoRicerca != "all" ) 
		 $querySelect = str_replace('SELECT COUNT(*) AS TotaleElementi', "SELECT " . $tipoId . " AS IdRicerca," . " Cover, Cartella, Titolo, DataPubblicazione, NumeroCommenti, IdRedattore, NomeRedattore", $queryCount ) ;
	
	else if ( $tipoRicerca == "all" )
		 $querySelect = str_replace('SELECT COUNT(*) AS TotaleElementi', "SELECT D.*, NomeRedattore", $queryCount ) ;

	$querySelect = $querySelect . "ORDER BY DataPubblicazione DESC LIMIT 10 OFFSET $offset " ;	



	$queries = array( 'Count'=>$queryCount, 'Select'=>$querySelect ) ;

 	return $queries ;
 	
 }

?>




<?php

 require_once "./Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;
 

 if ( isset( $_GET['tipoRicerca'] ) && isset( $_GET['pagina'] ) ) {

 	$tipoRicerca = $mysqli->sqlInjectionFilter( $_GET['tipoRicerca'] ) ;
 	$tipoId = '' ;
 	checkTipoRicerca($tipoRicerca,$tipoId) ;
 	
 	$pagina = $mysqli->sqlInjectionFilter( $_GET['pagina'] ) ;
 	elaboraPagina($pagina) ;

 	$autore 	  = null ;
 	$inputUtente  = null ;
 	checkInputSecondari($mysqli,$autore,$inputUtente) ; 

 	$elementiTrovati = array() ;
 	$numeroElementi  = array() ;
 	$queries = buildQuery($tipoId,$tipoRicerca,$pagina,$autore,$inputUtente) ;

 	$elementiTrovati = $mysqli->performQuery( $queries['Select'] ) ;
 	$numeroElementi  = $mysqli->performQuery( $queries['Count' ] ) ;

 	$total_search = array( 'PaginaCorrente'=> $pagina, 'TotaleTrovati'=> $numeroElementi, 'Search'=> $elementiTrovati ) ;

 	$coded_Search = json_encode($total_search) ;
 
 }

?>