 
/* Inizializza i pulsanti per passare alla pagina successiva o precedente della ricerca corrente */

function pulsante_SuccessivaPrecedente( tipo, paginaCorrente, ricercaCorrente ) {

	if ( tipo == "precedente" ) {
		var testoPulsante = "« Precedente" ;
		var cambioPagina = paginaCorrente - 1 ;
	}
	else if ( tipo == "successivo" ) {
		var testoPulsante = "Successivo »" ;
		var cambioPagina = paginaCorrente + 1 ;
	}

	var nuovaPagina = 'pagina=' + cambioPagina ;
	var nuovoIndirizzo = ricercaCorrente.replace( /pagina=\d/, nuovaPagina ) ;

	var pulsante = ElementAnchor_Class( "TipoPulsante", nuovoIndirizzo, testoPulsante ) ;

	return pulsante ;

}


/* Funzione di redirezione alla pagina della ricerca selezionata nell'opportuno menu a tendina */

function redirectSearchPage( select_Box,ricercaCorrente ) {

	var selected_Value = select_Box.options[ select_Box.selectedIndex ].value ;

	var nuovaPagina = 'pagina=' + (selected_Value - 1) ;
	var nuovoIndirizzo = ricercaCorrente.replace( /pagina=\d/, nuovaPagina ) ;

	window.location = nuovoIndirizzo ;

}


/* Creazione del menu a tendina di selezione delle possibili pagine nella ricerca */


function selectPages( totaleTrovati, paginaCorrente, ricercaCorrente ) {

	var select_Box = ElementSelect("SceltaPagina") ;
	select_Box.onchange = function() {  redirectSearchPage(this,ricercaCorrente) }

	for ( var opzionePagina = 1 ; opzionePagina <= totaleTrovati/10 ; opzionePagina++ ) {
		  var option = ElementOption(opzionePagina) ;

		  if ( opzionePagina == (paginaCorrente + 1) )
		  	   option.selected = "selected" ;

		  select_Box.appendChild(option) ;

	}

	return select_Box ;

}




/* Funzione che inizializza la sezione che permette di navigare tra le varie pagine della ricerca attuale */

 function inizializzaCambioPagine( paginaCorrente, totaleTrovati ) {

 	var ricercaCorrente = window.location.pathname + window.location.search ;
 	var totaleTrovati = Math.ceil( totaleTrovati / 10 )*10 ;        /* Arrotondamento del totale alla decina immediatamente successiva */

 	var contenitorePulsanti = ElementDiv_Text("ContenitorePulsanti",'') ;
 	var zonaPulsanti = ElementDiv_Text("ZonaPulsanti",'') ;

 	var zonaPulsanti_Children = new Array() ;
 	var index = 0 ;


 	/* Pulsante pagina precedente */

 	if ( paginaCorrente != 0 ) {
	 	zonaPulsanti_Children[index] = ElementDivClass("PulsantePagina",'') ;
	 	zonaPulsanti_Children[index].id = "PulsantePrecedente" ;
	 	zonaPulsanti_Children[index].appendChild( pulsante_SuccessivaPrecedente("precedente", paginaCorrente, ricercaCorrente ) ) ;
	 	index++ ;
	}


 	/* Pulsante scelta pagina */

 	zonaPulsanti_Children[index] = selectPages(totaleTrovati, paginaCorrente, ricercaCorrente) ;
 	index++ ;


 	/* Pulsante pagina successiva */

 	if ( paginaCorrente != ( totaleTrovati/10 ) - 1 ) {
	 	zonaPulsanti_Children[index] = ElementDivClass("PulsantePagina",'') ;
	 	zonaPulsanti_Children[index].id = "PulsanteSuccessiva" ;
	 	zonaPulsanti_Children[index].appendChild( pulsante_SuccessivaPrecedente("successivo", paginaCorrente, ricercaCorrente ) ) ;
	}


 	Append( zonaPulsanti, zonaPulsanti_Children ) ;

 	contenitorePulsanti.appendChild(zonaPulsanti) ;
 	document.getElementById("ContenitoreRicerca").appendChild(contenitorePulsanti) ;

 }