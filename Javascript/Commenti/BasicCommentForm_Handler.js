
/* Funzione che mostra form di commento "normale" ( ovvero un commento non risposta) nella sezione precedente all'avvertenza commenti */

function ShowCommentSection() {

	var commentSectionChildren = new Array() ;

	commentSectionChildren[0] = ElementImage_Class( "Modulo_DefaultUserImage", "../Immagini/user.png", "DefaultUser" ) ;
	commentSectionChildren[1] = sendCommentForm(null) ;  /* Si trova su CommentElements.js */

	Remove("CommentsLogo") ;
	Remove("OpenComments") ;

	Append( document.getElementById("Modulo_InvioCommento"), commentSectionChildren ) ;
	document.getElementById("Modulo_InvioCommento").style.height = "275px" ;

}