
/* Funzione di ordinamento dei commenti ; l'inizializzazione dell'oggetto Date è compatibile con Firefox  */

function timestampCompare_Function(first,second) {

	var first_DB_Date  = first['DataPubblicazione'].split( /[- :]/ )  ;
	var second_DB_Date = second['DataPubblicazione'].split( /[- :]/ ) ;

	var first_Date  = new Date ( first_DB_Date[0], first_DB_Date[1], first_DB_Date[2], first_DB_Date[3], first_DB_Date[4], first_DB_Date[5] )       ;
	var second_Date = new Date ( second_DB_Date[0], second_DB_Date[1], second_DB_Date[2], second_DB_Date[3], second_DB_Date[4], second_DB_Date[5] ) ;

	return ( first_Date - second_Date ) ;

}


/* Funzioni di ricerca di risposte per ciascun commento normale */

function findReply( commentFather, usernameFather, replyList, commentReplies ) {

	var check_ReplyExistance = false ;

	for ( var i = 0 ; i < replyList.length ; i++ ) {

		  if ( replyList[i]['Risposta'] == commentFather ) {

		  		var objectReply = replyList[i] ;
		  		objectReply['UtenteRisposta'] = usernameFather ;
		  		commentReplies.push( objectReply ) ;

		  		replyList.splice(i, 1) ; /* Elimino la replica trovata dalla lista dei commenti di replica, in quanto ogni replica è legata ad un solo commento */
		  		i = i - 1 ; 			/* Aggiorno il contatore, in quanto array ha un elemento in meno */

		  		check_ReplyExistance = true ;

		  }

	}


	if ( check_ReplyExistance == true ) {

		 for ( var i = 0 ; i < commentReplies.length ; i++ )
		 	   findReply( commentReplies[i]['IdCommento'], commentReplies[i]['NomeUtente'], replyList, commentReplies ) ;

	}
 
}


function replies_ToEachComment(Not_Reply,Reply) {

	for( var i = 0 ; i < Not_Reply.length ; i++ ) {

		var commentReplies = new Array() ;
		 
		findReply( Not_Reply[i]['IdCommento'], Not_Reply[i]['NomeUtente'], Reply, commentReplies ) ;
		commentReplies.sort(timestampCompare_Function)
	
		Not_Reply[i]['ListaRisposte'] = commentReplies ;

	}


}






function organizeComments(datiCommenti) {

	var Not_Reply = datiCommenti['Level1'] ;  /* Commenti normali, non di replica */
	var Reply     = datiCommenti['Level2'] ;  /* Commenti di replica */


	if ( Not_Reply == null ) {

		noComment_Notice() ; /* Inizializza avviso nessun commento ; si trova in NoComment_Notice.js  */
		return ;

	}

	else if ( Not_Reply != null && Reply == null ) {

		 popolaCommenti( Not_Reply ) ;   /* Inizializza commenti elementari ( non è presente nessuna risposta ) ; si trova su PopolaCommmenti.js */
		 return ;

	}


	replies_ToEachComment(Not_Reply,Reply) ;  /* Assegna a ciascun commento le risposte ricevute, nel caso siano presenti */
	popolaCommenti_Risposte( Not_Reply ) ;    /* Si trova in PopolaCommenti.js */


} 