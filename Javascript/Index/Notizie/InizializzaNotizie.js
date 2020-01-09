
/* Funzione che popola la sezione "ultime notizie" presente nella home del sito */

function inizializzaNotizie(Notizie) {

	if ( Notizie == null )
		 return ;

	var modelloNotizia 	 = "./PHP/ModelloNotizia.php" ;
	var indirizzoNotizie = "./Notizie/" ;

	for ( var i = 0 ; i < 20 ; i++ ) {

		var dataPubblicazione = creaDataPubblicazione( Notizie[i]['DataPubblicazione'], Notizie[i]['NumeroCommenti'] ) ;
		var immagineAnteprima = Notizie[i]['Cartella'] + '/' + Notizie[i]['Cover'] ;
		var linkNotizia  	  = modelloNotizia + "?id=" + Notizie[i]['IdNotizia']  ;

		document.getElementsByClassName("Pubblicazione")[i].childNodes[0].nodeValue = dataPubblicazione 				   ;
		document.getElementsByClassName("TestoNotizia")[i].childNodes[0].nodeValue  = Notizie[i]['Titolo'] 		   		   ;
		document.getElementsByClassName("TestoNotizia")[i].href 					= linkNotizia 						   ;
		document.getElementsByClassName("ImgNotizia")[i].src 						= indirizzoNotizie + immagineAnteprima ;
						
	}

}