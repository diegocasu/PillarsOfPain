
function ajaxObject() {

	var xmlHttp = null ;

	try { 
 	      xmlHttp = new XMLHttpRequest(); 
		}
	catch (e) {
	            try { 
				      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); //IE (recent versions)
				    } 
			    catch (e) {
						   try { 
								xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE (older versions)
								} 
							catch (e) {
										xmlHttp = null; 
									   }
						   }
		  	   }

	return xmlHttp ;

}


function ajaxCall(method,url,postString,responseFunction) {

	var xmlHttp = ajaxObject() ;

	if ( xmlHttp === null ) {
		 window.alert("Il tuo browser non supporta AJAX") ;
		 return ;
	}


	xmlHttp.open( method, url, true ) ;

	if ( method == "POST" ) 
		 xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded") ;
	
	xmlHttp.onreadystatechange = function() {  useHttpResponse(xmlHttp,responseFunction) ; } ;
	xmlHttp.send(postString) ;

}



function useHttpResponse(xmlHttp,responseFunction) {

	if ( xmlHttp.readyState == 4 ) {
		 
		 var data = JSON.parse( xmlHttp.responseText ) ;
		 responseFunction(data) ;
		
	}

}