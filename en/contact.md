---
layout: contact
title: Contact - Blanc Nacarat.
description: 'Blanc Nacarat Records Label & Artistic Community'
lang: en
lang-ref: contact
nav-menu: true
image: null
author: null
sitemap: true
---

<section id="contact">
	<div class="inner">
			<form action="https://formspree.io/{{ site.email }}" method="POST">
				<input type="hidden" name="_language" value="{{ page.lang }}" />
				<input type="hidden" name="_format" value="plain" />
				<input type="hidden" name="_next" value="https://blancnacarat.github.io/en/thanks">
				<div class="field half first">
					<label for="name">Name*</label>
					<input type="text" name="name" required id="name" placeholder="ex: Queen B" />
				</div>
				<div class="field half">
					<label for="email">Email</label>
					<input type="text" name="_replyto" required id="email" placeholder="ex: adresse@gmail.com" />
				</div>
				<div class="field">
					<label for="message">Message*</label>
					<textarea name="message" id="message" style="resize:vertical" rows="6" required placeholder="ex: Hi ! I love what you're doing... Hey, I'm an artist, check out my work... Hi there, can we meet..."></textarea>
				</div>
				<section class="actions">
					<li><input type="submit" value="Send" class="special"/></li>
					<br>
					<li><input type="reset" value="Cancel" /></li>
				</section>
			</form>
	</div>
</section>