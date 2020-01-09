<!DOCTYPE html >
<html lang="it">
<head>

	<meta charset="utf-8" >
	<meta name="author" content="Diego Casu" >
	<meta name="description" content="Webzine Metal italiana ricca di articoli, interviste, live report, recensioni, rubriche e news" >
	<meta name="keywords" content="Webzine,Metal,recensioni,rubriche,live report,articoli,heavy,death,thrash,black,
								   						doom,avant-garde,folk,jazz,fusion,prog,rock,sludge,stoner,swedish,old school,crossover" >
	<meta http-equiv="Refresh" content="300" >
	<link rel="icon" href="./Immagini/Icona.jpg" type="image/jpg" >

	<link rel="stylesheet" href="./CSS/Sfondo.css" 					       type="text/css" >
	<link rel="stylesheet" href="./CSS/Menu/Menu.css"   			       type="text/css" >
	<link rel="stylesheet" href="./CSS/Index/Iframe.css" 			       type="text/css" >
	<link rel="stylesheet" href="./CSS/Index/Notizie.css" 			       type="text/css" >
	<link rel="stylesheet" href="./CSS/Index/Recensioni.css" 		   	   type="text/css" >
	<link rel="stylesheet" href="./CSS/Index/SezioneNotizieRecensione.css" type="text/css" >
	<link rel="stylesheet" href="./CSS/EndPage.css" 				       type="text/css" >

	<script type="text/javascript" src="./Javascript/Utility/HTML_ElementsFunctions.js"  	    > </script>
	<script type="text/javascript" src="./Javascript/Utility/DataPubblicazione.js" 		 	    > </script>

	<script type="text/javascript" src="./Javascript/Intestazione/Header.js"  			 	    > </script>
	<script type="text/javascript" src="./Javascript/Intestazione/Menu.js" 	  			 	    > </script>

	<script type="text/javascript" src="./Javascript/Index/Iframe/FadeOutEffect.js"     	    > </script>
	<script type="text/javascript" src="./Javascript/Index/Iframe/IdentifySecondaryIframe.js"   > </script>
	<script type="text/javascript" src="./Javascript/Index/Iframe/AutomaticIframe.js"    	    > </script>
	<script type="text/javascript" src="./Javascript/Index/Iframe/GestioneIframePrincipale.js"  > </script>
	<script type="text/javascript" src="./Javascript/Index/Iframe/GestioneIframeSecondari.js"   > </script>
	<script type="text/javascript" src="./Javascript/Index/Notizie/ListaNotizie.js" 		    > </script>
	<script type="text/javascript" src="./Javascript/Index/Recensioni/ListaRecensioni.js"	    > </script>
	<script type="text/javascript" src="./Javascript/Index/Notizie/InizializzaNotizie.js"	    > </script>
	<script type="text/javascript" src="./Javascript/Index/Recensioni/InizializzaRecensioni.js" > </script>

	<script type="text/javascript" src="./Javascript/EndPage/LastComments.js"  			 	    > </script>
	<script type="text/javascript" src="./Javascript/EndPage/Footer.js" 	  			 	    > </script>

	
	<?php include "./PHP/Index/Dati_Iframe.php" 		   ?>
	<?php include "./PHP/Index/Dati_NotizieRecensioni.php" ?>
	<?php include "./PHP/Index/Dati_UltimiCommenti.php"    ?>

	<title> Pillars of Pain | Webzine Metal italiana </title>

</head>

