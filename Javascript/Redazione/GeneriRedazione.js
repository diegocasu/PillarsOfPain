
function DisplayGenres(tipoRedazione) {

	switch(tipoRedazione) {

		case "Ancient Power":
			var generi    = ElementDiv("GeneriAncient") ;
			var contenuto = ElementPre("Generi"," Heavy, Power, Speed, Epic, Thrash, Hard rock e derivati, Alternative,\n Nu-metal, Crossover, Punk, Redazione Extra Metal") ;
			var index = 1 ;
			break ;

		case "Death In Progress":
			var generi    = ElementDiv("GeneriDeath") ;
			var contenuto = ElementPre("Generi"," Progressive Rock e Metal, Death, Brutal, Grind, Technical, Core,\n Industrial, Avant-garde") ;
			var index = 2 ;
			break ;

		case "Slow Blackness":
			var generi    = ElementDiv("GeneriBlack") ;
			var contenuto = ElementPre("Generi"," Doom, Black, Gothic, Folk") ;
			var index = 3 ;
			break ;

		case "Web":
			var generi    = ElementDiv("GeneriWeb")   ;
			var contenuto = ElementPre("Generi"," Gestione homepage, Gestione news, Interviste, Live report, Articoli,\n Sezione concerti") ;
			var index = 4 ;
			break ;

	}

	generi.appendChild(contenuto) ;

	var nodoListaRedazioni  = document.getElementsByClassName("TipoRedazione")[index] ;
	nodoListaRedazioni.parentNode.appendChild(generi) ;

}


function ClearGenres(genres_Div) {

	Remove( genres_Div ) ;

}