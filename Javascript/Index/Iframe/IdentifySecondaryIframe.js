
/* Costruttori degli oggetti che mantengono gli identificatori dei singoli Iframe secondari */

function IframeInterviste() {

	this.ImagePath 		 = "./Iframe/IframeInterviste/"   ;
	this.Effect    		 = "EffettoInterviste" 			  ;
	this.EffectContainer = "ContenitoreEffettoInterviste" ;
	this.CaptionNode 	 = "IframeCaptionInt" 		      ;
	this.LinkNode   	 = "indirizzaDescrInt"  		  ;
	this.ID 			 = "firstMiniIframe"  			  ;
	this.Increment 	     = 0 			   				  ;

}


function IframeArticoli() {

	this.ImagePath 		 = "./Iframe/IframeArticoli/"   ;
	this.Effect    		 = "EffettoArticoli" 			;
	this.EffectContainer = "ContenitoreEffettoArticoli" ;
	this.CaptionNode 	 = "IframeCaptionArt" 		    ;
	this.LinkNode   	 = "indirizzaDescrArt"  		;
	this.ID 			 = "secondMiniIframe"  			;
	this.Increment 	     = 3 			   				;

}


function IframeLiveReport() {

	this.ImagePath 		 = "./Iframe/IframeLiveReport/" ;
	this.Effect    		 = "EffettoLive" 				;
	this.EffectContainer = "ContenitoreEffettoLive" 	;
	this.CaptionNode 	 = "IframeCaptionLive" 		    ;
	this.LinkNode   	 = "indirizzaDescrLive"  		;
	this.ID 			 = "thirdMiniIframe"  			;
	this.Increment 	     = 6 			   				;

}



/* Recupero informazioni su Iframe secondario corrente */


function getIframe_Details(iframeLabel) {

	switch (iframeLabel) {

		case "Articoli" :
			var currentIframe = new IframeArticoli()   ;
			break ; 
		case "Interviste" :
			var currentIframe = new IframeInterviste() ;
			break ;
		case "Live" :
			var currentIframe = new IframeLiveReport() ;
			break ;
		default :
			var currentIframe = null ;

	}

	return currentIframe ;

}



function getCurrent_Selector(iframeLabel) {

	switch (iframeLabel) {

		case "Articoli" :
			var selettoreCorrente = selettoreArticoli   ;
			break ; 
		case "Interviste" :
			var selettoreCorrente = selettoreInterviste ;
			break ;
		case "Live" :
			var selettoreCorrente = selettoreLive 		;
			break ;
		default :
			var selettoreCorrente = null 				;

	}

	return selettoreCorrente ;

}


/* Modifica del selettore di Iframe corrente */

function modifyCurrentSelector(newIndex,iframeLabel) {

	switch (iframeLabel) {

		case "Articoli" :
			selettoreArticoli = newIndex   ;
			break ; 
		case "Interviste" :
			selettoreInterviste = newIndex ;
			break ;
		case "Live" :
			selettoreLive = newIndex 	   ;
			break ;

	}

}