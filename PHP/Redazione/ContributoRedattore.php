
<?php

 require_once "./Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;


 if ( isset($_GET['id']) && $valid_Id = true ) {

    $idRedattore = $mysqli->sqlInjectionFilter( $_GET['id'] ) ;
    settype($idRedattore, 'integer') ;

    $querySelect = "SELECT COUNT(*) AS Totale " ;
    $queryWhere  = "WHERE IdRedattore = $idRedattore" ;

    $contributo = array() ;
    $tabelle    = array( "Articoli", "Demo","ExtraMetal","Interviste","LiveReport","Notizie","Rispolverati","UltimeUscite" ) ;

    for ( $i = 0 ; $i < sizeof($tabelle) ; $i++ ) {

          $query = $querySelect . "FROM " . $tabelle[$i] . " " . $queryWhere ;
          $numeroArticoli = $mysqli->performQuery($query) ;

          $contributo[$i] = $numeroArticoli[0] ;
    }

    $contributo_Totale = array( 'Label'=> $tabelle, 'Count'=> $contributo, 'Redattore'=>$idRedattore ) ;
    $coded_Contributo = json_encode($contributo_Totale) ;
 
}

?>