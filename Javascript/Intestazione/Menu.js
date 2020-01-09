
/* Creazione form di ricerca nell'archivio */

function FormRicerca(pathDepth) {

	var form = ElementForm("ModelloArchivio.php","GET") ;
	form.id = "SearchBox" ; 
	form.onsubmit = function() { total_Search(pathDepth) ; return false ; } ; 

	form_Children = new Array() ;

	form_Children[0] = ElementInput("SearchBar","search",false,"SearchBar") ;
	form_Children[0].autocomplete = "off" ;
	form_Children[0].placeholder = "Cerca..." ;

	form_Children[1] = ElementInput("SearchButton","submit",false,"SearchButton") ;
	form_Children[1].value = "" ;

	Append ( form, form_Children ) ;

	return form ;

}

/* Funzione che reindirizza la ricerca in tutto l'archivio */

function total_Search(pathDepth) {

	var ModelloArchivio = pathDepth + "PHP/ModelloArchivio.php?tipoRicerca=all&pagina=0" ;
	var inputUtente = document.getElementById("SearchBar").value ;

	if ( inputUtente == '' )
		window.location = ModelloArchivio ; 
	else
		window.location = ModelloArchivio + "&inputUtente=" + inputUtente ;

}



/* Funzioni di gestione menu a tendina ( inizializzazione e distruzione delle sezioni a tendina ) */

function Over_Recensioni(pathDepth) {

	var reviews_Children = new Array() ;

	reviews_Children[0] = ElementImage_Class("Separatore_Recensioni", pathDepth + "Immagini/DivisoriTesto/DivisoreMenu.png","DivisoreMenu") ;

	reviews_Children[1] = ElementAnchor_Class("HoverLink_Recensioni", pathDepth + "PHP/ModelloArchivio.php?tipoRicerca=ultimeuscite&pagina=0","Ultime Uscite") ;
	reviews_Children[2] = ElementImage_Class("Separatore_Recensioni", pathDepth + "Immagini/DivisoriTesto/DivisoreMenu.png","DivisoreMenu") ;

	reviews_Children[3] = ElementAnchor_Class("HoverLink_Recensioni", pathDepth + "PHP/ModelloArchivio.php?tipoRicerca=rispolverati&pagina=0", "Rispolverati") ;
	reviews_Children[4] = ElementImage_Class("Separatore_Recensioni", pathDepth + "Immagini/DivisoriTesto/DivisoreMenu.png","DivisoreMenu") ;

	reviews_Children[5] = ElementAnchor_Class("HoverLink_Recensioni", pathDepth + "PHP/ModelloArchivio.php?tipoRicerca=extrametal&pagina=0", "Extra Metal") ;
	reviews_Children[6] = ElementImage_Class("Separatore_Recensioni", pathDepth + "Immagini/DivisoriTesto/DivisoreMenu.png","DivisoreMenu") ;

	reviews_Children[7] = ElementAnchor_Class("HoverLink_Recensioni", pathDepth + "PHP/ModelloArchivio.php?tipoRicerca=demo&pagina=0", "Demo") ;
	reviews_Children[8] = ElementImage_Class("Separatore_Recensioni", pathDepth + "Immagini/DivisoriTesto/DivisoreMenu.png","DivisoreMenu") ;
 
	Append( document.getElementById("Menu_Recensioni"), reviews_Children ) ;

}


function Over_Speciali(pathDepth) {

	var speciali_Children = new Array() ;

	speciali_Children[0] = ElementImage_Class("Separatore_Speciali", pathDepth + "Immagini/DivisoriTesto/DivisoreMenu.png","DivisoreMenu") ;

	speciali_Children[1] = ElementAnchor_Class("HoverLink_Speciali", pathDepth + "PHP/ModelloArchivio.php?tipoRicerca=articoli&pagina=0", "Articoli") ;
	speciali_Children[2] = ElementImage_Class("Separatore_Speciali", pathDepth + "Immagini/DivisoriTesto/DivisoreMenu.png","DivisoreMenu") ;

	speciali_Children[3] = ElementAnchor_Class("HoverLink_Speciali", pathDepth + "PHP/ModelloArchivio.php?tipoRicerca=interviste&pagina=0", "Interviste") ;
	speciali_Children[4] = ElementImage_Class("Separatore_Speciali", pathDepth + "Immagini/DivisoriTesto/DivisoreMenu.png","DivisoreMenu") ;

	speciali_Children[5] = ElementAnchor_Class("HoverLink_Speciali", pathDepth + "PHP/ModelloArchivio.php?tipoRicerca=livereport&pagina=0", "Live Report") ;
	speciali_Children[6] = ElementImage_Class("Separatore_Speciali", pathDepth + "Immagini/DivisoriTesto/DivisoreMenu.png","DivisoreMenu") ;
 
	Append( document.getElementById("Menu_Speciali"), speciali_Children ) ;

}


