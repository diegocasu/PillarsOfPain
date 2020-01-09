
function ajax_responseComment(elementForm,success) {

	if ( success == true ) 
		elementForm.childNodes[7].childNodes[0].nodeValue = "Grazie per aver commentato!" ;

	else 
		elementForm.childNodes[7].childNodes[0].nodeValue = "Errore nell'invio del commento. Riprova!" ;

}



function sendComment(elementForm,idRisposta) {

	var URL = window.location.search  ;
	var GET_Variables = GET_RecoverParameters(URL) ;

	var idOggetto  	  = GET_RecoverValue( GET_Variables, "id" ) ;
	var username	  = elementForm.childNodes[2].value ;
	var user_Email    = elementForm.childNodes[4].value ;
	var testoCommento = elementForm.childNodes[0].value ;

	var ajax_SendComment = function(success) { return ajax_responseComment(elementForm,success) } ;

	var postString = "comment=" + testoCommento + "&idOggetto=" + idOggetto + "&username=" + username 
					 + "&email=" + user_Email + "&idRisposta=" + idRisposta ; 

	ajaxCall( "POST", "./Commenti/InvioCommento.php", postString, ajax_SendComment ) ;

}