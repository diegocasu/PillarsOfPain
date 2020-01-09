
/* Funzione che inizializza le sezioni a comparsa in cui sono elencati i generi di competenza di ciascuna redazione */

function tipoRedazione(tipo) {

	var tipoRedazione = ElementLI() ;
	var h3 = ElementText("h3","TipoRedazione",tipo,"class") ;

	switch (tipo) {

		case "REDAZIONE 'Ancient Power'" :
			var display = "Ancient Power" ;
			var clear   = "GeneriAncient" ;
			break ;

		case "REDAZIONE 'Death In Progress'" :
			var display = "Death In Progress" ;
			var clear   = "GeneriDeath"       ;
			break ;

		case "REDAZIONE 'Slow Blackness'" :
			var display = "Slow Blackness" ;
			var clear   = "GeneriBlack"    ;
			break ;

		case "REDAZIONE WEB" :
			var display = "Web" 		   ;
			var clear   = "GeneriWeb"      ;
			break ;
	
	}

	if ( tipo != "WEBMASTER" ) {

		h3.onmouseover = function() { DisplayGenres(display) ; } ;
		h3.onmouseout  = function() { ClearGenres(clear)     ; } ;

	}

	tipoRedazione.appendChild(h3) ;
	return tipoRedazione ;

}



/* Funzione che inizializza redattori di una specifica redazione, tranne il capo redattore */

function membriRedazione(redazione) {

	var modelloProfiloRedattore = "./ModelloProfilo.php" ;

	var contenitoreRedattori = ElementLI() ;
	contenitoreRedattori.className = "noStyleType" ;

	var elencoRedattori = ElementUL() ;


	for ( var i = 0 ; i < redazione.length ; i++ ) {

		if ( redazione[i]['Ruolo'] != "Capo Redattore") {

			var idRedattore   = redazione[i]['IdRedattore'] ;
			var nomeRedattore = redazione[i]['NomeRedattore']
			var linkRedattore = modelloProfiloRedattore + "?id=" + idRedattore ;
			var ProfiloRedattore = ElementAnchor_Class("Personale",linkRedattore,nomeRedattore) ;
			
			var contenitoreRedattore = ElementLI() ;
			contenitoreRedattore.appendChild(ProfiloRedattore) ;

			elencoRedattori.appendChild(contenitoreRedattore) ;

		}

	}

	contenitoreRedattori.appendChild(elencoRedattori) ;
	return contenitoreRedattori ;

}



/* Funzione che inizializza il capo redattore e richiama la funzione che inizializza i redattori */

function capoRedattore(redazione) {

	var modelloProfiloRedattore = "./ModelloProfilo.php" ;


	var contenitoreRedazione = ElementLI() ;
	contenitoreRedazione.className = "noStyleType" ;

	var outerUl = ElementUL()  ;
	var Children = new Array() ;

	Children[0] = ElementLI() ;
	Children[0].appendChild( ElementText("h4","Ruolo","CAPO REDATTORE","class") ) ;


	Children[1] = ElementLI() ;
	Children[1].className = "noStyleType" ;


	for ( var i = 0 ; i < redazione.length ; i++ ) {

		if ( redazione[i]['Ruolo'] == "Capo Redattore" ) {

			var nomeCapoRedattore = redazione[i]['NomeRedattore'] ;
			var idCapoRedattore   = redazione[i]['IdRedattore'] ;

		}

	}

	var linkCapoRedattore    = modelloProfiloRedattore + "?id=" + idCapoRedattore ;
	var ProfiloCapoRedattore = ElementAnchor_Class("Personale",linkCapoRedattore,nomeCapoRedattore) ;

	var inner_ul = ElementUL() ;
	var inner_li = ElementLI() ;
	inner_li.appendChild(ProfiloCapoRedattore) ;
	inner_ul.appendChild(inner_li) ;


	Children[1].appendChild(inner_ul) ;

	Children[2] = ElementLI() ;
	Children[2].appendChild( ElementText("h4","Ruolo","REDATTORI","class") ) ;

	Children[3] = membriRedazione(redazione) ;


	Append( outerUl, Children ) ;

	contenitoreRedazione.appendChild(outerUl) ;
	return contenitoreRedazione ;
	
}




function creaListaRedazioni(listaRedazioni) {

	var contenitoreLista = ElementUL() ;
	contenitoreLista.id = "listaRedattori" ;

	var Children = new Array() ;

	Children[0] = tipoRedazione("WEBMASTER") ;
	Children[1] = membriRedazione( listaRedazioni['Webmaster'] ) ;

	Children[2] = tipoRedazione("REDAZIONE 'Ancient Power'") ;
	Children[3] = capoRedattore( listaRedazioni['Ancient'] ) ;

	Children[4] = tipoRedazione("REDAZIONE 'Death In Progress'") ;
	Children[5] = capoRedattore( listaRedazioni['Death'] ) ;

	Children[6] = tipoRedazione("REDAZIONE 'Slow Blackness'") ;
	Children[7] = capoRedattore( listaRedazioni['Black'] ) ;

	Children[8] = tipoRedazione("REDAZIONE WEB") ;
	Children[9] = capoRedattore( listaRedazioni['Web'] ) ;

	Append( contenitoreLista, Children ) ;

	document.getElementById("Staff").appendChild(contenitoreLista) ;
	
}



/* Funzione che inizializza la lista redattori */


function inizializzaRedazione(listaRedazioni) {

	if ( listaRedazioni == null )
		 return ;

	creaListaRedazioni(listaRedazioni) ;

}