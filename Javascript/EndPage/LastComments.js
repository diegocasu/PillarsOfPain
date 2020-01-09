
/* Costruttori di oggetti che contengono le informazioni sugli identificatori da introdurre in base alla pagina */

function UltimiCommentiIndex() {

	this.Section    = "ContenitoreConclusivo" ;
	this.Container  = "Finale" 			 	  ;
	this.Immagine   = "Conclusivo"		 	  ;
	this.Recensioni = "UltimiRecensioni" 	  ;
	this.Notizie    = "UltimiNotizie"    	  ;
	this.Speciali   = "UltimiSpeciali"   	  ;

}


function UltimiCommentiRedazione() {

	this.Section    = "ContenitoreConclusivoRedazione" ;
	this.Container  = "ContattiFinale" 			       ;
	this.Immagine   = "ContattiConclusivo" 		       ;
	this.Recensioni = "CommentiUltimiRecensioni"       ;
	this.Notizie    = "CommentiUltimiNotizie"          ;
	this.Speciali   = "CommentiUltimiSpeciali"         ;

}




/* Funzione che inizializza i vari campi all'interno del contenitore commento */

function commentText(model,commentInfo) {

	var linkArticolo = model + commentInfo['Articolo'] ;
	var nomeArticolo = commentInfo['Titolo'] ;
	var nomeUtente   = commentInfo['NomeUtente'] ;
	var testo 		 = commentInfo['Testo'] ;


	var redirectLink = ElementSimpleAnchor(linkArticolo) ;

	var campoCommento = ElementDivClass("CampoUltimi",'') ;
	campoCommento_Children = new Array() ;

	campoCommento_Children[0] = ElementDivClass("NomeArticolo", nomeArticolo) ;
	campoCommento_Children[1] = ElementDivClass("UltimiNomeUtente", nomeUtente ) ;
	campoCommento_Children[2] = ElementDivClass("TestoUltimo", testo ) ;

	Append ( campoCommento, campoCommento_Children ) ;

	redirectLink.appendChild(campoCommento) ;

	return redirectLink ;

}



/* Costruttore di un singolo campo "ultimo commento" */

function users_LastComment(sectionTitle, h2_id, h2_value, model, lastComments) {

	var sectionLastComment = ElementDiv(sectionTitle) ;

	sectionLastComment_Children = new Array() ;

	sectionLastComment_Children[0] = ElementText("h2",h2_id,h2_value,"id") ;

	sectionLastComment_Children[1] = commentText( model, lastComments[0] ) ;
	sectionLastComment_Children[2] = commentText( model, lastComments[1] ) ;
	sectionLastComment_Children[3] = commentText( model, lastComments[2] ) ;

	Append( sectionLastComment, sectionLastComment_Children ) ;

	return sectionLastComment ;

}


/* Funzione di inizializzazione della sezione "Ultimi Commenti" */

function createLastComments(level,type,lastComments_List) {

	if ( level == 0 )
		 var pathDepth = "./"  ;

	else if ( level == 1 )
		 var pathDepth = "../" ;

	else 
		return ;


	if ( type == "index" )
		 var ultimiCommenti = new UltimiCommentiIndex() ;

	else if ( type == "redazione" )
		 var ultimiCommenti = new UltimiCommentiRedazione() ;

	else
		return ;


	if ( lastComments_List['Recensioni'] == null || lastComments_List['Notizie'] == null || lastComments_List['Speciali'] == null ) 
		 return ;


	var modelloRecensione = pathDepth + "PHP/ModelloRecensione.php" + "?id=" ;
	var modelloNotizia    = pathDepth + "PHP/ModelloNotizia.php"    + "?id=" ;  
	var modelloSpeciale   = pathDepth + "PHP/ModelloSpeciali.php"   + "?id=" ;

	
	var imgHeader = ElementImage( ultimiCommenti.Immagine, pathDepth + "Immagini/SfondoSezioni.jpg", "Conclusivo") ;
	var sectionContainer = ElementDiv( ultimiCommenti.Container ) ;

	var section_Children = new Array() ;

	section_Children[0]  = users_LastComment( "UltimiCommentiRecensioni", ultimiCommenti.Recensioni, "Ultimi Commenti Recensioni" , modelloRecensione, lastComments_List['Recensioni']) ;
	section_Children[1]  = users_LastComment( "UltimiCommentiNotizie"   , ultimiCommenti.Notizie,	 "Ultimi Commenti Notizie"    , modelloNotizia   , lastComments_List['Notizie'])    ;
	section_Children[2]  = users_LastComment( "UltimiCommentiSpeciali"  , ultimiCommenti.Speciali, 	 "Ultimi Commenti Speciali"   , modelloSpeciale  , lastComments_List['Speciali'])   ;

	Append( sectionContainer, section_Children ) ;


	document.getElementById( ultimiCommenti.Section ).appendChild( imgHeader ) ;
	document.getElementById( ultimiCommenti.Section ).appendChild( sectionContainer ) ;

}