function Out_MenuSection(tipo) {

	var length_Link = document.getElementsByClassName( "HoverLink_" + tipo ).length ;
	var length_Separatore = document.getElementsByClassName( "Separatore_" + tipo ).length ;

	for ( var i = 0 ; i < length_Link ; i++ ) {
		var remove = document.getElementsByClassName( "HoverLink_" + tipo )[0] ;
		remove.parentNode.removeChild(remove) ;
	}

	for ( var i = 0 ; i < length_Separatore ; i++ ) {
		var remove = document.getElementsByClassName( "Separatore_" + tipo )[0] ;
		remove.parentNode.removeChild(remove) ;
	}

}


/* Funzione di costruzione delle varie sezioni del menu */

function MenuElements(pathDepth) {

	var Elements = new Array() ;

	Elements[0] = ElementImage( "SfondoMenu", pathDepth + "Immagini/SfondoSezioni.jpg", "Menu" ) ;
	
	Elements[1] = ElementDiv_Class_Id( "Menu_Sezione", "Menu_Notizie" ) ;
	Elements[1].appendChild( ElementAnchor_IDClass( "LinkNotizie", "LinkPrincipale", pathDepth + "PHP/ModelloArchivio.php?tipoRicerca=notizie&pagina=0" , "Notizie") ) ;


	Elements[2] = ElementDiv_Class_Id( "Menu_Sezione", "Menu_Recensioni" ) ;
	Elements[2].onmouseenter = function() { Over_Recensioni(pathDepth) ; } ;
	Elements[2].onmouseleave = function() { Out_MenuSection( 'Recensioni' ) ; 	 } ;

	var anchor_Recensioni = ElementAnchor_NoHref( "LinkPrincipale" , "Recensioni »" ) ;
	anchor_Recensioni.id = "LinkRecensioni" ;

	Elements[2].appendChild( anchor_Recensioni ) ;



	Elements[3] = ElementDiv_Class_Id( "Menu_Sezione", "Menu_Speciali" ) ;
	Elements[3].onmouseenter = function() { Over_Speciali(pathDepth) ; } ;
	Elements[3].onmouseleave = function() { Out_MenuSection( 'Speciali' ) ;   } ;

	var anchor_Speciali = ElementAnchor_NoHref( "LinkPrincipale" , "Speciali »" ) ;
	anchor_Speciali.id = "LinkSpeciali" ;

	Elements[3].appendChild( anchor_Speciali ) ;



	Elements[4] = ElementDiv_Class_Id( "Menu_Sezione", "Menu_Contatti" ) ;
	Elements[4].appendChild( ElementAnchor_IDClass( "LinkContatti", "LinkPrincipale", pathDepth + "PHP/ContattiRedazione.php" , "Contatti e Redazione" ) ) ;


	Elements[5] = ElementDiv_Class_Id( "Menu_Sezione", "Menu_Ricerca" ) ;
	var form = FormRicerca(pathDepth) ;
	Elements[5].appendChild( form ) ;

	return Elements ;

}



/* Funzione di inizializzazione */

function createMenu(livello) {
	
	var nav = ElementNav("menuOrizzontale") ;

	if ( livello == 0 ) 
		 var pathDepth = "./" ;

	if ( livello == 1 ) 
		 var pathDepth = "../" ;

	var nav_Children = MenuElements(pathDepth) ;

	Append( nav, nav_Children ) ;

	document.getElementById("Sfondo").appendChild(nav) ;
		
}