
function popolaNotizia(info) {

	if ( info == null )
		 return ;

	var indirizzoModelloProfilo = "./ModelloProfilo.php" ;

	document.title = "Notizia - " + info['Titolo'] + " | Pillars of Pain" ;

	document.getElementById("TitoloNotizia").childNodes[0].nodeValue = info['Titolo'] ;

	generaTesto( info['Testo'] ,"TestoNotizia") ; /* Si trova su DatabaseTextFormatter.js */

	document.getElementById("LinkAutoreNotizia").childNodes[0].nodeValue = info['NomeRedattore'] ;
	document.getElementById("LinkAutoreNotizia").href = indirizzoModelloProfilo + "?id=" + info['IdRedattore'] ;

	var dataPubblicazione = creaDataPubblicazione( info['DataPubblicazione'], info['NumeroCommenti'] )  ; 
	document.getElementById("Pubblicazione_NumeroCommenti").childNodes[0].nodeValue = dataPubblicazione ;

}