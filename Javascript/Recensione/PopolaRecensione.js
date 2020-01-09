
/* Creazione della sezione contenente le immagini allegate alla recensione */

function creaImmaginiSecondarie(sequenza,indirizzo) {

	var divImmagini = ElementDiv("ImmaginiRecensione") ;
	var Children = new Array() ;

	if ( sequenza == '' ) 
		return ;

	var insiemeImmagini = sequenza.split(';') ;

	for ( var i = 0 ; i < insiemeImmagini.length ; i++ ) {
		var immagineSingola = insiemeImmagini[i].split('-') ;

		Children.push( ElementImage_Class("ImmagineRece", indirizzo + immagineSingola[0],"Img") ) ;
		Children.push( ElementText("h2","DescrizioneImg",immagineSingola[1],"class") ) ;

	}

	Append(divImmagini,Children) ;

	document.getElementsByTagName("aside")[0].appendChild(divImmagini) ;

}


/* Funzione di inizializzazione della recensione */

function popolaRecensione(info) {

	if ( info == null )
		 return ;
		

	var indirizzoModelloProfilo = "./ModelloProfilo.php" ;

	var path = "../Recensioni/" + info['Tipologia'] + '/' + info['Cartella'] + '/' ;
	var titolo = info['Titolo']  ;

	document.title = "Recensione " + titolo + " | Pillars of Pain" ;

	document.getElementById("Titolo").childNodes[0].nodeValue = titolo ;
	document.getElementById("AlbumCover").src = path + info['Cover'] ;
	document.getElementById("AnnoPubblicazione").childNodes[0].nodeValue = info['AnnoPubblicazione'] ;
	document.getElementById("Label").childNodes[0].nodeValue = info['Label'] ;
	document.getElementById("Genere").childNodes[0].nodeValue = info['Genere'] ;
	document.getElementById("Tracklist").childNodes[0].nodeValue = info['Tracklist'] ;
	document.getElementById("Lineup").childNodes[0].nodeValue = info['Formazione'] ;

	document.getElementsByClassName("Voto")[0].childNodes[0].nodeValue = info['Voto'] ;

	document.getElementById("LinkAutore").childNodes[0].nodeValue = info['NomeRedattore'] ;
	document.getElementById("LinkAutore").href = indirizzoModelloProfilo + "?id=" + info['IdRedattore'] ;

	creaImmaginiSecondarie(info['Immagini'],path) ;

	generaTesto( info['Testo'], "TestoRece" ) ;   /* Si trova su DatabaseTextFormatter.js */

	userVotes_Analysis( info['VotiUtenti'] )  ;   /* Si trova su /VotiUtenti/DataBaseVotes_Analysis.js */
	document.getElementsByClassName("Voto")[1].childNodes[0].nodeValue = Media ;

	var dataPubblicazione = creaDataPubblicazione( info['DataPubblicazione'], info['NumeroCommenti'] )  ; 
	document.getElementById("Pubblicazione_NumeroCommenti").childNodes[0].nodeValue = dataPubblicazione ;

	/***** Variabili globali che saranno utilizzate nella finestra di votazione utente *****/

	nomeBand  = info['NomeBand']  ; 
	nomeAlbum = info['NomeAlbum'] ;
	genere 	  = info['Genere'] 	  ;
	label 	  = info['Label']	  ;

}