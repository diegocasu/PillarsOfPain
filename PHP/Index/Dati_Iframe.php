
<?php 
	
 require_once "./PHP/Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;

 $IframePrincipale = array() ;
 $IframeSecondari  = array() ;

 $queries = array( "SELECT * FROM IframePrincipale ORDER BY Posizione" ,
 				   "SELECT * FROM IframeSecondari WHERE Tipo = 'Intervista'  ORDER BY Posizione" ,
 				   "SELECT * FROM IframeSecondari WHERE Tipo = 'Articolo'    ORDER BY Posizione" ,
 				   "SELECT * FROM IframeSecondari WHERE Tipo = 'Live Report' ORDER BY Posizione" 
 				 ) ;


 $IframePrincipale = $mysqli->performQuery( $queries[0] ) ;


 for ( $i = 1 ; $i < 4 ; $i++ ) {

 	   $actualQuery = $queries[$i] ;
 	   $IframeSecondari = array_merge( $IframeSecondari, $mysqli->performQuery($actualQuery) ) ;

 }


 $arrayIframe  = array( 'Principale'=> $IframePrincipale, 'Secondari'=> $IframeSecondari ) ;
 $coded_Iframe = json_encode($arrayIframe) ;


?>	