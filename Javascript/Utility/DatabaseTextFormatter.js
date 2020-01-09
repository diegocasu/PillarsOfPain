
function ripristina_TestoDatabase(testo) {

	var aperturaTag = new RegExp( "!_", 'g' ) ;
	var chiusuraTag = new RegExp( "_!", 'g' ) ;

	var testoIntermedio = testo.replace( aperturaTag, '<' ) ;
	var testoFinale = testoIntermedio.replace( chiusuraTag, '>' ) ;

	return testoFinale ;

}


function generaTesto(DB_Text,textContainer) {

	var parser = new DOMParser() ;
	var newText = ripristina_TestoDatabase(DB_Text) ;
	
	var newDocument = parser.parseFromString( newText,"text/html") ;
	var newBody = newDocument.getElementsByTagName("body") ;

	var length = newBody[0].childNodes.length ;

	for ( var i = 0 ; i < length ; i++ )
		document.getElementById(textContainer).appendChild( newBody[0].childNodes[0] ) ;

}