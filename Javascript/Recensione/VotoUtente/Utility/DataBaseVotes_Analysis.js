
var Media = 0 ;
var PixelPercentages = new Array()   ;  
var ListaFasceVoto   = [0,0,0,0,0,0] ;
var ListaVoti        = new Array()   ;


/******** Inizializzazione media e valori fasce di voto *******/


function inizializzaListaVoti(votiUtenti) {

	if ( votiUtenti == "" ) 
		 return ;

	ListaVoti = votiUtenti.split(';') ;
  
    for ( var i = 0 ; i < ListaVoti.length ; i++ )
			 ListaVoti[i] = parseInt(ListaVoti[i]) ;

}


function Media_FasceVoto() {

	for ( var i = 0 ; i < ListaVoti.length ; i++ ) {

		if ( ListaVoti[i] >= 30 && ListaVoti[i] < 50 )
				ListaFasceVoto[0]++ ;

		if ( ListaVoti[i] >= 50 && ListaVoti[i] < 60 )
				ListaFasceVoto[1]++ ;

		if ( ListaVoti[i] >= 60 && ListaVoti[i] < 70 )
				ListaFasceVoto[2]++ ;

		if ( ListaVoti[i] >= 70 && ListaVoti[i] < 80 )
				ListaFasceVoto[3]++ ;

		if ( ListaVoti[i] >= 80 && ListaVoti[i] < 90 )
				ListaFasceVoto[4]++ ;

		if ( ListaVoti[i] >= 90 && ListaVoti[i] <= 100 )
				ListaFasceVoto[5]++ ;

		Media = Media + ListaVoti[i] ;

	}

	if ( Media != 0 )
		 Media = Math.round( ( Media/(ListaVoti.length )*100 ) ) / 100 ;

}



function round_ListaFasce() {

	for ( var i = 0 ; i < ListaFasceVoto.length ; i++ ) {

		if ( ListaFasceVoto[i] != 0 )
			 ListaFasceVoto[i] =  Math.round( ( (ListaFasceVoto[i]*100) / (ListaVoti.length) )*100 ) / 100 ;

	}

}


function setPixel() {

	for ( var i = 0 ; i < ListaFasceVoto.length ; i++ ) {

		if ( ListaFasceVoto[i] == 0 ) 
			 PixelPercentages[i] = 0 ;		
		else 
			 PixelPercentages[i] =  Math.round( ( (ListaFasceVoto[i]*415)/100)*100 )/100 ;

	}

}


/* Funzione di inizializzazione e distribuzione dei voti inviati dagli utenti presenti in database */


function userVotes_Analysis(votiUtenti) {

	inizializzaListaVoti(votiUtenti) ;

	Media_FasceVoto() 	  ;

	round_ListaFasce() 	  ;

	setPixel()    ;

}