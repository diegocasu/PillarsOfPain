<!DOCTYPE html >
<html lang="it">
<head>

	<meta charset="utf-8" >
	<meta name="author" content="Diego Casu" >
	<meta name="description" content="Webzine Metal italiana ricca di articoli, interviste, live report, recensioni, rubriche e news" >
	<meta name="keywords" content="Webzine,Metal,recensioni,rubriche,live report,articoli,heavy,death,thrash,black,
								   						doom,avant-garde,folk,jazz,fusion,prog,rock,sludge,stoner,swedish,old school,crossover" >
	<meta http-equiv="Refresh" content="1000" >
	<link rel="icon" href="../Immagini/Icona.jpg" type="image/jpg" >

	<link rel="stylesheet" href="../CSS/Sfondo.css" 			      type="text/css" >
	<link rel="stylesheet" href="../CSS/Menu/Menu.css" 			 	  type="text/css" >
	<link rel="stylesheet" href="../CSS/Archivio/ModelloArchivio.css" type="text/css" >

	<script type="text/javascript" src="../Javascript/Utility/HTML_ElementsFunctions.js"  > </script>
	<script type="text/javascript" src="../Javascript/Utility/DataPubblicazione.js" 	  > </script>
	<script type="text/javascript" src="../Javascript/Utility/GET_Parameters.js"		  > </script>

	<script type="text/javascript" src="../Javascript/Intestazione/Header.js"  			  > </script>
	<script type="text/javascript" src="../Javascript/Intestazione/Menu.js" 	  		  > </script>

	<script type="text/javascript" src="../Javascript/Archivio/PopolaRicerca.js" 		  > </script>
	<script type="text/javascript" src="../Javascript/Archivio/CambioPagine.js"			  > </script>
	<script type="text/javascript" src="../Javascript/Archivio/RicercaSezioneCorrente.js" > </script>
	

	<?php include "./Archivio/Dati_Ricerca.php" ?>

	<title> Archivio | Pillars of Pain </title> 

</head>

<body>

	<div id="Sfondo" >

		<script type="text/javascript" > 

			createHeader(1) ;
			createMenu(1)   ;

		</script>

		<div id = "ContenitoreRicerca" >

			<form action="ModelloArchivio.php" method="GET"  id="innerSearchBox" >  <!-- Onsubmit viene aggiunta in PopolaRicerca.js -->
				<input id="innerSearchBar"     type="search" name="innerSearchBar"    autocomplete="off" placeholder="Cerca nella sezione..." >
				<input id="innerSearchButton"  type="submit" name="innerSearchButton" value="" >
			</form>

			<div class="SeparatoreRicerca"></div>

		</div>

		<script type="text/javascript" >

			inizializzaRisultatiRicerca( <?php echo($coded_Search) ; ?> ) ;

		</script>

	</div>

</body>

</html>