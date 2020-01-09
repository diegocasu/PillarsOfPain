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

	<link rel="stylesheet" href="../CSS/Sfondo.css" 				type="text/css" >
	<link rel="stylesheet" href="../CSS/Menu/Menu.css" 				type="text/css" >
	<link rel="stylesheet" href="../CSS/Notizia/ModelloNotizia.css" type="text/css" >
	<link rel="stylesheet" href="../CSS/Commenti/Commenti.css" 		type="text/css" >

	<script type="text/javascript" src="../Javascript/Utility/HTML_ElementsFunctions.js"       > </script>
	<script type="text/javascript" src="../Javascript/Utility/DatabaseTextFormatter.js"        > </script>
	<script type="text/javascript" src="../Javascript/Utility/GET_Parameters.js"		       > </script>
	<script type="text/javascript" src="../Javascript/Utility/AjaxRequest.js"			       > </script>
	<script type="text/javascript" src="../Javascript/Utility/DataPubblicazione.js"		       > </script>

	<script type="text/javascript" src="../Javascript/Intestazione/Header.js"  			       > </script>
	<script type="text/javascript" src="../Javascript/Intestazione/Menu.js" 	  		       > </script>

	<script type="text/javascript" src="../Javascript/Notizia/PopolaNotizia.js" 		       > </script>
	<script type="text/javascript" src="../Javascript/Notizia/AltreNotizie.js" 			       > </script>

	<script type="text/javascript" src="../Javascript/Commenti/Utility/FormFields_Handler.js"  > </script>
	<script type="text/javascript" src="../Javascript/Commenti/Utility/Comment_Elements.js"    > </script>
	<script type="text/javascript" src="../Javascript/Commenti/Utility/NoComment_Notice.js"    > </script>
	<script type="text/javascript" src="../Javascript/Commenti/BasicCommentForm_Handler.js"    > </script>
	<script type="text/javascript" src="../Javascript/Commenti/OrganizeComments.js" 		   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/PopolaCommenti.js" 			   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/ReplyForm_Handler.js" 		   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/SendComment.js" 			 	   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/UpDown_Vote.js" 			 	   > </script>


	<?php include "./Notizia/Dati_Notizia.php"   ?>
	<?php include "./Notizia/AltreNotizie.php"   ?>
	<?php include "./Commenti/Dati_Commenti.php" ?>
	
	<title> Notizia | Pillars of Pain </title> 

</head>

<body>

	<div id="Sfondo" >

		<script type="text/javascript" > 

			createHeader(1) ;
			createMenu(1)   ;

		</script>

	    <h1 id="TitoloNotizia" > </h1>

	    <div id = "TestoNotizia" > </div>

	 	<div id = "ContenitoreAutore" >
	 		<p id = "AutoreNotizia" > <a id = "LinkAutoreNotizia" href = "" > </a> </p>
	 	</div>

		<aside id = "ContenitoreAltreNotizie" > </aside>

		<div id="Modulo_InvioCommento" >
			 <img id="CommentsLogo" src="../Immagini/Comments.png" alt="Comments" onclick = ShowCommentSection() >
			 <p id="OpenComments"   onclick= ShowCommentSection() > Commenta </p>
		</div>

		<div id ="InformazioniPubblicazione">
			<h2 id="Pubblicazione_NumeroCommenti" > </h2> 

			<p id="Avvertenza"> 
				I commenti esprimono il punto di vista e le opinioni del proprio autore
				e non quelle dei membri dello staff di Pillars of Pain .
				L'utente concorda di non inviare messaggi abusivi,
				osceni, diffamatori, di odio, minatori, sessuali o che possano in altro modo violare
				qualunque legge applicabile. Inserendo messaggi di questo tipo l'utente verrà
				immediatamente e permanentemente escluso. L'utente concorda che i moderatori
				di Pillars of Pain hanno il diritto di rimuovere, modificare, o chiudere argomenti qualora
				si ritenga necessario.
				La Redazione di Pillars of Pain invita ad un uso costruttivo dei commenti.
			</p>
		</div>


		<div id="SezioneCommenti"> </div> <!-- Sezione in cui saranno presenti i commenti degli utenti -->

			
		<script type="text/javascript" > 

			popolaNotizia( ( <?php echo($coded_Notizia) ; ?> )[0] ) ;
			altreNotizie ( <?php echo($coded_AltreNotizie) ; ?> )   ;
			organizeComments( <?php echo($coded_Commenti) ; ?> )    ;
	 
		</script>

	</div>

</body>

</html>