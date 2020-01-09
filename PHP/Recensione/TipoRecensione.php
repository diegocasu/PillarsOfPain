
<?php

 function tipoRecensione( $tipo ) {

 	switch ($tipo) {

 		case "recensione" :
 			$tabella = "UltimeUscite" ;
 			break ;

 		case "rispolverati" :
 			$tabella = "Rispolverati" ;
 			break ;

 		case "extra" :
 			$tabella = "ExtraMetal" ;
 			break ;

 		case "demo" :
 			$tabella = "Demo" ;
 			break ;
 			
 		default :
 			exit("Errore di riconoscimento della recensione") ;

    }

    return $tabella ;

 }

?>