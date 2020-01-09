
/**** Form di invio commento ****/

function sendCommentForm(idRisposta) {

	var sendComment_Form = ElementForm( "./InvioCommento.php", "POST" ) ;
	sendComment_Form.onsubmit = function() { sendComment(this,idRisposta) ; return false ; } ;

	var formElements = new Array() ;

	formElements[0] = ElementTextArea( "Modulo_TestoCommento", "Partecipa alla discussione...", "10000", true ) ;
	formElements[0].onfocus = function() { remove_Placeholder(this) ; } ;
	formElements[0].onkeyup = function() { autoresize(this) 		; } ;

	formElements[1] = ElementText( "p", "Modulo_Istruzioni", "Compila i campi sottostanti per pubblicare il tuo commento:" , "class" ) ;

	formElements[2] = ElementInput_SendComment( "Modulo_SendCommentField", "text" , true, "Username", " Username" ) ;
	formElements[2].maxLength = "30" ;
	formElements[2].onfocus = function() { remove_Placeholder(this) ; } ;

	formElements[3] = ElementDivClass( "Modulo_Obbligatorio", "* Campo Obbligatorio" ) ;

	formElements[4] = ElementInput_SendComment( "Modulo_SendCommentField", "email" , true, "Email", " Email(non verrà pubblicata)" ) ;
	formElements[4].onfocus = function() { remove_Placeholder(this) ; } ;

	formElements[5] = ElementDivClass( "Modulo_Obbligatorio", "* Campo Obbligatorio" ) ;

	formElements[6] = ElementInput_Submit_Class( "Modulo_Pubblica", "Pubblica commento" ) ;

	formElements[7] = ElementText( "p", "Modulo_StopComment", "" , "class" ) ;


	Append( sendComment_Form, formElements ) ;

	return sendComment_Form ; 

}




/* Creazione della parte finale del commento, contenente il voto, il link di risposta e la data di pubblicazione */


function commentFooter(datiCommento) {

	var endComment_Container = ElementDivClass("EndComment",'') ;
	var EndComment_Children = new Array() ;

	/* Inizializzazione sezione per il voto del commento */

	EndComment_Children[0] = ElementImage_Class("Upvote","../Immagini/Upvoted.png","Upvote") ;
	EndComment_Children[0].onclick = function() { check_CommentVote(datiCommento['IdCommento'],"up") } ;

	EndComment_Children[1] = ElementDivClass("VoteResult", datiCommento['Voto']) ;

	EndComment_Children[2] = ElementImage_Class("Downvote","../Immagini/Downvoted.png","Downvote") ;
	EndComment_Children[2].onclick = function() { check_CommentVote(datiCommento['IdCommento'],"down") } ;

	/* Inizializzazione link per rispondere al commento */

	EndComment_Children[3] = ElementAnchor_NoHref("Reply","Rispondi") ;	  
	EndComment_Children[3].onclick = function() { createReplyForm(datiCommento['IdCommento'],this) } ;	/* Si trova in ReplyForm_Handler.js */

	/* Inizializzazione della data di pubblicazione del commento */

	var dataPubblicazione = dataPubblicazioneCommenti(datiCommento['DataPubblicazione'])  ;   /* Si trova su DataPubblicazione.js */
	EndComment_Children[4] = ElementDivClass("PubblicazioneCommento", dataPubblicazione ) ;

	Append( endComment_Container, EndComment_Children ) ;
	return endComment_Container ;

}





/* Funzione di creazione di un commento elementare */

function createBasicComment(datiCommento) {

	var commentContainer = ElementDiv_Class_Id("CommentoUtente Comment", datiCommento['IdCommento']) ;
	var commentContainer_Children = new Array() ;


	commentContainer_Children[0] = ElementDivClass("InformazioniUtente",'') ;
	commentContainer_Children[0].appendChild( ElementDivClass("NomeUtente", datiCommento['NomeUtente']) ) ;

	commentContainer_Children[1] = ElementDivClass("TestoCommento", datiCommento['Testo']) ;

	commentContainer_Children[2] = commentFooter(datiCommento) ;

	Append( commentContainer, commentContainer_Children ) ;
	return commentContainer ;

}



/* Funzioni di creazione di un commento di risposta */

function reply_UserInfo(datiRisposta) {

	var infoUtente = new Array() ;

	infoUtente[0] = ElementDivClass("NomeUtente", datiRisposta['NomeUtente']) ;
	
	infoUtente[1] = ElementImage_Class("ImgReply","../Immagini/Reply.png","Reply") ;
	
	infoUtente[2] = ElementDivClass("OggettoReplica", datiRisposta['UtenteRisposta']) ;

	return infoUtente ;

}


function createReplyComment(datiRisposta) {

	var replyContainer = ElementDiv_Class_Id("CommentoRisposta Comment", datiRisposta['IdCommento']) ;
	var replyContainer_Children = new Array() ;

	replyContainer_Children[0] = ElementDivClass("InformazioniUtenteRisposta",'') ;
	var InformazioniUtente = reply_UserInfo(datiRisposta) ;
	Append( replyContainer_Children[0], InformazioniUtente ) ;

	replyContainer_Children[1] = ElementDivClass("TestoCommentoRisposta", datiRisposta['Testo']) ;

	replyContainer_Children[2] = commentFooter(datiRisposta) ;

	Append( replyContainer, replyContainer_Children ) ;
	return replyContainer ;

}