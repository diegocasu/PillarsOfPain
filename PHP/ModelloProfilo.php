<!DOCTYPE html >
<html lang="it">
<head>

	<meta charset="utf-8" >
	<meta name="author" content="Diego Casu">
	<meta name="description" content="Webzine Metal italiana ricca di articoli, interviste, live report, recensioni, rubriche e news" >
	<meta name="keywords" content="Webzine,Metal,recensioni,rubriche,live report,articoli,heavy,death,thrash,black,
								   						doom,avant-garde,folk,jazz,fusion,prog,rock,sludge,stoner,swedish,old school,crossover" >
	<link rel="icon" href="../Immagini/Icona.jpg" type="image/jpg" >

	<link rel="stylesheet" href="../CSS/Sfondo.css" 		  			type="text/css" >
	<link rel="stylesheet" href="../CSS/Menu/Menu.css" 		  			type="text/css" >
	<link rel="stylesheet" href="../CSS/Redazione/ProfiloRedattore.css" type="text/css" >
	<link rel="stylesheet" href="../CSS/EndPage.css" 		  			type="text/css" >

	<script type="text/javascript" src="../Javascript/Utility/HTML_ElementsFunctions.js"   > </script>

	<script type="text/javascript" src="../Javascript/Intestazione/Header.js"  			   > </script>
	<script type="text/javascript" src="../Javascript/Intestazione/Menu.js" 	  		   > </script>

	<script type="text/javascript" src="../Javascript/Redazione/PopolaProfiloRedattore.js" > </script>

	<script type="text/javascript" src="../Javascript/EndPage/Footer.js"	     		   > </script>
	

	<?php include "./Redazione/Dati_ProfiloRedattore.php" ?>
	<?php include "./Redazione/ContributoRedattore.php"   ?>

	<title> Pillars of Pain </title>

</head>

<body>

	<div id="Sfondo" >

	<script type="text/javascript" > 
	
		createHeader(1) ;
		createMenu(1)   ;
	
	</script>

	<section id="ProfiloRedattore"> 

		<div id="Info" >
			<img id="IMG" src="" alt=""> 
			<div id="Ruolo" > 
				<h2 id="ruolo"> </h2>
			</div>
			<h1 id="NomeRedattore" > </h1>
			<p class="CampoInfo"   > </p>
			<p class="CampoInfo"   > </p>
			<p class="CampoInfo"   > </p>
		</div>
			
		<img id="SeparatoreInfo" src="../Immagini/SfondoSezioni.jpg" alt="Separatore" >

		<div id="GruppiPreferiti" >
			<h1  class="GCaption" > GRUPPI PREFERITI </h1>
			<pre class="ListaG"   > </pre>
		</div>

		<img id="SeparatoreG" src="../Immagini/SfondoSezioni.jpg" alt="Separatore" >

		<div id="GeneriPreferiti" >
			<h1  class="GCaption" > GENERI PREFERITI </h1>
			<pre class="ListaG"   > </pre>
		</div>

		<img id="SeparatorePreferiti" src="../Immagini/SfondoSezioni.jpg" alt="Separatore" >

		<div id="Interessi" >
			<h1  class="GCaption" > INTERESSI </h1>
			<pre class="ListaG"   > </pre>
		</div>

			<img id="SeparatoreInteressi" src="../Immagini/SfondoSezioni.jpg" alt="Separatore" >

			<div id="Contributo" >
				<h1 class="GCaption" > CONTRIBUTO </h1>
				<p class="NomeContributo" > Articoli:  	   </p>
				<p class="NomeContributo" > Demo:	 	   </p>
				<p class="NomeContributo" > Extra Metal:   </p>
				<p class="NomeContributo" > Interviste:    </p>
				<p class="NomeContributo" > Live Report:   </p>
				<p class="NomeContributo" > Notizie: 	   </p>
				<p class="NomeContributo" > Rispolverati:  </p>
				<p class="NomeContributo" > Ultime Uscite: </p>
			</div>

		</div>

	</section>

	<footer>

		<script type="text/javascript" >

		 	createFooter(1,"ProfiloFooter") ;

		</script>

	</footer>


	<script type="text/javascript" > 
	
		inizializzaProfilo( ( <?php echo($coded_Profilo) ; ?> )[0] ) ;
		inizializzaContributo(  <?php echo($coded_Contributo) ; ?> ) ;
	
	</script>

    </div>

</body>

</html>