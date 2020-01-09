
var selettorePrincipale = -1 ;
var IframePrincipale = new Array() ;


function checkObject_ModelPHP(type) {

	switch (type) {

		case "Notizia"	   :
			var modello = "ModelloNotizia.php"    ;
			break ;
			
		case "Recensione"  :
			var modello = "ModelloRecensione.php" ;
			break ;

		case "Intervista"  :
		case "Live Report" :
		case "Articolo"    :
			var modello = "ModelloSpeciali.php"   ;
			break ;
		
		default :
			return ;

	}

	return modello ;
 
}


function redirectMain(index) {

	if ( IframePrincipale == null )
		 return ;

	var indirizzoModelli  = "./PHP/" ;
	var indirizzoImmagini = "./Iframe/IframePrincipale/" ; 	/* Indirizzo della cartella che ospita le immagini */

	var modelloOggetto  = checkObject_ModelPHP( IframePrincipale[index]['Tipologia'] ) ;
	var linkOggetto     = indirizzoModelli + modelloOggetto + "?id=" + IframePrincipale[index]['IdFile'] ;


	triggerFadeOut( "EffettoIframePrincipale","ContenitoreframePrincipale" ) ;

	document.getElementById("TipologiaArticolo").childNodes[0].nodeValue = IframePrincipale[index]['Tipologia']   ;
	document.getElementById("IframeCaption").childNodes[0].nodeValue     = IframePrincipale[index]['Titolo']      ;
	document.getElementById("IframeDescription").childNodes[1].href      = linkOggetto  						  ;
	document.getElementById("IframeText").childNodes[0].nodeValue 	     = IframePrincipale[index]['Descrizione'] ;
	document.getElementById("MainIframe").src 						     = indirizzoImmagini + IframePrincipale[index]['NomeFile'] ; 		

	selettorePrincipale = index ;
	changeButtonColor(index) ;

}


/* Funzione che modifica il colore del selettore in base all' articolo */


function changeButtonColor(index) {

	for ( var i = 0 ; i < 4 ; i++ ) 
		document.getElementsByClassName("circle")[i].style.backgroundColor = '#B5B5B5' ;

	document.getElementsByClassName("circle")[index].style.backgroundColor = '#551A8B' ;

}


/* Funzione che si occupa di innescare il cambio immagine */

function automaticMainIframe() {

	if ( selettorePrincipale == 3 )
		 selettorePrincipale = -1 ;

	var nuovoIndice = Number(selettorePrincipale + 1) ;
	redirectMain(nuovoIndice) ;

}