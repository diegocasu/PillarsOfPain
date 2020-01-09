
/* Funzione che gestisce dinamicamente la grandezza del campo testo nel form di invio commento */

function autoresize(element) {

	element.style.height = "5px" ;
	element.style.height = ( element.scrollHeight ) + "px" ;

	if ( element.scrollHeight < 200 ) 
		 element.parentNode.parentNode.style.height = 217 + element.scrollHeight + "px" ;

	else if ( element.scrollHeight >= 200 ) 
		 element.parentNode.parentNode.style.height = 419 + "px" ;

} 


/* Funzione che, al momento della selezione di un campo input del form, ne rimuove il placeholder */


function remove_Placeholder(element) {

	element.placeholder = "" ;

}