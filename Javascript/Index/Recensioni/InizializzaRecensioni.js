
var Dati_Recensioni = new Array() ;  /* Necessaria per le funzioni onOverRecensione e onOutRecensione */


/*  Funzione che inizializza le recensioni in home page */

function inizializzaRecensioni(Recensioni) {

	var modelloRecensione = "./PHP/ModelloRecensione.php" ;

	var indirizzoUltimeUscite = "./Recensioni/UltimeUscite/" ;
	var indirizzoRispolverati = "./Recensioni/Rispolverati/" ;
	var indirizzoExtraMetal   = "./Recensioni/ExtraMetal/"   ;
	var indirizzoDemo 		  = "./Recensioni/Demo/" 		 ;

	Dati_Recensioni = Recensioni ; /* Variabile globale utile per determinare Genere e Voto di un album nelle funzioni sottostanti */

	if ( Dati_Recensioni == null ) 
		 return ;


	for ( var i = 0 ; i < 22 ; i++ ) {

		if ( i >= 0 && i < 10 )
			var indirizzo = indirizzoUltimeUscite ;

		if ( i >= 10 && i < 15 )
			var indirizzo = indirizzoRispolverati ;

		if ( i >= 15 && i < 19 )
			var indirizzo = indirizzoExtraMetal   ;

		if ( i >= 19 && i < 22 )
			var indirizzo = indirizzoDemo         ;

		var dataPubblicazione = creaDataPubblicazione( Recensioni[i]['DataPubblicazione'], Recensioni[i]['NumeroCommenti'] ) ;
		var immagineAnteprima = Recensioni[i]['Cartella'] + '/' + Recensioni[i]['Cover']   ;
		var linkRecensione    = modelloRecensione + "?id=" + Recensioni[i]['IdRecensione'] ;

		document.getElementsByClassName("PubblicazioneRece")[i].childNodes[0].nodeValue = dataPubblicazione    			;
		document.getElementsByClassName("DescrizioneRece")[i].childNodes[0].nodeValue   = Recensioni[i]['Titolo']	    ;
		document.getElementsByClassName("ReceRedirect")[i].href 						= linkRecensione			    ;
		document.getElementsByClassName("ImgRece")[i].src       						= indirizzo + immagineAnteprima ;

	}

} 



/* Funzioni che mostrano voto e genere dell'album recensito al passaggio del puntatore sulla cover */


function onOverRecensione(index) {

	if ( Dati_Recensioni == null )
		 return ;

	document.getElementsByClassName("Genere")[index].childNodes[0].nodeValue = Dati_Recensioni[index]['Genere'] ;
	document.getElementsByClassName("Voto")[index].childNodes[0].nodeValue   = Dati_Recensioni[index]['Voto']   ;

}


function onOutRecensione(index) {

	if ( Dati_Recensioni == null )
		 return ;

	document.getElementsByClassName("Genere")[index].childNodes[0].nodeValue = "" ;
	document.getElementsByClassName("Voto")[index].childNodes[0].nodeValue   = "" ;

}