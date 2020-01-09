
function sectionSearch() {

	var URL = window.location.search.replace('?','') ;

	var GET_Variables   = GET_RecoverParameters(URL) ;    					  /* Si trova in GET_Parameters.js */
	var sezioneCorrente = GET_RecoverValue( GET_Variables, "tipoRicerca" ) ;  /* Si trova in GET_Parameters.js */
	var id_Autore       = GET_RecoverValue( GET_Variables, "autore" ) ;		  /* Si trova in GET_Parameters.js */

	if ( sezioneCorrente == null )
		 return ;

	var inputUtente = document.getElementById("innerSearchBar").value ;
	var ModelloArchivio = "./ModelloArchivio.php?" + "tipoRicerca=" + sezioneCorrente +"&pagina=0" ;

	if ( id_Autore != null )
		 ModelloArchivio = ModelloArchivio + "&autore=" + id_Autore ;  

	if ( inputUtente == '' )
		window.location = ModelloArchivio ; 
	else
		window.location = ModelloArchivio + "&inputUtente=" + inputUtente ;

}