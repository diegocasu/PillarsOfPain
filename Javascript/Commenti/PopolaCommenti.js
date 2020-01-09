
/******** Sezione commenti elementari ********/

function popolaCommenti(DB_Comments) {

	var commentList = new Array() ;
	
	for ( var i = 0 ; i < DB_Comments.length ; i++ ) {

		  var comment = createBasicComment( DB_Comments[i] ) ;  /* Si trova in Comment_Elements.js */
		  commentList.push(comment)   ;
 
  	}

  	Append ( document.getElementById("SezioneCommenti"), commentList ) ;

}




/******** Sezione commenti di risposta *********/

function replyList_Handler(DB_Replies) {

	var repliesList = new Array() ;

	if ( DB_Replies.length == 0 )
		 return repliesList ;

	for ( var i = 0 ; i < DB_Replies.length ; i++ ) {

		  var reply = createReplyComment( DB_Replies[i] ) ;    /* Si trova in Comment_Elements.js */
		  repliesList.push( reply ) ;

	}

	return repliesList ;

}


function popolaCommenti_Risposte(DB_Comments) {

	var commentList = new Array() ;

	for ( var i = 0 ; i < DB_Comments.length ; i++ ) {

		  var comment = createBasicComment( DB_Comments[i] ) ;  /* Si trova in Comment_Elements.js */
		  commentList.push(comment)   ;

		  var replies = replyList_Handler( DB_Comments[i]['ListaRisposte'] ) ; 

		  if ( replies.length > 0 )
		  	   commentList = commentList.concat(replies) ;
 
  	}

  	Append( document.getElementById("SezioneCommenti"), commentList ) ;

}