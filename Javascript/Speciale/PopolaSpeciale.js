
function generaTitolo(idSpeciale,titoloParziale) {

	var titoloFinale = "" ;
	var tipoSpeciale = idSpeciale.split('_') ;

	switch(tipoSpeciale[0]) {

		case "live" :
 			titoloFinale = "Live Report - " ;
 			break ;

 		case "intervista" :
 			titoloFinale = "Intervista - " ;
 			break ;

 		case "articolo" :
 			titoloFinale = "Articolo - " ;
 			break ; 	

 		default :
 			titoloFinale = "Speciale - " ;

	}

	titoloFinale = titoloFinale + titoloParziale ;

	return titoloFinale ;

}



/* Funzione di costruzione di una immagine allegata all'articolo */

function immagine_Speciale(singolaImmagine,cartella,tipologia) {

	var indirizzoImmaginiLiveReport = "../Speciali/LiveReport/" ;
	var indirizzoImmaginiInterviste = "../Speciali/Interviste/" ;
	var indirizzoImmaginiArticoli   = "../Speciali/Articoli/"   ;


	var elementoImmagine = new Array() ;

	var immagine_descrizione = singolaImmagine.split('-') ;
	var tipoIndirizzo = tipologia.split('_') ;


	switch(tipoIndirizzo[0]) {

		case "live" :
 			var pathImmagini = indirizzoImmaginiLiveReport ;
 			break ;

 		case "intervista" :
 			var pathImmagini = indirizzoImmaginiInterviste ;
 			break ;

 		case "articolo" :
 			var pathImmagini = indirizzoImmaginiArticoli ;
 			break ; 	

 		default :
 			var pathImmagini = '' ;

	}
	

	pathImmagini = pathImmagini + cartella + '/' + immagine_descrizione[0] ;

	elementoImmagine[0] = ElementImage_Class("ImmagineSpeciale",pathImmagini,"Correlata") ;
	elementoImmagine[1] = ElementText("h2","DescrizioneImmagineSpeciale",immagine_descrizione[1],"class") ;

	return elementoImmagine ;

}



/* Funzione di costruzione della sezione immagini */

function sezioneImmagini_Speciale(listaImmagini,cartella,tipologia) {

	if ( listaImmagini == '' )
		return ;


	var singoleImmagini = listaImmagini.split(';') ;

	for ( var i = 0 ; i < singoleImmagini.length ; i++ ) {
		  var elementoImmagine = immagine_Speciale( singoleImmagini[i], cartella, tipologia ) ;
		  Append( document.getElementById("ContenitoreImmaginiSpeciali"), elementoImmagine ) ;
	} 

}



/* Funzione di inizializzazione dello speciale */

function popolaSpeciale(info) {

	if ( info == null )
		 return ;


	var indirizzoModelloProfilo = "./ModelloProfilo.php" ;

	var titoloParziale = info['Titolo'] + " | Pillars of Pain" ;
	document.title = generaTitolo(info['IdSpeciale'],titoloParziale) ;

	document.getElementById("TitoloSpeciali").childNodes[0].nodeValue = info['Titolo'] ;

	generaTesto( info['Testo'] ,"TestoSpeciali") ; 	/* Si trova su DatabaseTextFormatter.js */

	document.getElementById("LinkAutoreSpeciali").childNodes[0].nodeValue = info['NomeRedattore'] ;
	document.getElementById("LinkAutoreSpeciali").href = indirizzoModelloProfilo + "?id=" + info['IdRedattore'] ;

	sezioneImmagini_Speciale(info['Immagini'],info['Cartella'],info['IdSpeciale']) ;

	var dataPubblicazione = creaDataPubblicazione( info['DataPubblicazione'], info['NumeroCommenti'] )  ; 
	document.getElementById("Pubblicazione_NumeroCommenti").childNodes[0].nodeValue = dataPubblicazione ;

}