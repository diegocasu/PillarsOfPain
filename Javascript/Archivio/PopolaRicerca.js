
/* Funzione che determina l'indirizzo dell'articolo associato ad un elemento trvovato */

function checkPath(idRicerca) {

	var ModelloNotizia    = "./ModelloNotizia.php?id="    ;	
	var ModelloSpeciale   = "./ModelloSpeciali.php?id="   ;
	var ModelloRecensione = "./ModelloRecensione.php?id=" ;

	var tipo = idRicerca.split('_') ;
	var info_path = new Array() ;

	switch ( tipo[0] ) {

		case "notizia" :
		 	info_path[0] = ModelloNotizia ;
		 	info_path[1] = "../Notizie"   ;
		 	break ;
		case "recensione" :
			info_path[0] = ModelloRecensione ;
			info_path[1] = "../Recensioni/UltimeUscite" ;
			break ;
		case "rispolverati" :
			info_path[0] = ModelloRecensione ;
			info_path[1] = "../Recensioni/Rispolverati" ;
			break ;
		case "extra" :
			info_path[0] = ModelloRecensione ;
			info_path[1] = "../Recensioni/ExtraMetal" ;
			break ;
		case "demo" :
			info_path[0] = ModelloRecensione ;
			info_path[1] = "../Recensioni/Demo" ;
			break ;
		case "articolo" :
			info_path[0] = ModelloSpeciale ;
			info_path[1] = "../Speciali/Articoli"    ;
			break ;
		case "intervista" :
			info_path[0] = ModelloSpeciale ;
			info_path[1] = "../Speciali/Interviste"    ;
			break ;
		case "live" :
			info_path[0] = ModelloSpeciale ;
			info_path[1] = "../Speciali/LiveReport"    ;
			break ;
		default :
			info_path[0] = "NULL" ;
			info_path[1] = "NULL" ;

	}

	return info_path ;

}


/* Costruttore di un singolo elemento trovato nell'archivio */


function ElementoRicerca(object_Search) {

	var ModelloProfilo = "./ModelloProfilo.php?id="	;
	var info_path = checkPath(object_Search['IdRicerca']) ;
	var modelloCorrente = info_path[0] ;
	var img_Path = info_path[1] + '/' + object_Search['Cartella'] + '/' + object_Search['Cover'] ;


	var elementFound = new Array() ;
	elementFound[0]  = ElementDivClass("ContenitoreTrovato",'') ;

	var found_Children = new Array() ;
	found_Children[0] = ElementImage_Class( "ImmagineTrovato", img_Path, object_Search['Titolo'] ) ;
	found_Children[1] = ElementAnchor_Class( "TitoloTrovato", modelloCorrente + object_Search['IdRicerca'], object_Search['Titolo'] ) ;
	found_Children[2] = ElementAnchor_Class( "AutoreTrovato", ModelloProfilo + object_Search['IdRedattore'], object_Search['NomeRedattore'] ) ;
	found_Children[3] = ElementDivClass( "DataPubblicazione", creaDataPubblicazione(object_Search['DataPubblicazione'],object_Search['NumeroCommenti'] ) ) ;

	Append( elementFound[0], found_Children ) ;

	elementFound[1] = ElementDivClass("SeparatoreRicerca",'') ;

	return elementFound ;

}





function inizializzaRisultatiRicerca(info) {

	/* Inizializzazione della funzione di ricerca interna alla sezione --- Si trova su RicercaSezioneCorrente.js */

	document.getElementById("innerSearchBox").onsubmit = function() { sectionSearch() ; return false ; } ;
	 

	/* Popolamento della sezione con gli eventuali risultati trovati */

	if (info['Search'] == null ) {

		var noResult = ElementText('h1',"NessunRisultato","Nessun risultato in archivio","id") ;
		document.getElementById("ContenitoreRicerca").appendChild(noResult) ;
		return ;

	}

	for ( var i = 0 ; i < info['Search'].length ; i++ ) {

		 var element = ElementoRicerca( info['Search'][i] ) ;
		 Append( document.getElementById("ContenitoreRicerca"), element ) ;

	}

	inizializzaCambioPagine( info['PaginaCorrente'], info['TotaleTrovati'][0]['TotaleElementi'] ) ; /* Si trova su CambioPagineRicerca.js */

}