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

	<link rel="stylesheet" href="../CSS/Sfondo.css" 		   			  type="text/css" >
	<link rel="stylesheet" href="../CSS/Menu/Menu.css" 			    	  type="text/css" >
	<link rel="stylesheet" href="../CSS/Recensione/ModelloRecensione.css" type="text/css" >
	<link rel="stylesheet" href="../CSS/Recensione/VotoUtente.css" 	   	  type="text/css" >
	<link rel="stylesheet" href="../CSS/Commenti/CommentiRecensione.css"  type="text/css" >

	<script type="text/javascript" src="../Javascript/Utility/HTML_ElementsFunctions.js" 			  	   	   > </script>
	<script type="text/javascript" src="../Javascript/Utility/DatabaseTextFormatter.js"  			  	   	   > </script>
	<script type="text/javascript" src="../Javascript/Utility/GET_Parameters.js"		 			  	   	   > </script>
	<script type="text/javascript" src="../Javascript/Utility/AjaxRequest.js"			 			  	   	   > </script>
	<script type="text/javascript" src="../Javascript/Utility/DataPubblicazione.js"			 			  	   > </script>

	<script type="text/javascript" src="../Javascript/Intestazione/Header.js"  			 			  	   	   > </script>
	<script type="text/javascript" src="../Javascript/Intestazione/Menu.js" 	  		 			  	   	   > </script>

	<script type="text/javascript" src="../Javascript/Recensione/PopolaRecensione.js"    			  	   	   > </script>
	<script type="text/javascript" src="../Javascript/Recensione/AltreRecensioni.js"     			  	   	   > </script>
	<script type="text/javascript" src="../Javascript/Recensione/VotoUtente/Utility/Vote_Elements.js" 	   	   > </script>
	<script type="text/javascript" src="../Javascript/Recensione/VotoUtente/Utility/DataBaseVotes_Analysis.js" > </script>
	<script type="text/javascript" src="../Javascript/Recensione/VotoUtente/UserVotesWindow.js"       	   	   > </script>
	<script type="text/javascript" src="../Javascript/Recensione/VotoUtente/GestioneIstogramma.js" 	  	   	   > </script>
	<script type="text/javascript" src="../Javascript/Recensione/VotoUtente/SendUserVote.js" 			 	   > </script>

	<script type="text/javascript" src="../Javascript/Commenti/Utility/FormFields_Handler.js" 		  		   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/Utility/Comment_Elements.js" 			 	   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/Utility/NoComment_Notice.js" 			 	   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/BasicCommentForm_Handler.js" 			 	   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/OrganizeComments.js" 			 	   		   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/PopolaCommenti.js" 			 	   		       > </script>
	<script type="text/javascript" src="../Javascript/Commenti/ReplyForm_Handler.js" 			 	   		   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/SendComment.js" 			 	   			   	   > </script>
	<script type="text/javascript" src="../Javascript/Commenti/UpDown_Vote.js" 			 	   		           > </script>
	
	
	<?php include "./Recensione/Dati_Recensione.php" ?>
	<?php include "./Recensione/AltreRecensioni.php" ?>
	<?php include "./Commenti/Dati_Commenti.php"	 ?>


	<title> Recensione | Pillars of Pain </title> 

</head>

<body>

	<div id="Sfondo" >

	<script type="text/javascript" > 

		createHeader(1) ;
		createMenu(1)   ;

	</script>
	
	<section id = "ContenitoreRecensione" >

		<h1 id="Titolo" > </h1>

		<div id="CorpoRecensione" >

			<div id="TestoRece" > </div>

			<br>

			<div id="Autore" >

				<p id="NomeAutore"> <a id="LinkAutore" href="" > </a> </p>

				<div id="VotoRecensore" >
					<p class="Voto_Recensore" > VOTO RECENSORE </p>
					<p class="Voto" > </p>
				</div>

				<div id="VotoUtenti" >
					<p class="Voto_Recensore" > VOTO UTENTI </p>
					<p class="Voto" > </p>
					<div id="DirittoAlVoto" onclick= DisplayVotesWindow() > [ Vota! ] </div>
				</div>

			</div>

		</div>
				

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


	</section>


	<aside id = "ContenitoreImmagini" > <!-- Sezione immagini di accompagnamento della recensione --> </aside> 
	

	<aside id = "ContenitoreInformazioni" >

		<div id="InformazioniAlbum" >

			<div class="info" id="INFO" > INFORMAZIONI </div>

			<img id="AlbumCover" src="../Immagini/Trasparente.png" alt="AlbumCover" > 

			<div class="info" id="AnnoPubblicazione" > </div>
			<div class="info" id="Label" 			 > </div>
			<div class="info" id="Genere" 			 > </div>
			<div class="info" id="Tracklist" 		 > </div>
			<div class="info" id="Lineup" 			 > </div>

	    </div> 

	</aside>


	<script type="text/javascript" > 

		popolaRecensione( ( <?php echo($coded_Recensione     ) ; ?> )[0] ) ;
		altreRecensioni (   <?php echo($coded_AltreRecensioni) ; ?> ) ;  /* Allega recensioni dello stesso gruppo presenti nel database */ 
		organizeComments( <?php echo($coded_Commenti) ; ?> )   ;

	</script>

   </div>

   </body>

   </html>