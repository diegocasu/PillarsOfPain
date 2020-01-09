
/* Redirezione bottoni presenti nell'intestazione  */ 

function SocialButtonRedirect(num) {

	switch (num) {

		case 1 : 
			window.open('https://it-it.facebook.com/') ;
			break ;

		case 2 :
			window.open('https://accounts.google.com/ServiceLogin?service=oz&passive=1209600&continue=https://plus.google.com/?gpsrc%3Dgplp0#identifier') ;
			break ;

		case 3 :
			window.open('https://twitter.com/?lang=it');
			break ;

		case 4 :
			window.open('https://www.youtube.com/?hl=it&gl=IT') ;

	}

}


/* Funzione che costruisce le varie componenti del nodo header */


function HeaderChildren(pathDepth) {

	var Children = new Array() ;

	Children[0] = ElementSimpleAnchor( pathDepth + "index.php" ) ;
	var img = ElementImage("LogoPrinc", pathDepth + "Immagini/LogoPrincipale.png","Pillars of Pain") ;
	Children[0].appendChild(img) ;

	Children[1] = ElementAnchor_IDClass ("ManualeUtente","onHover", pathDepth + "Manuale/ManualeUtente.html", "Manuale Utente" ) ;

	Children[2] = ElementInputImage_Class("initialButton", pathDepth + "Immagini/Bottoni/FacebookButton.png","Facebook") ;
	Children[2].onclick = function() { SocialButtonRedirect(1) ; } ;

	Children[3] = ElementInputImage_Class("initialButton", pathDepth + "Immagini/Bottoni/Google+Button.png","Google+")	 ;
	Children[3].onclick = function() { SocialButtonRedirect(2) ; } ;

	Children[4] = ElementInputImage_Class("initialButton", pathDepth + "Immagini/Bottoni/TwitterButton.png","Twitter")	 ;	
	Children[4].onclick = function() { SocialButtonRedirect(3) ; } ;

	Children[5] = ElementInputImage_Class("initialButton", pathDepth + "Immagini/Bottoni/YoutubeButton.png","Youtube") 	 ;
	Children[5].onclick = function() { SocialButtonRedirect(4) ; } ;

	return Children ;

}


/* Funzione di inizializzazione */


function createHeader(livello) {

	var header = ElementHeader() ;

	var pathDepth = "" ;

	if ( livello == 0 ) 
			pathDepth = "./" ;

	if ( livello == 1 ) 
			pathDepth = "../" ;

	var header_Children = HeaderChildren(pathDepth) ;

	Append(header,header_Children) ;

	document.getElementById("Sfondo").appendChild(header) ;

}