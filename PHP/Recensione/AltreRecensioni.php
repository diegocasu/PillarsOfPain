
<?php

 require_once "./Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;


 if ( $valid_IdRecensione == true ) {

      $nomeBand  = $datiRecensione[0]['NomeBand']  ;  /* Valori calcolati in precedenza in Dati_Recensione.php */ 
      $nomeAlbum = $datiRecensione[0]['NomeAlbum'] ;  /* Valori calcolati in precedenza in Dati_Recensione.php */ 

      $query = "SELECT D.*
    		  	FROM  ( SELECT  IdRecensione, NomeBand, NomeAlbum, Cartella, Cover FROM UltimeUscite 
    		  	    	UNION
					   	SELECT  IdRecensione, NomeBand, NomeAlbum, Cartella, Cover FROM Rispolverati 
					   	UNION
					   	SELECT  IdRecensione, NomeBand, NomeAlbum, Cartella, Cover FROM ExtraMetal 
					   	UNION
					   	SELECT  IdRecensione, NomeBand, NomeAlbum, Cartella, Cover FROM Demo 
				       )
					   AS D NATURAL JOIN InfoAlbum I
			  	WHERE  D.NomeBand = '$nomeBand' AND D.NomeAlbum <> '$nomeAlbum'
			  	ORDER BY I.AnnoPubblicazione DESC" ;

		
	  $altreRecensioni = $mysqli->performQuery($query) ;
      
      $coded_AltreRecensioni = json_encode($altreRecensioni) ;

	}

?>