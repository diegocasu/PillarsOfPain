
/* Funzione che determina in quale cartella recuperare le copertine delle recensioni correlate, utilizzate come anteprima */ 

function checkFolder(idRecensione) {

	var folder = "" ;
	var check = idRecensione.split('_') ;

	switch (check[0]) {

 		case "recensione" :
 			folder = "UltimeUscite" ;
 			break ;

 		case "rispolverati" :
 			folder = "Rispolverati" ;
 			break ;

 		case "extra" :
 			folder = "ExtraMetal" ;
 			break ;

 		case "demo" :
 			folder = "Demo" ;
 			break ;

    }

    return folder ;

}


/* Costruttore di una recensione correlata */

function altraRecensione(objectAlbum) {

	var cartellaRecensione = checkFolder( objectAlbum['IdRecensione'] ) ;
	var pathReviews = "../Recensioni/" + cartellaRecensione + '/' + objectAlbum['Cartella'] + '/' + objectAlbum['Cover'] ;

	var modelloRecensione = "./ModelloRecensione.php?id=" + objectAlbum['IdRecensione'] ;

	var titolo = objectAlbum['NomeBand'] + " - " + objectAlbum['NomeAlbum'] ;


	var recensione = document.createElement("div") ;
	recensione.className = "Altre_Recensito" ;

	var Children = new Array() ;

	Children[0] = ElementInputImage_Class("Altre_Cover",pathReviews,titolo) ;

	Children[1] = ElementDivClass("Altre_Band",'') ;
	Children[1].appendChild( ElementAnchor_Class("Altre_Descrizione",modelloRecensione,objectAlbum['NomeAlbum']) ) ;

	Children[2] = ElementBR() ;

	Append( recensione, Children ) ;

	return recensione ;

}


/* Funzione di creazione della sezione contenente le recensioni correlate */

function aggiornaAltreRecensioni(object) {

	var sezioneAltreRecensioni = new Array() ;

	sezioneAltreRecensioni[0] = ElementDivClass("info","RECENSIONI") ;
	sezioneAltreRecensioni[0].id = "AltreRecensioni" ;

	for ( var i = 0 ; i < object.length ; i++ ) {
		var recensione = altraRecensione(object[i]) ;
		sezioneAltreRecensioni.push(recensione) ;
	}

	for ( var i = 0 ; i < sezioneAltreRecensioni.length ; i++ )
		document.getElementById("InformazioniAlbum").appendChild( sezioneAltreRecensioni[i] ) ;

	return ;
}



/* Funzione di inizializzazione delle recensioni della stessa band presenti in archivio */

function altreRecensioni(object_Altre) {

	if ( object_Altre == null )
		 return ;

	aggiornaAltreRecensioni(object_Altre) ;

}