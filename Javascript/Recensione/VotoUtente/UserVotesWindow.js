
var IsVotesWindowDisplayed = false ;


/* Funzione di creazione della finestra di votazione */


function creaFinestraVotazione() {

	var  userVotes_Window = ElementDiv("FinestraVotazione") ;
	var  window_Children = new Array() ;

	window_Children[0] = ElementImage("FinestraExit","../Immagini/Bottoni/Exit.png","Exit") ;  
	window_Children[0].onclick = function() { CloseVotesWindow() ; } ;

	window_Children[1] = ElementText("h1","MostraGrafico","MOSTRA GRAFICO VOTI »","id") ; 
	window_Children[1].onclick = function() { Display_Close_Histogram() ; } ;  /* Si trova in GestioneIstogramma.js */

	Append( userVotes_Window, window_Children ) ;
	
	window_Children = averageVotes_Section() ;    /* Si trova in Vote_Elements.js */
	Append( userVotes_Window, window_Children ) ;

	window_Children = submitVote_Section() ;      /* Si trova in Vote_Elements.js */
	Append( userVotes_Window, window_Children ) ;

	return  userVotes_Window ;

}


/* Funzioni di gestione dell'apertura e della chiusura della finestra di votazione */


function DisplayVotesWindow() {

	if ( IsVotesWindowDisplayed == false ) {

		var finestraVotazione = creaFinestraVotazione() ;
		document.getElementById("CorpoRecensione").appendChild(finestraVotazione) ;

		IsVotesWindowDisplayed = true ;

	}

	return ;

}


function CloseVotesWindow() {

	Remove("FinestraVotazione") ;
	IsVotesWindowDisplayed = false ;

}