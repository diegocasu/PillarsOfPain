
<?php

  require_once ( dirname(__FILE__) . "./InfoDatabase.php" ) ;

  
  class MysqlConnection {

  	private
  		$mysqli_Connection = null ;

  	public 

  		function __construct() { 
  			
		 	global $nomeHost   ;
		 	global $nomeUtente ;
		 	global $password   ;
		 	global $nomeDB     ;

		 	$this->mysqli_Connection = new mysqli($nomeHost,$nomeUtente,$password,$nomeDB) ;

		 	if ($this->mysqli_Connection->connect_error)
				die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error) ;

	  	}
 	
 	    function __destruct() {

 	    	if ( $this->mysqli_Connection != null )
 	    		 $this->mysqli_Connection->close() ;

 	    }

 	    function codify($uncoded_Array) {

 	    	foreach ($uncoded_Array as $key => $value) 
				     $uncoded_Array[$key] = utf8_encode($uncoded_Array[$key]) ;
	
			return $uncoded_Array ;

 	    }

 	    function inizializzaRisultato($mysqliResult) {

 	    	$usableResult = array() ;

 	    	while ( $row = $mysqliResult->fetch_assoc() ) {
		 			$row = $this->codify($row) ;
		 			$usableResult[] = $row ;
 			}

 			return $usableResult ;

 	    }

 	    function checkResultRows($mysqliResult) {

 	    	$responseArray = array() ;

  			if ( $mysqliResult->num_rows == 0 ) 
		 		 $responseArray = null ;
		    else 
				 $responseArray = $this->inizializzaRisultato($mysqliResult) ;

			return $responseArray ;

 	    }


 	    function performQuery($query) {

 	    	if ( $this->mysqli_Connection != null ) {
 	    		 $result = $this->mysqli_Connection->query($query) ;
 	    		 $responseArray = $this->checkResultRows($result)  ;

 	    		 $result->close() ;

 	    		 return $responseArray ;

 	    	}

 	    }


 	    function performUpdateQuery($query) {

 	    	$success = false ;

 	    	if ( $this->mysqli_Connection != null )
 	    		 $success = $this->mysqli_Connection->query($query) ;

 	    	return $success ;

 	    }


 	    function sqlInjectionFilter($parameter) {

 	    	if ( $this->mysqli_Connection != null ) {

 	   		 	$parameter = $this->mysqli_Connection->real_escape_string($parameter) ;
	 	    	return $parameter ;

	 	    }

  		}

  }

?>