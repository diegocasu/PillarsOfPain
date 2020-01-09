
var milliseconds_Counter = 0 ;

/* Funzione che, in base al tempo trascorso, determina quale Iframe debba cambiare immagine */

function checkCounter() {

	milliseconds_Counter+= 500 ;

	if( milliseconds_Counter == 7000 )
		automaticMainIframe() ;

	if( milliseconds_Counter == 9000 )
		automaticSecondaryIframe("Interviste") ;

	if( milliseconds_Counter == 11000 )
		automaticSecondaryIframe("Articoli") ;

	if( milliseconds_Counter == 13000 ) {
		automaticSecondaryIframe("Live") ;
		milliseconds_Counter = 0   ;
	} 

}


/* Funzione che, in avvio, fa partire l'inizializzazione degli Iframe e la procedura automatica di scorrimento delle immagini */

function automaticIframe(object_Iframe) {  	

	IframePrincipale = object_Iframe['Principale'] ;
	IframeSecondari  = object_Iframe['Secondari']  ;

	if ( IframePrincipale == null || IframeSecondari == null )
		 return

	automaticMainIframe() ;
	automaticSecondaryIframe("Interviste") ;
	automaticSecondaryIframe("Articoli")   ;
	automaticSecondaryIframe("Live") 	   ;

	setInterval("checkCounter()", 500 ) ; 

}