
<?php 
	
 require_once "./Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;

 $queries = array( "SELECT * FROM Redazione WHERE TipoRedazione = 'Webmaster'"		   ,
 				   "SELECT * FROM Redazione WHERE TipoRedazione = 'Ancient Power'"	   ,
 				   "SELECT * FROM Redazione WHERE TipoRedazione = 'Death In Progress'" ,
 				   "SELECT * FROM Redazione WHERE TipoRedazione = 'Slow Blackness'"	   , 	
 				   "SELECT * FROM Redazione WHERE TipoRedazione = 'Web'" ) ;	 

 $webmaster = $mysqli->performQuery( $queries[0] ) ;
 $ancient   = $mysqli->performQuery( $queries[1] ) ;
 $death     = $mysqli->performQuery( $queries[2] ) ;
 $black     = $mysqli->performQuery( $queries[3] ) ;
 $web       = $mysqli->performQuery( $queries[4] ) ;

 $listaRedazioni = array( 'Webmaster'=> $webmaster, 'Ancient'=> $ancient, 'Death'=> $death, 'Black'=> $black, 'Web'=> $web ) ;
 
 $coded_Lista = json_encode($listaRedazioni) ;

?>

	