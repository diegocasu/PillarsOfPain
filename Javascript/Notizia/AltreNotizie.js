
/* Costruttore dell'elemento altra notizia */

function altra_Notizia(titoloNotizia,idNotizia) {

	var pathNews = "./ModelloNotizia.php" + "?id=" + idNotizia ; 

	var div_Notizia = ElementDivClass("AltraNotizia",'') ;
	var linkNotizia = ElementAnchor_Class("AltraNotiziaTitolo",pathNews,titoloNotizia) ;

	div_Notizia.appendChild(linkNotizia) ;

	return div_Notizia ;

}



/* Funzione che costruisce la sezione sulle notizie correlate */


function updateReviews(recensioni,tipologia) {

	if ( recensioni == null )
		 return ;

	var AltreNotizie_Children = new Array() ;

	if ( tipologia == "Altre" ) {
		AltreNotizie_Children[0] = ElementDivClass("SezioneAltreNotizie","ALTRE NOTIZIE") ;
		AltreNotizie_Children[0].id = "Altre_NotizieBand" ;
	}

	else if ( tipologia == "Ultime" ) {
		AltreNotizie_Children[0] = ElementDivClass("SezioneAltreNotizie","ULTIME NOTIZIE") ;
		AltreNotizie_Children[0].id = "Altre_UltimeNotizie" ;
	}


	for ( var i = 0 ; i < recensioni.length ; i++ ) {
		  var notizia = altra_Notizia( recensioni[i]['Titolo'], recensioni[i]['IdNotizia'] ) ;
		  AltreNotizie_Children.push(notizia) ;
	}

	Append( document.getElementById("ContenitoreAltreNotizie"), AltreNotizie_Children ) ;

} 



/* Funzione di inizializzazione */

function altreNotizie(info) {

   updateReviews(info['SameBand'],"Altre") ;
   updateReviews(info['Latest'],"Ultime")  ;

}