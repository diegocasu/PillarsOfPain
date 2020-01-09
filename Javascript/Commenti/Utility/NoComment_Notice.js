
/* Costruttore dell'avviso che informa della mancata presenza di commenti nell'articolo corrente */

function noComment_Notice() {

	var nessunCommento = ElementDiv("NessunCommento") ;
	var avviso = ElementText( "h2", "AvvisoNessunCommento" , "Commenta per primo!" , "id" ) ;
	nessunCommento.appendChild(avviso) ;

	document.getElementById("SezioneCommenti").appendChild(nessunCommento) ;

	return ;

}