
<?php

 require_once "./Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;


 $valid_Id = false ; 	/* Variabile utilizzata come controllo in ContributoRedattore.php */

 if ( isset($_GET['id']) ) {

	  $queryCount = "SELECT COUNT(*) as Numero FROM Redazione" ;
	  $numeroRedattori = $mysqli->performQuery($queryCount) ;
	  $numeroRedattori = $numeroRedattori[0]['Numero'] ;

	  $idRedattore = $mysqli->sqlInjectionFilter( $_GET['id'] ) ;
	  settype($idRedattore, 'integer') ;


	  if ( $idRedattore >= 1 && $idRedattore <= $numeroRedattori ) {
		   
		   $queryRedattore = "SELECT * FROM InfoRedattore NATURAL JOIN Redazione WHERE IdRedattore = $idRedattore" ;
		   $datiRedattore  = $mysqli->performQuery($queryRedattore) ;

		   $valid_Id = true ;
		   $coded_Profilo = json_encode($datiRedattore) ;

	}

 }

?>