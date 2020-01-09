
/* Funzione di aggiornamento della pagina, utile per determinare se la votazione è avvenuta con successo */

function ajax_responseVote(newItem,success) {

	if ( success == true ) {

		window.localStorage.setItem("votiRecensione", newItem ) ;
		document.getElementById("StopVote").childNodes[0].nodeValue = "Grazie per aver votato!" ;

	}

	else 
		document.getElementById("StopVote").childNodes[0].nodeValue = "Errore nell'invio del voto. Riprova!" ;

}


/* Invio del voto utente al database */


function sendVote(newItem,idRecensione) {

	var valoreVoto = document.getElementById("VotoUtente").value ;
	var postString = "votoUtente=" + valoreVoto + '&' + "idRecensione=" + idRecensione ;

	var ajax_function = function(success) { return ajax_responseVote(newItem,success) ; } ;

	ajaxCall( "POST", "./Recensione/VotoUtente.php", postString, ajax_function ) ;

}



/* Funzione che controlla se l'utente ha già votato l'album selezionato. Il controllo avviene tramite scansione della localStorage */


function checkVote() {

	var URL = window.location.search  ;

	var GET_Variables = GET_RecoverParameters(URL) ;				/* Si trova su GET_Parameters.js */
	var idRecensione  = GET_RecoverValue( GET_Variables, "id" ) ;   /* Si trova su GET_Parameters.js */

	if ( idRecensione == null )
		 return ;


	if ( !window.localStorage) {
		
		 document.getElementById("StopVote").childNodes[0].nodeValue = "Il tuo browser non supporta Local Storage. Aggiornalo!" ;
		 return ;
	}


	if( window.localStorage.getItem("votiRecensione") == null ) 
		sendVote( idRecensione, idRecensione ) ;

	else {

		var oldLocalStorageItem = window.localStorage.getItem("votiRecensione") ;
		var voted_Albums = oldLocalStorageItem.split(';') ;
 		var check_IsVoted = voted_Albums.indexOf( idRecensione ) ;

		if ( check_IsVoted != -1 ) {
			document.getElementById("StopVote").childNodes[0].nodeValue = "Hai già votato per questo album!" ;
			return ;
		}

		var newLocalStorageItem = oldLocalStorageItem + ';' + idRecensione ;
		sendVote( newLocalStorageItem, idRecensione ) ;
	}

}