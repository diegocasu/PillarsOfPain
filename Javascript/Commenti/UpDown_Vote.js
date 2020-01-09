
/* Funzione che aggiorna il valore del voto commento a schermo, permettendo all'utente di notare se il voto è andato a buon fine */

function ajax_ResponseCommentVote(newLocal_Item,comment_ID,increment,success) {

	if ( success == true ) {

		 window.localStorage.setItem("votiCommento", newLocal_Item ) ;
		 var listaCommenti = document.getElementsByClassName("Comment") ;
		 
		 for ( var i = 0 ; i < listaCommenti.length ; i++ ) {

		  	   if ( listaCommenti[i].id == comment_ID ) {

		  	   		var previousVote = parseInt( listaCommenti[i].childNodes[2].childNodes[2].childNodes[0].nodeValue ) ;
		 		 	listaCommenti[i].childNodes[2].childNodes[2].childNodes[0].nodeValue = previousVote + increment     ;
		 	   
		 	   }

		 }

	}

}


function upDown_Vote(comment_ID,newLocal_Item,increment) {
	
	var postString = "id=" + comment_ID + "&increment=" + increment ;

	var ajax_VoteComment = function(success) { return ajax_ResponseCommentVote(newLocal_Item,comment_ID,increment,success) ; } ;

	ajaxCall( "POST", "./Commenti/VotaCommento.php", postString, ajax_VoteComment ) ;

}



/* Funzione che controlla se l'utente ha già votato il commento interessato. Il controllo avviene tramite localStorage */


function check_CommentVote(comment_ID,type) {

	if ( type == "up" )
		 var increment = 1  ;

	else if ( type == "down" )
		 var increment = -1 ;

	else
		return ;


	var safe_CommentID = parseInt(comment_ID) ;
	var safe_CommentID = safe_CommentID.toString() ;


	if( !window.localStorage)
		return ;

	if( window.localStorage.getItem("votiCommento") == null )
		upDown_Vote( safe_CommentID, safe_CommentID, increment ) ;

	else {

		var oldLocalStorageItem = window.localStorage.getItem("votiCommento") ;
		var voted_Comments = oldLocalStorageItem.split(';') ;
 		var check_IsCommentVoted  = voted_Comments.indexOf( safe_CommentID ) ;

 		if ( check_IsCommentVoted != -1 ) 
			  return ;


		var newLocalStorageItem = oldLocalStorageItem + ';' + safe_CommentID ;
		upDown_Vote( safe_CommentID, newLocalStorageItem, increment ) ;

	}

}