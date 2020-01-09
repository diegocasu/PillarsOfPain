
var IsHistogramDisplayed   = false ;


/* Funzione che aggiorna la lunghezza di ogni singolo campo dell'istogramma in base alla percentuale voti ;
   L'aggiornamento dinamico permette di far scattare la transizione CSS */

function HistogramTransition() {

	for ( var i = 2 ; i < 8 ; i++ )
		document.getElementById("Istogramma").childNodes[i].style.width = PixelPercentages[i-2] + 1 + "px" ;

}


/* Funzione di gestione delle componenti della finestra di votazione: quando il grafico viene aperto o chiuso alcuni
   elementi vengono spostati e la finestra viene ridimensionata */


function UpdateWindowElements(tipo) {

	if ( tipo == "open" ) {

		document.getElementById("FinestraVotazione").style.top     =  "40px"   ;
		document.getElementById("MostraGrafico").childNodes[0].nodeValue = "CHIUDI GRAFICO VOTI »" ;
		document.getElementById("MediaAttuale").style.top          =  "-270px" ;
		document.getElementById("NumeroVoti").style.top            =  "-270px" ;

	}

	if ( tipo == "close" ) {

		document.getElementById("MostraGrafico").childNodes[0].nodeValue = "MOSTRA GRAFICO VOTI »" ;
		document.getElementById("FinestraVotazione").style.top     =  "150px"   ;

	}

}



/* Funzione che inizializza o rimuove l'istogramma */


function Display_Close_Histogram() {

	var newVotesWindowChildren = new Array() ;
	var toDelete = document.getElementById("FinestraVotazione").childNodes.length ;

	for ( var i = 2 ; i < toDelete ; i++ ) {

		var remove = document.getElementById("FinestraVotazione").childNodes[2] ;
		remove.parentNode.removeChild(remove) ;

	}

	if ( IsHistogramDisplayed == false ) {
	
	    newVotesWindowChildren[0] = Histogram() ;
	    newVotesWindowChildren    = newVotesWindowChildren.concat( averageVotes_Section() )  ;
		
	   	Append( document.getElementById("FinestraVotazione"), newVotesWindowChildren ) ;

		UpdateWindowElements("open") ;	    
		HistogramTransition() ;

		IsHistogramDisplayed = true ;

	}

	else if ( IsHistogramDisplayed == true ) {

		newVotesWindowChildren = newVotesWindowChildren.concat( averageVotes_Section() ) ;
		newVotesWindowChildren = newVotesWindowChildren.concat( submitVote_Section()   ) ;

		Append( document.getElementById("FinestraVotazione"), newVotesWindowChildren ) ;

		UpdateWindowElements("close") ;

		IsHistogramDisplayed = false ;

	}

}