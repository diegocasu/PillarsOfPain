
<?php

 require_once "../Utility/DataBaseConnection.php" ;

 $mysqli = new MysqlConnection() ;

 $commentVote_Success = true ;    /* Variabile usata in UpDown_Vote.js per determinare se voto è andato a buon fine */


 $commentID = $mysqli->sqlInjectionFilter( $_POST['id']   	   ) ;
 $increment = $mysqli->sqlInjectionFilter( $_POST['increment'] ) ;

 if ( $commentID == false || $increment == false )
  	  $commentVote_Success = false ;

 settype($commentID, 'integer') ;
 settype($increment, 'integer') ;


 if ( $commentVote_Success == true )  {

 	  $query = "UPDATE Commenti
 	  			SET    Voto = Voto + $increment 
 	  			WHERE  IdCommento = $commentID" ;

 	  if ( $mysqli->performUpdateQuery($query) == false ) 
 	  	   $commentVote_Success = false ;

 }

 $coded_VoteComment = json_encode($commentVote_Success) ;
 echo ($coded_VoteComment) ;

?>