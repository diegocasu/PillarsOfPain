
<?php

 require_once "./Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;

 
 if ( $valid_Id == true ) {

      $nomeBand  		= $datiSpeciale[0]['NomeBand'] ;  /* Variabile calcolata in Dati_Speciale.php */
      $specialeCorrente = $idSpeciale ;                   /* Variabile calcolata in Dati_Speciale.php */

      $articoli_array   = array() ; 
      $interviste_array = array() ;
      $live_array       = array() ;

      $Articoli_Query   = "SELECT Titolo, IdSpeciale 
                           FROM   Articoli 
                           WHERE  NomeBand = '$nomeBand' AND IdSpeciale <> '$specialeCorrente'
                           ORDER BY DataPubblicazione DESC LIMIT 4" ;

      $Interviste_Query = "SELECT Titolo, IdSpeciale 
                           FROM   Interviste   
                           WHERE  NomeBand = '$nomeBand' AND IdSpeciale <> '$specialeCorrente'
                           ORDER BY DataPubblicazione DESC LIMIT 3" ;

      $LiveReport_Query = "SELECT Titolo, IdSpeciale 
                           FROM   LiveReport 
                           WHERE  NomeBand = '$nomeBand' AND IdSpeciale <> '$specialeCorrente'
                           ORDER BY DataPubblicazione DESC LIMIT 3" ;     

      $articoli_array   = $mysqli->performQuery( $Articoli_Query   ) ;
      $interviste_array = $mysqli->performQuery( $Interviste_Query ) ;
      $live_array       = $mysqli->performQuery( $LiveReport_Query ) ;

      $total_array = array( 'Articoli' => $articoli_array, 'Interviste' => $interviste_array, 'LiveReport' => $live_array ) ;

      $coded_AltriSpeciali = json_encode($total_array) ;

    }

?>