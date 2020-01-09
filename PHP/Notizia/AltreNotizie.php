
<?php

	require_once "./Utility/DataBaseConnection.php" ;

	$mysqli = new MysqlConnection() ;

    if ( $valid_Id == true ) {          /* Variabile di controllo settata in Dati_Notizia.php */

    	$sameBand_Array = array() ;
    	$latestArray	= array() ;

        $nomeBand 	= $datiNotizia[0]['NomeBand'] ; /* Variabile calcolata in Dati_Notizia.php */ 
        $idCorrente = $idNotizia ;                  /* Variabile calcolata in Dati_Notizia.php */ 

        $querySameBand = "SELECT IdNotizia, Titolo FROM Notizie WHERE NomeBand = '$nomeBand' AND IdNotizia <> '$idCorrente' 
        				  ORDER BY DataPubblicazione DESC 
        				  LIMIT 7" ;

        $queryLatest = "SELECT IdNotizia, Titolo FROM Notizie WHERE NomeBand <> '$nomeBand'
        				ORDER BY DataPubblicazione DESC 
        				LIMIT 10" ;

        $sameBand_Array = $mysqli->performQuery( $querySameBand ) ;
        $latestArray    = $mysqli->performQuery( $queryLatest   ) ;

        $totalArray = array( 'SameBand'=> $sameBand_Array, 'Latest' => $latestArray ) ;
        $coded_AltreNotizie = json_encode($totalArray) ;

    }

?>