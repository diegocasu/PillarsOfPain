
function deleteReplyForm(idRisposta,replyLink) {

	/* Rimozione del form di risposta */


	var nodeComment = replyLink.parentNode.parentNode ;
	var replyForm_ToDelete = nodeComment.nextSibling ;

	nodeComment.parentNode.removeChild( replyForm_ToDelete ) ;

	/* Inizializzazione del nuovo link di risposta al commento */

	replyLink.childNodes[0].nodeValue = "Rispondi" ;
	replyLink.onclick = function() { createReplyForm(idRisposta,this) } ;

}



function createReplyForm(idRisposta,replyLink) {

	var formContainer = ElementDivClass("Modulo_RispostaCommento",'') ;
	var defaultImage  = ElementImage_Class( "Modulo_DefaultUserImage", "../Immagini/user.png", "DefaultUser" ) ;
	var replyForm     = sendCommentForm(idRisposta) ;   	/* Si trova in Comment_Elements.js */

	formContainer.appendChild(defaultImage) ;
	formContainer.appendChild(replyForm)    ;
 

	/* Inserimento del form di risposta immediatamente dopo il commento interessato */

	var nodeComment = replyLink.parentNode.parentNode ;
	nodeComment.parentNode.insertBefore( formContainer, nodeComment.nextSibling ) ;


	/* Inizializzazione funzione di rimozione del form di risposta */

	replyLink.childNodes[0].nodeValue = "Annulla" ;
	replyLink.onclick = function()  { deleteReplyForm(idRisposta,this) } ;

}