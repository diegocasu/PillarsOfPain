
<?php

 $root_PHP_Files = realpath( dirname(__FILE__) . '/..' ) ;
	
 require_once ( $root_PHP_Files . "/Utility/DataBaseConnection.php"  ) ;
 require_once ( $root_PHP_Files . "/Utility/SpecialChars.php"  )       ; 


 $mysqli = new MysqlConnection() ;


 $commentiRecensioni = array() ;
 $commmentiNotizie   = array() ;
 $commentiSpeciali   = array() ;


$queryRecensioni = "SELECT D.NomeUtente, D.Testo, D.Articolo, DR.Titolo 
					FROM ( SELECT *
 					       FROM   Commenti 
 					 	   WHERE  ( Articolo LIKE 'recensione%' )  OR 
 					          	  ( Articolo LIKE 'rispolverati%') OR 
 					        	  ( Articolo LIKE 'extra%' ) 	    OR 
 					        	  ( Articolo LIKE 'demo%' )
 					 	   ORDER BY DataPubblicazione DESC 
 					 	   LIMIT  3
 					 	 ) AS D NATURAL JOIN DettagliRecensioni DR " ;  /* DettagliRecensione è una vista presente nel database */


$queryNotizie = "SELECT D.NomeUtente, D.Testo, D.Articolo, Titolo
 				 FROM  ( SELECT * 
 				 		 FROM   Commenti 
 				 		 WHERE  Articolo LIKE 'notizia%'
 				 		 ORDER BY DataPubblicazione DESC
 				 		 LIMIT  3
 				 	    ) AS D INNER JOIN Notizie ON Articolo = IdNotizia " ;


$querySpeciali = "SELECT D.NomeUtente, D.Testo, D.Articolo, DS.Titolo
 				  FROM ( SELECT *
	 				     FROM   Commenti 
	 				     WHERE  ( Articolo LIKE 'articolo%' )  OR 
	 				            ( Articolo LIKE 'live%')       OR 
	 				            ( Articolo LIKE 'intervista%' )
	 				     ORDER BY DataPubblicazione DESC
	 				     LIMIT  3
	 			 	    ) AS D NATURAL JOIN DettagliSpeciali DS" ;  /* DettagliSpeciali è una vista presente nel database */


 $commentiRecensioni = $mysqli->performQuery( $queryRecensioni ) ;
 $commmentiNotizie   = $mysqli->performQuery( $queryNotizie    ) ;
 $commentiSpeciali   = $mysqli->performQuery( $querySpeciali   ) ;



 for( $i = 0 ; $i < 3 ; $i++ ) {

 	  decodeSpecialChars( $commentiRecensioni[$i]['Testo']      ) ;
 	  decodeSpecialChars( $commentiRecensioni[$i]['NomeUtente'] ) ;

 	  decodeSpecialChars( $commmentiNotizie[$i]['Testo']		) ;
 	  decodeSpecialChars( $commmentiNotizie[$i]['NomeUtente']   ) ;
 	  
 	  decodeSpecialChars( $commentiSpeciali[$i]['Testo']		) ;
 	  decodeSpecialChars( $commentiSpeciali[$i]['NomeUtente']   ) ; 

 }



 $datiUltimiCommenti = array( 'Recensioni'=> $commentiRecensioni, 'Notizie'=> $commmentiNotizie, 'Speciali'=> $commentiSpeciali ) ;
 $coded_UltimiCommenti = json_encode($datiUltimiCommenti) ;

?>
