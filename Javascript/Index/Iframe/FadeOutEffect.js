
/* Funzioni che fanno scattare l'effetto di FadeOut ad ogni cambio di immagine del singolo Iframe */

function startEffect(id) {

	document.getElementById(id).style.backgroundColor = "rgba(0,0,0,0)"   ;

}


function triggerFadeOut(id,father) {

	Remove(id) ;

	var effect = ElementDiv(id) ;
	effect.className = "FadeOut" ;
	
	document.getElementById(father).appendChild(effect) ;
	setTimeout( function() { startEffect(id) } , 5 ) ;

}