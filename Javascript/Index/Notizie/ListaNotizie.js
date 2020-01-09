
/* Costruttore di un'anteprima notizia */

function Anteprima_Notizia(contatore) {

	var notizia = ElementLI() ;	

	var contenitoreNotizia = ElementDivClass("Notizia",'') ;
	var elementiNotizia = new Array() ;

	elementiNotizia[0] = ElementImage_Class("ImgNotizia","./Immagini/Trasparente.png","Notizia") ;


	elementiNotizia[1] = ElementDivClass("SintesiNotizia",'') ;

	var elementiSintesi = new Array() ;
	elementiSintesi[0] = ElementAnchor_Class("TestoNotizia",'','') ;
	elementiSintesi[1] = ElementParagraph("Pubblicazione",'') ; 
	Append( elementiNotizia[1], elementiSintesi ) ;


	if ( contatore >= 10 && contatore <= 14 )
		elementiNotizia[2] = ElementDivClass("SeparatoreNotizie2",'') ;
	else
		elementiNotizia[2] = ElementDivClass("SeparatoreNotizie1",'') ;


	Append( contenitoreNotizia, elementiNotizia) ;

	notizia.appendChild(contenitoreNotizia) ;

	return notizia ;

}


/* Funzione di creazione della lista notizie presente in home page; non inizializza il contenuto dei campi 
   e viene chiamata prima della inizializzaNotizie() */ 


function creaListaNotizie() {

	var ListaNotizie = ElementUL() ;
	ListaNotizie.id  = "News" ;

	for ( var contatore = 0 ; contatore < 20 ; contatore++ ) {

		var elementoLista = Anteprima_Notizia(contatore) ;
		ListaNotizie.appendChild(elementoLista) ;

	}

	var altreNotizie = ElementLI() ;
	var link_AltreNotizie = ElementAnchor_ID("AltreNotizie", "./PHP/ModelloArchivio.php?tipoRicerca=notizie&pagina=2", "« Altre Notizie") ;
	altreNotizie.appendChild(link_AltreNotizie) ;

	ListaNotizie.appendChild(altreNotizie) ;

	document.getElementById("SezioneNotizieRecensioni").appendChild(ListaNotizie) ;

}