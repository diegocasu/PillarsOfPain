
/* Costruttore di una recensione presente in home page */

function AnteprimaRecensione(contatore) {

	var recensione = ElementLI() ;

	var contenitoreRecensione = ElementDivClass("Recensione",'') ;
	var elementiRecensione = new Array() ;

	elementiRecensione[0] = ElementImage_Class("ImgRece","./Immagini/Trasparente.png","Rece") ;


	elementiRecensione[1] = ElementDivClass("TitoloRece",'') ;

	var linkRecensione = ElementAnchor_Class("ReceRedirect",'','') ;
	var descrizioneRecensione = ElementParagraph("DescrizioneRece",'') ;
	linkRecensione.appendChild(descrizioneRecensione) ;
	elementiRecensione[1].appendChild(linkRecensione) ;


	elementiRecensione[2] = ElementParagraph("PubblicazioneRece",'') ;


	elementiRecensione[3] = ElementDivClass("InformazioniOnHover",'') ;
	elementiRecensione[3].onmouseover = function() { onOverRecensione(contatore) ; } ;
	elementiRecensione[3].onmouseout  = function() { onOutRecensione(contatore)  ; } ;

	var genere = ElementParagraph("Genere",'') ; 
	var voto   = ElementParagraph("Voto",'')   ;

	elementiRecensione[3].appendChild(genere) ;
	elementiRecensione[3].appendChild(voto)   ;
	

	if ( ( contatore >= 10 && contatore <= 14 ) || contatore >= 19 )
		elementiRecensione[4] = ElementDivClass("SeparatoreRecensioni",'') ;

	Append( contenitoreRecensione, elementiRecensione ) ;

	recensione.appendChild(contenitoreRecensione) ;

	return recensione ;

}
 

/* Costruttore del banner che determina a quale sezione appartiene una recensione ( Ultime Uscite, Rispolverati, Extra Metal o Demo ) */


function costruttoreSezione(tipo) {

	var sezione = ElementLI() ;
	sezione.className = "cambiaElementoLista" ;

	var Children = new Array() ;

	if ( tipo == "Rispolverati" ) {
		Children[0] = ElementImage("SezioneRispolverati","./Immagini/SfondoSezioni.jpg","Rispolverati") ;
		Children[1] = ElementAnchor_IDClass("Rispolverati","SezioneStile", "./PHP/ModelloArchivio.php?tipoRicerca=rispolverati&pagina=0", "RISPOLVERATI") ;
	}

	else if ( tipo == "ExtraMetal" ) {
		Children[0] = ElementImage("SezioneExtraMetal","./Immagini/SfondoSezioni.jpg","Extra Metal") ;
		Children[1] = ElementAnchor_IDClass("ExtraMetal","SezioneStile", "./PHP/ModelloArchivio.php?tipoRicerca=extrametal&pagina=0", "EXTRA METAL") ;
	}

	else if ( tipo == "Demo" ) {
		Children[0] = ElementImage("SezioneDemo","./Immagini/SfondoSezioni.jpg","Demo") ;
		Children[1] = ElementAnchor_IDClass("Demo","SezioneStile", "./PHP/ModelloArchivio.php?tipoRicerca=demo&pagina=0", "DEMO") ;
	}

	Append(sezione,Children) ;

	return sezione ;

}


/* Funzione che crea la lista delle recensioni presenti in home page ; non inizializza i valori delle stesse e viene chiamata prima 
   della inizializzaRecensioni() */

function creaListaRecensioni () {

	var ListaRecensioni = ElementUL() ;
	ListaRecensioni.id = "Reviews" ;

	for ( var contatore = 0 ; contatore < 22 ; contatore++ ) {

		var recensione = AnteprimaRecensione(contatore) ;
		ListaRecensioni.appendChild(recensione) ;

		if ( contatore == 9 ) {
			var nuovaSezione = costruttoreSezione("Rispolverati") ;
			ListaRecensioni.appendChild(nuovaSezione) ;
		}

		if ( contatore == 14 ) {
			var nuovaSezione = costruttoreSezione("ExtraMetal") ;
			ListaRecensioni.appendChild(nuovaSezione) ;
		}

		if ( contatore == 18 ) {
			nuovaSezione = costruttoreSezione("Demo") ;
			ListaRecensioni.appendChild(nuovaSezione) ;
		}

	}

	document.getElementById("SezioneNotizieRecensioni").appendChild(ListaRecensioni) ;

}