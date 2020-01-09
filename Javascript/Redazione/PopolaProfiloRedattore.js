
function inizializzaProfilo(info) {

	if ( info == null )
		 return ;

	var path = "../ContattiRedazione/" ;
	

	if ( info['Ruolo'] == "Redattore" )
		document.title = "Redattore | Pillars of Pain" ;

	else if ( info['Ruolo'] == "Webmaster")
		document.title = "Webmaster | Pillars of Pain" ;

	else if ( info['Ruolo'] == "Capo Redattore" )
		document.title = "Capo Redattore | Pillars of Pain" ;



	document.getElementById("IMG").src = path + info['Immagine'] ;
	document.getElementById("IMG").alt = info['NomeRedattore'] ;

	document.getElementById("ruolo").childNodes[0].nodeValue = info['Ruolo'] ;

	document.getElementById("NomeRedattore").childNodes[0].nodeValue = info['NomeRedattore'] ;

	document.getElementsByClassName("CampoInfo")[0].childNodes[0].nodeValue = "Residenza: " + info['Residenza'] ;
	document.getElementsByClassName("CampoInfo")[1].childNodes[0].nodeValue = "Data di nascita: " + info['DataNascita'] ;
	document.getElementsByClassName("CampoInfo")[2].childNodes[0].nodeValue = "Email: " + info['Email'] ;

	document.getElementsByClassName("ListaG")[0].childNodes[0].nodeValue = info['GruppiPreferiti'] ;
	document.getElementsByClassName("ListaG")[1].childNodes[0].nodeValue = info['GeneriPreferiti'] ;
	document.getElementsByClassName("ListaG")[2].childNodes[0].nodeValue = info['Interessi'] ;	

}


/* Calcolo del contributo del recensore */


function inizializzaContributo(contributo_Redattore) {

	var contributo = contributo_Redattore['Count']     ;
	var label      = contributo_Redattore['Label']     ;
	var redattore  = contributo_Redattore['Redattore'] ;

	var ModelloArchivio = "./ModelloArchivio.php?pagina=0&tipoRicerca=" ;

	for ( var i = 0 ; i < contributo.length ; i++ ) {

		  document.getElementsByClassName("NomeContributo")[i].childNodes[0].nodeValue += contributo[i]['Totale'] ;

		  if ( parseInt(contributo[i]['Totale']) > 0 ) {

		 	   var href_Visualizza = ModelloArchivio + label[i].toLowerCase() + "&autore=" + redattore ;
		 	   var visualizzaArchivio = ElementAnchor_IDClass("Visualizza" + label[i], "VisualizzaPulsante", href_Visualizza, "VISUALIZZA") ;
		 	   document.getElementById("Contributo").appendChild(visualizzaArchivio) ;

		 }

	}

}