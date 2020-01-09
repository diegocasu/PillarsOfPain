
/* Oggetto che rappresenta un valore passato tramite URL con metodo GET */

function GET_Parameter( key, value ) {

	this.Key   = key ;
	this.Value = value ;

}


/* Funzione che recupera un valore specifico nell'array inizializzato in GET_RecoverParameters */

function GET_RecoverValue(objectURL,key) {

	var foundValue = null ;

	for ( var i = 0 ; i < objectURL.length ; i++ ) {

		if ( objectURL[i].Key == key ) 
			 foundValue = objectURL[i].Value ;
	
	}

	return foundValue ; 
	
} 


/* Funzione che recupera URL corrente e ricava i parametri passati con metodo GET */

function GET_RecoverParameters(URL) {

	URL = URL.replace( '?' , '' ) ;
	URL = URL.split('&') ;

	var GET_Variables = new Array() ;

	for ( var i = 0 ; i < URL.length ; i++ ) {

		  var object_Properties = URL[i].split('=') ;
		  var object_Url = new GET_Parameter( object_Properties[0], object_Properties[1] ) ;
		  GET_Variables.push( object_Url ) ;

	}

	return GET_Variables ;

}