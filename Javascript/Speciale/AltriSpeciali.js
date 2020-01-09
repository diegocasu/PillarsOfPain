
function updateSpeciali(object,nomeSezione) {

	if ( object == null )
		 return ;

	var modello = "./ModelloSpeciali.php?id=" ;

	var altri_Speciali = new Array() ;
	altri_Speciali[0] = ElementDivClass("SezioneAltriSpeciali",nomeSezione) ;

	for ( var i = 0 ; i < object.length ; i++ ) {
		var speciale = ElementDivClass("AltroSpeciale",'') ;
		speciale.appendChild( ElementAnchor_Class( "AltroSpecialeTitolo", modello + object[i]['IdSpeciale'], object[i]['Titolo'] ) ) ;
		altri_Speciali.push(speciale) ;
	}

	Append ( document.getElementById("ContenitoreImmaginiSpeciali"), altri_Speciali ) ;

}


function altriSpeciali(info) {

	updateSpeciali( info['Articoli']  , "ARTICOLI"    ) ;  
	updateSpeciali( info['Interviste'], "INTERVISTE"  ) ;
	updateSpeciali( info['LiveReport'], "LIVE REPORT" ) ;

}