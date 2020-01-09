
/* Funzioni di utilità per concatenare o rimuovere nodi */


function Append(Element,Nodes) {

	for ( var i = 0 ; i < Nodes.length ; i++ )
		Element.appendChild(Nodes[i]) ;

}

function Remove(son) {

	var remove = document.getElementById(son) ;
	remove.parentNode.removeChild(remove) ;

}



/* Funzioni creazione elementi HTML */

function ElementTextNode(value) {

	var text = document.createTextNode(value) ;
	return text ;

}


function ElementDiv(id) {

	var div = document.createElement("div") ;
	div.id = id ;
	return div ;

}


function ElementDiv_Text(id,text) {

	var div = ElementDiv(id) ;
	var text = ElementTextNode(text) ;
	div.appendChild(text) ;
	return div ;

}


function ElementDivClass(className,text) {

	var div = document.createElement("div") ;
	div.className = className ;
	div.appendChild( ElementTextNode(text) ) ;
	return div ;

}


function ElementDiv_Class_Id(className,id) {

	var div = document.createElement("div") ;
	div.className = className ;
	div.id = id ;
	return div ;

}


function ElementForm(action,method) {

	var form = document.createElement("form") ;
	form.action = action ;
	form.method = method ;
	return form ;

}
		

function ElementInput(id,type,required,name) {

	var input = document.createElement("input") ;
	input.id = id ;
	input.type = type ;
	input.required = required ;
	input.name = name ;
	return input ;

}


function ElementInputImage_Class(Class,src,alt) {

	var input = document.createElement("input") ;
	input.className = Class ;
	input.type = "image" ;
	input.src = src ;
	input.alt = alt ;
	return input ;

}


function ElementInput_Submit(id,value) {

	var input = document.createElement("input") ;
	input.id = id ;
	input.value = value ;
	input.type = "submit" ;
	return input ;

}


function ElementInput_Submit_Class(Class,value) {

	var input = document.createElement("input") ;
	input.className = Class ;
	input.value = value ;
	input.type = "submit" ;
	return input ;

}


function ElementInput_SendComment(Class,type,required,name,placeholder) {

	var input = document.createElement("input") ;
	input.className = Class ;
	input.type = type ;
	input.required = required ;
	input.name = name ;
	input.placeholder = placeholder ;
	return input ;

}


function ElementTextArea(Class,placeholder,maxlength,required) {

	var textarea = document.createElement("textarea") ;
	textarea.className = Class ;
	textarea.placeholder = placeholder ;
	textarea.maxlength = maxlength ;
	textarea.required = required ;
	return textarea ;

} 


function ElementBR() {

	var br = document.createElement("br") ;
	return br ;

}


function ElementStrong(text) {

	var strong = document.createElement("strong") ;
	var text = ElementTextNode(text) ;
	strong.appendChild(text) ;
	return strong ;

}


function ElementPre(className,text) {

	var pre = document.createElement("pre") ;
	pre.className = className ;
	pre.appendChild( ElementTextNode(text) ) ;
	return pre ;

}


function ElementPre_ID(id,text) {

	var pre = document.createElement("pre") ;
	pre.id = id ;
	pre.appendChild( ElementTextNode(text) ) ;
	return pre ;

}
	

function ElementAnchor_NoHref(Class,value) {

	var a = document.createElement("a") ;
	a.className = Class ;

	var txt = ElementTextNode(value) ;
	a.appendChild(txt) ;

	return a ;

}


function ElementSimpleAnchor(href) {

	var a = document.createElement("a") ;
	a.href = href ;
	return a ;

}


function ElementAnchor_Class(Class,href,value) {

	var a = document.createElement("a") ;
	a.className = Class ;
	a.href = href ;

	var txt = ElementTextNode(value) ;
	a.appendChild(txt) ;
	
	return a ;

}


function ElementAnchor_IDClass(id,Class,href,value) {
	
	var a = document.createElement("a") ;
	a.href = href ;
	a.id = id ;
	a.className = Class ;

	var txt = ElementTextNode(value) ;
	a.appendChild(txt) ;

	return a ;

}

function ElementAnchor_ID(id,href,value) {

	var a = document.createElement("a") ;
	a.href = href ;
	a.id = id ;

	var txt = ElementTextNode(value) ;
	a.appendChild(txt) ;

	return a ;

 }


function ElementHeader() {

	var header = document.createElement("header") ;
	return header ;

}


function ElementNav(id) {

	var nav = document.createElement("nav") ;
	nav.id = id ;
	return nav ;

}


function ElementUL() {

	var ul = document.createElement("ul") ;
	return ul ;

}

function ElementLI() {

	var li = document.createElement("li") ;
	return li ;

}


function ElementParagraph(Class,value) {

	var p = document.createElement("p") ;
	p.className = Class ;
	var txt = ElementTextNode(value) ;
	p.appendChild(txt) ;
	return p ;

}


function ElementImage(id,src,alt) {

	var img = document.createElement("img") ;
	img.id = id ;
	img.src = src ;
	img.alt = alt ;
	return img ;

}


function ElementImage_Class(Class,src,alt) {

	var img = document.createElement("img") ;
	img.className = Class ;
	img.src = src ;
	img.alt = alt ;
	return img ;

}


function ElementImage_IdClass(id,Class,src,alt) {

	var img = document.createElement("img") ;
	img.className = Class ;
	img.id  = id  ; 
	img.src = src ;
	img.alt = alt ;
	return img ;

}


function ElementFascia(id,fasciaVoto,percentuale) {

	var div = ElementDiv(id) ;
	div.className = "FasciaPixel" ;
	var h1  = ElementText("h1","Fascia",fasciaVoto,"class") ;
	var h2 	= ElementText("h2","Percentuale",percentuale,"class") ;
	div.appendChild(h1) ;
	div.appendChild(h2) ;
	return div ;

}


function ElementSelect(id) {

	var select = document.createElement("select") ;
	select.id = id ;
	return select ;

}


function ElementOption(textValue) {

	var option = document.createElement("option") ;
	var text = document.createTextNode(textValue) ;
	option.appendChild(text) ;
	return option ;

}




function ElementText(type,id,value,Id_Class) {

	var text = document.createTextNode(value) ;

	if ( Id_Class == "id") {

		if ( type == "h1") {

			var heading = document.createElement("h1") ;
			heading.id = id ;
			heading.appendChild(text) ;
			return heading ;

		}

		if ( type == "h2") {

			var heading = document.createElement("h2") ;
			heading.id = id ;
			heading.appendChild(text) ;
			return heading ;

		}

		if ( type == "p") {

			var p = document.createElement("p") ;
			p.id = id ;
			p.appendChild(text);
			return p ;

		}

	}

	if ( Id_Class == "class") {

		if ( type == "h1") {

			var heading = document.createElement("h1") ;
			heading.className = id ;
			heading.appendChild(text) ;
			return heading ;

		}

		if ( type == "h2") {

			var heading = document.createElement("h2") ;
			heading.className = id ;
			heading.appendChild(text) ;
			return heading ;

		}

		if ( type == "h3") {

			var heading = document.createElement("h3") ;
			heading.className = id ;
			heading.appendChild(text) ;
			return heading ;

		}

		if ( type == "h4") {

			var heading = document.createElement("h4") ;
			heading.className = id ;
			heading.appendChild(text) ;
			return heading ;

		}

		if ( type == "p") {

			var p = document.createElement("p") ;
			p.className = id ;
			p.appendChild(text);
			return p ;

		}

	}

}