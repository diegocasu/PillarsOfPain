
/* Sezione che mostra la media dei voti degli utenti e il numero dei voti inviati dagli stessi */


function averageVotes_Section() {

	var average_section = new Array() ;

	average_section[0] = ElementText("h2", "MediaAttuale", "Media Attuale: "  + Media, "id" ) ;
	average_section[1] = ElementText("h2", "NumeroVoti",   "Numero di voti: " + ListaVoti.length, "id" ) ;

	return average_section ;

}


/* Sezione di invio del proprio voto utente */


function submitVote_Section() {

	var form = new Array() ;

	form[0] = ElementText("h2","VotaAncheTu","Dai un voto anche tu a questo disco (da 30 a 100):","id") ;
	form[1] = ElementImage("RidottaAlbumCover",document.getElementById("AlbumCover").src,"Cover") ;
	
	form[2] = userVoteForm() ;

	form[3] = ElementText("h2","RidottoTitolo", nomeBand + " - " + nomeAlbum, "id") ;  /* Variabili globali presenti in PopolaRecensione.js */
	form[4] = ElementText("h2","RidottoGenere", genere, "id" ) ;
	form[5] = ElementText("h2","RidottoLabel",  label,   "id") ;
	form[6] = ElementText("h2","StopVote","","id") ;

	for ( var i = 3 ; i < 6 ; i++ )
		form[i].className = "Ridotto" ;

	return form ;

}


function userVoteForm() {

    var formTag = ElementForm("GestioneVotoUtente.php","POST") ;
	formTag.onsubmit = function() { checkVote() ; return false ; } ;

	var Children = new Array() ;

	Children[0] = ElementInput("VotoUtente","number",true,"VotoUtente") ;
	Children[0].min = "30"  ;
	Children[0].max = "100" ;

	Children[1] = ElementInput("VOTA","submit",false,"VOTA") ;
	Children[1].value = "Vota!" ;
	
	Append(formTag,Children) ;

	return formTag ;

}



/* Sezione creazione istogramma dei voti */


function Histogram() {

	var istogramma = ElementDiv("Istogramma") ;

	var Children = new Array() ;
	Children[0] = ElementText("p","FasceVotoCaption","Fasce di voto","id") ;
	Children[1] = ElementDiv("BaseIstogramma")   ;

	Children[2] = ElementFascia( "PrimaFascia"	 , "[30-50)"  , ListaFasceVoto[0] + "%" ) ;
	Children[3] = ElementFascia( "SecondaFascia" , "[50-60)"  , ListaFasceVoto[1] + "%" ) ;
	Children[4] = ElementFascia( "TerzaFascia"	 , "[60-70)"  , ListaFasceVoto[2] + "%" ) ;
	Children[5] = ElementFascia( "QuartaFascia"	 , "[70-80)"  , ListaFasceVoto[3] + "%" ) ;
	Children[6] = ElementFascia( "QuintaFascia"	 , "[80-90)"  , ListaFasceVoto[4] + "%" ) ;
	Children[7] = ElementFascia( "SestaFascia"	 , "[90-100)" , ListaFasceVoto[5] + "%" ) ;
	
	Append(istogramma,Children) ;

	return istogramma ;

}