
<?php 

 require_once "./PHP/Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;

 $arrayNotizie 	  = array() ;
 $arrayRecensioni = array() ;


 /* Recupero Notizie */

 $queryNotizie = "SELECT IdNotizia, Cartella, Cover, Titolo, DataPubblicazione, NumeroCommenti 
 				  FROM   Notizie 
 		   		  ORDER BY DataPubblicazione DESC 
 		   		  LIMIT  20" ;

 $arrayNotizie = $mysqli->performQuery( $queryNotizie ) ;


 /* Recupero Recensioni */

 $queriesRecensioni = array( "SELECT U.IdRecensione, Titolo, U.DataPubblicazione, U.Cartella, U.Cover, U.NumeroCommenti, U.Voto, I.Genere 
 		   		 			  FROM   UltimeUscite U NATURAL JOIN InfoAlbum I 
 		   		 			  ORDER BY DataPubblicazione DESC 
 		   		 			  LIMIT  10" ,

 		   		 			 "SELECT R.IdRecensione, Titolo, R.NomeAlbum, R.DataPubblicazione, R.Cartella, R.Cover, R.NumeroCommenti, R.Voto, I.Genere 
 		   					  FROM   Rispolverati R NATURAL JOIN InfoAlbum I 
		 		   			  ORDER BY DataPubblicazione DESC 
		 		   			  LIMIT  5" ,

		 		   			 "SELECT E.IdRecensione, Titolo, E.NomeAlbum, E.DataPubblicazione, E.Cartella, E.Cover, E.NumeroCommenti, E.Voto, I.Genere 
 		   					  FROM   ExtraMetal E NATURAL JOIN InfoAlbum I 
 		   					  ORDER BY DataPubblicazione DESC 
 		   					  LIMIT  4" ,

 		   					 "SELECT D.IdRecensione, Titolo, D.NomeAlbum, D.DataPubblicazione, D.Cartella, D.Cover, D.NumeroCommenti, D.Voto, I.Genere 
 		   					  FROM   Demo D NATURAL JOIN InfoAlbum I 
 		  					  ORDER BY DataPubblicazione DESC 
 		   					  LIMIT  3" 
						    ) ;


 for ( $i = 0 ; $i < 4 ; $i++ ) {

 	   $actualQuery 	 = $queriesRecensioni[$i] ;
 	   $arrayRecensioni  = array_merge( $arrayRecensioni, $mysqli->performQuery($actualQuery) ) ;

 }


 $arrayNR = array( 'Notizie'=> $arrayNotizie, "Recensioni"=> $arrayRecensioni ) ;
 $coded_NotizieRecensioni = json_encode($arrayNR) ;


?>