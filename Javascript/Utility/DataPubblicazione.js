
/******* Data di pubblicazione per gli articoli ******/

function determinaMese( mese ) {

	switch ( mese ) {

		case "01" :
			mese = "Gen" ;
			break ;
		case "02" :
			mese = "Feb" ;
			break ;
		case "03" :
			mese = "Mar" ;
			break ;
		case "04" :
			mese = "Apr" ;
			break ;
		case "05" :
			mese = "Mag" ;
			break ;
		case "06" :
			mese = "Giu" ;
			break ;
		case "07" :
			mese = "Lug" ;
			break ;
		case "08" :
			mese = "Ago" ;
			break ;
		case "09" :
			mese = "Set" ;
			break ;
		case "10" :
			mese = "Ott" ;
			break ;
		case "11" :
			mese = "Nov" ;
			break ;
		case "12" :
			mese = "Dic" ;
			break ;
		default :
			mese = "Errore" ;
			break ;
	}

	return mese ;

}


function creaDataPubblicazione(timestamp,numeroCommenti) {

	var pubblicato = "Pubblicato il " ;

	if ( numeroCommenti == 1 )
		 var commenti = '|' + ' ' + numeroCommenti + ' ' + "Commento" ;
	else
		 var commenti = '|' + ' ' + numeroCommenti + ' ' + "Commenti" ;

	
	var onlyDate = '' ;
	for ( var i = 0 ; i < 10 ; i++ )
		onlyDate = onlyDate.concat(timestamp[i]) ;

	var anno   = onlyDate.slice(0,4)  ;
	var mese   = onlyDate.slice(5,7)  ; 
	var giorno = onlyDate.slice(8,10) ;

	mese = determinaMese(mese) ;

	var dataFormattata = giorno + ' ' + mese + ' ' + anno + ' ' ;

	var dataPubblicazione = pubblicato + dataFormattata + commenti ;

	return dataPubblicazione ;

}



/******* Data di pubblicazione per i commenti ******/


function dataPubblicazioneCommenti(timestamp) {

	var pubblicato = "Pubblicato il " ;

	var onlyDate = '' ;
	for ( var i = 0 ; i < 10 ; i++ )
		  onlyDate = onlyDate.concat(timestamp[i]) ;
		
	var onlyTime = '' ;
	for ( var i = 11 ; i < 16 ; i++ )
		 onlyTime = onlyTime.concat(timestamp[i]) ;


	var anno   = onlyDate.slice(0,4)  ;
	var mese   = onlyDate.slice(5,7)  ; 
	var giorno = onlyDate.slice(8,10) ;
	var orario = onlyTime.slice(0,6)  ;

	mese = determinaMese(mese) ;
	var dataFormattata = giorno + ' ' + mese + ' ' + anno + ' ' ;

	var dataPubblicazione = pubblicato + dataFormattata + ' ' + orario ;

	return dataPubblicazione ;

}