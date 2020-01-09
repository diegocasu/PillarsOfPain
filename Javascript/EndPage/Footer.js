
function createFooter(level,father) {

	if ( level == 0 )
		 var pathDepth = "./"  ;

	if ( level == 1 )
		 var pathDepth = "../" ;


	var footerContainer = ElementDiv(father) ;

	var footerElements = new Array() ;

	footerElements[0] = ElementImage( "FinalFooter", pathDepth + "Immagini/SfondoSezioni.jpg", "Ultime News-Recensioni" ) ;
	footerElements[1] = ElementText ( "p","Copyright", "\u24B8 2016 Pillars of Pain" ,"id" ) ;
	footerElements[2] = ElementAnchor_ID("InformativaPrivacyLink", pathDepth + "Manuale/Informativa.html" ,"Informativa Privacy" ) ;

	footerElements[3] = ElementImage_IdClass( "Html5"	  , "CorrectButtons", pathDepth + "Immagini/Bottoni/HTML5.png"     , "HTML5"      ) ;
	footerElements[4] = ElementImage_IdClass( "CSS"		  , "CorrectButtons", pathDepth + "Immagini/Bottoni/CSS3.0.png"    , "CSS 3.0"    ) ;
	footerElements[5] = ElementImage_IdClass( "JavaScript", "CorrectButtons", pathDepth + "Immagini/Bottoni/JavaScript.png", "JavaScript" ) ; 
	footerElements[6] = ElementImage_IdClass( "Chrome"    , "CorrectButtons", pathDepth + "Immagini/Bottoni/Chrome.png"    , "Chrome" 	  ) ;
	footerElements[7] = ElementImage_IdClass( "Opera"     , "CorrectButtons", pathDepth + "Immagini/Bottoni/Opera.png"     , "Opera"      ) ;
	footerElements[8] = ElementImage_IdClass( "Firefox"   , "CorrectButtons", pathDepth + "Immagini/Bottoni/Firefox.png"   , "Firefox"    ) ;
	footerElements[9] = ElementImage_IdClass( "Unipi"     , "CorrectButtons", pathDepth + "Immagini/Bottoni/Unipi.png  "   , "Unipi"      ) ;

	Append( footerContainer, footerElements ) ;

	document.getElementsByTagName("footer")[0].appendChild(footerContainer) ;

}