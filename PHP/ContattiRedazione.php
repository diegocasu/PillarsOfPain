<!DOCTYPE html >
<html lang="it">
<head>

	<meta charset="utf-8" >
	<meta name="author" content="Diego Casu">
	<meta name="description" content="Webzine Metal italiana ricca di articoli, interviste, live report, recensioni, rubriche e news" >
	<meta name="keywords" content="Webzine,Metal,recensioni,rubriche,live report,articoli,heavy,death,thrash,black,
								   						doom,avant-garde,folk,jazz,fusion,prog,rock,sludge,stoner,swedish,old school,crossover" >
	<link rel="icon" href="../Immagini/Icona.jpg" type="image/jpg" >

	<link rel="stylesheet" href="../CSS/Sfondo.css" 		   			 type="text/css" >
	<link rel="stylesheet" href="../CSS/Redazione/ContattiRedazione.css" type="text/css" >
	<link rel="stylesheet" href="../CSS/Menu/Menu.css" 			   		 type="text/css" >
	<link rel="stylesheet" href="../CSS/EndPage.css" 		  		     type="text/css" >

	<script type="text/javascript" src="../Javascript/Utility/HTML_ElementsFunctions.js" > </script>

	<script type="text/javascript" src="../Javascript/Intestazione/Header.js"  			 > </script>
	<script type="text/javascript" src="../Javascript/Intestazione/Menu.js" 	  		 > </script>

	<script type="text/javascript" src="../Javascript/Redazione/ListaRedazioni.js" 		 > </script>
	<script type="text/javascript" src="../Javascript/Redazione/GeneriRedazione.js"	     > </script>

	<script type="text/javascript" src="../Javascript/EndPage/LastComments.js"  		 > </script>
	<script type="text/javascript" src="../Javascript/EndPage/Footer.js"	     		 > </script>
	

	<?php include "./Redazione/ListaRedattori.php"  ?>
	<?php include "./Index/Dati_UltimiCommenti.php" ?>

	<title> Contatti e Redazione | Pillars of Pain </title>

</head>

<body>

	<div id="Sfondo" >
		
	<script type="text/javascript" > 

		createHeader(1) ;
		createMenu(1)   ;

	</script>


	<section>

		<div id="Staff" >
			
			<h1 class="ContRedCaption" > CONTATTI </h1>
			<p  class="ContRedText" > 
				Per l'invio di materiale (demo-promo) è possibile inviare una mail ad uno dei contatti proposti qui in basso <strong>facendo attenzione al genere di competenza</strong>.
				Per avere maggiori informazioni sui tempi e le modalità di valutazione del materiale inviato è sufficiente scrivere al Capo Redattore interessato.				
			</p>
			<h2 class="ContRedCaption" > REDAZIONE </h2>

		</div>

	</section>

	
	<section id ="ContenitoreConclusivoRedazione" >	</section>

	<footer> </footer>  
	

	<script type="text/javascript" > 

		createLastComments( 1, "redazione", <?php echo($coded_UltimiCommenti) ; ?> ) ;
		createFooter(1,"Contattifooter") ;

		inizializzaRedazione( <?php echo($coded_Lista) ; ?> ) ;

	</script>


	</div>

</body>

</html>