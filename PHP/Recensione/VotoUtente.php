
<?php

	function checkAlbumUserVotes($mysqli,$tabella,$idRecensione) {

		$query = "SELECT VotiUtenti FROM $tabella WHERE IdRecensione = '$idRecensione'" ;

		$result = $mysqli->performQuery($query) ;
		$empty = false ;

		if ( $result[0]['VotiUtenti'] == "" )
			 $empty = true ;

		return $empty ;

	}


	function setQuery($mysqli,$tabella,$idRecensione,$voto) {

		$empty = checkAlbumUserVotes($mysqli,$tabella,$idRecensione) ;

		$update = "UPDATE $tabella "  ;
	 	$set 	= "SET VotiUtenti = " ; 
	 	$where  = "WHERE IdRecensione = '$idRecensione'" ;

	 	if ( $empty == false ) 
	 		 $set .= "CONCAT( VotiUtenti, ';' , '$voto') " ;
	 	else
	 		 $set .= "'$voto' " ;

	 	$query = $update . $set . $where ;

	 	return $query ;

	}

?>


<?php

 require_once "../Utility/DataBaseConnection.php" ;
 require_once "./TipoRecensione.php"  ;

 $mysqli = new MysqlConnection() ;


 $updateSuccess = true ;		/* Variabile usata in SendUserVote.js per determinare se invio voto è andato a buon fine */

 $voto 		   = $mysqli->sqlInjectionFilter( $_POST['votoUtente']   ) ;
 $idRecensione = $mysqli->sqlInjectionFilter( $_POST['idRecensione'] ) ;

 $tipoRecensione = explode('_',$idRecensione)  ;
 $tabella = tipoRecensione($tipoRecensione[0]) ;
 
 if ( $voto == false || $idRecensione == false ) 
      $updateSuccess = false ;


 if ( $updateSuccess == true ) {

   	  $query = setQuery($mysqli,$tabella,$idRecensione,$voto) ;

	  if ( $mysqli->performUpdateQuery($query) == false )
	       $updateSuccess = false ;
 
 }

 $coded_SuccessVote = json_encode($updateSuccess) ;
 echo($coded_SuccessVote) ;

?>