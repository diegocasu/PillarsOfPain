
var selettoreArticoli   = -1 ;
var selettoreInterviste = -1 ;
var selettoreLive 	    = -1 ;

var IframeSecondari = new Array() ;


function redirectSecondary(newIndex,iframeLabel) {

	if ( IframeSecondari == null )
		 return ;
		

	var indirizzoModelli = "./PHP/" ;

	var currentIframe = getIframe_Details(iframeLabel) ;  /* Si trova su IdentifySecondaryIframe.js */

	if ( currentIframe == null )
		 return ;

	var arrayIndex =  newIndex + currentIframe.Increment ;
	var linkOggetto = indirizzoModelli + "ModelloSpeciali.php" + "?id=" + IframeSecondari[arrayIndex]['IdFile'] ;


	triggerFadeOut( currentIframe.Effect, currentIframe.EffectContainer ) ;

	document.getElementById(currentIframe.CaptionNode).childNodes[0].nodeValue = IframeSecondari[arrayIndex]['Titolo']   						   ;
	document.getElementById(currentIframe.ID).src 							   = currentIframe.ImagePath + IframeSecondari[arrayIndex]['NomeFile'] ; 
	document.getElementById(currentIframe.LinkNode).href 					   = linkOggetto 												 	   ;
	
	modifyCurrentSelector(newIndex,iframeLabel) ;  /* Si trova su IdentifySecondaryIframe.js */ 
	changeButtonColorSecondary( newIndex, currentIframe.Increment ) ; 

}


/* Funzione che modifica il colore del selettore in base all' articolo */

function changeButtonColorSecondary(index,index_Increment) {

	var microCircleIndex = index + index_Increment ;

	for ( var i = index_Increment ; i < index_Increment + 3 ; i++ ) 
		  document.getElementsByClassName("Microcircle")[i].style.backgroundColor = '#B5B5B5' ;

	document.getElementsByClassName("Microcircle")[microCircleIndex].style.backgroundColor = '#551A8B' ;

}


/* Funzione che si occupa di innescare il cambio immagine */


function automaticSecondaryIframe(iframeLabel) {

	var selettoreCorrente = getCurrent_Selector(iframeLabel) ; /* Si trova su IdentifySecondaryIframe.js */

	if ( selettoreCorrente == null )
		 return ;


	if ( selettoreCorrente == 2 )
		 selettoreCorrente = -1 ;

	var nuovoIndice = Number(selettoreCorrente + 1) ;
	redirectSecondary(nuovoIndice,iframeLabel) 	;

}