<body>

	<div id="Sfondo" >

	<script type="text/javascript" > 

		createHeader(0) ;
		createMenu(0)   ;
		
	</script>
	
	
	<!-- CREAZIONE IFRAME PRINCIPALE E IFRAME SECONDARI -->

	<section id = "ContenitoreframePrincipale" >

		<img id="MainIframe" src="./Immagini/Trasparente.png" alt="MainIframe" > 

		<div id="circle1" class="circle" onclick = redirectMain(0) >  </div>  
		<div id="circle2" class="circle" onclick = redirectMain(1) >  </div>
		<div id="circle3" class="circle" onclick = redirectMain(2) >  </div>
		<div id="circle4" class="circle" onclick = redirectMain(3) >  </div>

		<div id="IframeDescription" >
			<a href="" >
				<h1 class = "DescrizioneIframe" id="IframeCaption"  > &nbsp; </h1> 
				<p class = "DescrizioneIframe" id="IframeText"     > &nbsp; </p> 
			</a>
		</div>

		<div id="TipoArticolo">  
			<p id="TipologiaArticolo"> </p> 
		</div>

		<div id = "EffettoIframePrincipale" class = "FadeOut" > </div>

	</section>

	<section id = "ContenitoreIframeSecondari" >

		<img src="./Immagini/SfondoSezioni.jpg" id="SezioniPrincipali" alt="SezioniPrincipali" >

		<img class = "secondaryIframe" id="firstMiniIframe"  src="./Immagini/Trasparente.png"  alt="MiniIframe" >							 
		<img class = "secondaryIframe" id="secondMiniIframe" src="./Immagini/Trasparente.png"  alt="MiniIframe" > 
		<img class = "secondaryIframe" id="thirdMiniIframe"  src="./Immagini/Trasparente.png"  alt="MiniIframe" > 
																					
		<a class = "SezioniIframe" id="SezioneInterviste" 
			href="./PHP/ModelloArchivio.php?tipoRicerca=interviste&pagina=0" > INTERVISTE 
		</a>

		<a class = "SezioniIframe" id="SezioneArticoli" 
			href="./PHP/ModelloArchivio.php?tipoRicerca=articoli&pagina=0"   > ARTICOLI 	 
		</a>

		<a class = "SezioniIframe" id="SezioneLiveReport" 
			href="./PHP/ModelloArchivio.php?tipoRicerca=livereport&pagina=0" > LIVE REPORT
		</a>

		<div id="circle5"  class="Microcircle" onclick = "redirectSecondary(0,'Interviste')" >  </div>  
		<div id="circle6"  class="Microcircle" onclick = "redirectSecondary(1,'Interviste')" >  </div>
		<div id="circle7"  class="Microcircle" onclick = "redirectSecondary(2,'Interviste')" >  </div>

		<div id="circle8"  class="Microcircle" onclick = "redirectSecondary(0,'Articoli')"   >  </div>
		<div id="circle9"  class="Microcircle" onclick = "redirectSecondary(1,'Articoli')"   >  </div>  
		<div id="circle10" class="Microcircle" onclick = "redirectSecondary(2,'Articoli')"   >  </div>

		<div id="circle11" class="Microcircle" onclick = "redirectSecondary(0,'Live')" 		 >  </div>
		<div id="circle12" class="Microcircle" onclick = "redirectSecondary(1,'Live')" 		 >  </div>
		<div id="circle13" class="Microcircle" onclick = "redirectSecondary(2,'Live')" 		 >  </div>

	    <div class = "MiniIframeDescription" id="IframeDescriptionInt" > 
			<a class = "indirizza" id="indirizzaDescrInt" href="" > 
				<h1 id="IframeCaptionInt" > &nbsp; </h1> 
			</a>
		</div>

		<div class = "MiniIframeDescription" id="IframeDescriptionArt" > 
			<a class = "indirizza" id="indirizzaDescrArt" href="" > 
				<h1 id="IframeCaptionArt" > &nbsp; </h1> 
			</a>
		</div>

		<div class = "MiniIframeDescription" id="IframeDescriptionLive" > 
			<a class = "indirizza" id="indirizzaDescrLive" href="" > 
				<h1 id="IframeCaptionLive" > &nbsp; </h1> 
			</a> 
		</div>

		<div id = "ContenitoreEffettoInterviste" > 
			<div id = "EffettoInterviste" class = "FadeOut" > </div>
		</div>

		<div id = "ContenitoreEffettoArticoli" 	 > 
			<div id = "EffettoArticoli"   class = "FadeOut"  > </div>
		</div>
		
		<div id = "ContenitoreEffettoLive" 		 > 
			<div id = "EffettoLive"      class = "FadeOut"   > </div>
		</div>

	</section>

	<!-- FINE CREAZIONE IFRAME PRINCIPALE E IFRAME SECONDARI -->


	<!-- CREAZIONE SEZIONE NOTIZIE E RECENSIONI  --> 

	<section id="SezioneNotizieRecensioni" > 	

		<img src="./Immagini/SfondoSezioni.jpg" id="UltimeNR" alt="Ultime News-Recensioni">

		<a class = "UltimeNotRece" id="UltimeNot" 
			href="./PHP/ModelloArchivio.php?tipoRicerca=notizie&pagina=0"      > <h1 class ="AntiWarningH1"> ULTIME NOTIZIE </h1>
		</a>

		<a class = "UltimeNotRece" id="UltimeRece" 
			href="./PHP/ModelloArchivio.php?tipoRicerca=ultimeuscite&pagina=0" > <h1 class ="AntiWarningH1"> ULTIME USCITE  </h1>
		</a>

		<div id="divisoreUltime" > </div>  


		<script type="text/javascript" > 

			creaListaNotizie() ;
			creaListaRecensioni() ;

		</script>	

    </section>


    <section id = "ContenitoreConclusivo" >	</section>

	<footer> </footer> 


	<script type="text/javascript" >

		createLastComments( 0, "index", <?php echo($coded_UltimiCommenti) ; ?> ) ;
		createFooter(0,"footer") ;

		automaticIframe( <?php echo($coded_Iframe) ; ?> ) ;

		inizializzaNotizie   ( ( <?php echo($coded_NotizieRecensioni) ; ?> )['Notizie']    ) ;
		inizializzaRecensioni( ( <?php echo($coded_NotizieRecensioni) ; ?> )['Recensioni'] ) ;
		
	</script>

</div>

</body> 

</html>