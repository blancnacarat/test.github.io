---
layout: contact
title: Contact - Blanc Nacarat.
landing-title: 'Blanc Nacarat.'
description: 'Blanc Nacarat Records Label & Collectif artistique'
lang: fr
lang-ref: contact
nav-menu: true
image: null
author: null
sitemap: true
---
<section id="contact">
	<div class="inner">
		<section>
			<form action="https://formspree.io/{{ site.email }}" method="POST">
				<input type="hidden" name="_language" value="{{ page.lang }}" />
				<input type="hidden" name="_format" value="plain" />
				<input type="hidden" name="_next" value="https://blancnacarat.github.io/fr/merci">
				<div class="field half first">
					<label for="name">Nom*</label>
					<input type="text" name="name" required id="name" placeholder="ex: Jean-Pierre" />
				</div>
				<div class="field half">
					<label for="email">Email</label>
					<input type="text" name="_replyto" required id="email" placeholder="ex: adresse@gmail.com" />
				</div>
				<div class="field">
					<label for="message">Message*</label>
					<textarea name="message" id="message" style="resize:vertical" rows="6" required placeholder="ex: Salut ! J'adore ce que vous faites... Hey, je suis artiste: ma plaquette... Bonjour, est-ce qu'on peut se rencontrer..."></textarea>
				</div>
				<section class="actions">
					<li><input type="submit" value="Envoyer" class="special"/></li>
					<br>
					<li><input type="reset" value="Annuler" /></li>
				</section>
			</form>
		</section>