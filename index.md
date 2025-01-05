---
layout: page
title: Matematiikkakilpailut ja olympiavalmennus
eleventyNavigation:
  title: Etusivu
hideBreadcrumbs: true
alert: yes
description: >-
  Matematiikkakilpailujen tarkoituksena on kannustaa lahjakkaita nuoria
  harrastamaan matematiikkaa. Kansainvälisiin kilpailuihin valmennetaan
  halukkaita. Valmennus koostuu valmennusviikonlopuista ja kirjevalmennuksesta.
  Valmennettavien joukosta valitaan edustajat kansainvälisiin kilpailuihin,
  kuten Kansainvälisiin matematiikkaolympialaisiin.
url: /
---
<picture class="light-element">
  <source srcset="/kuvat/oph_light.webp" type="image/webp">
  <img class="float-sm-end d-block mx-auto mb-2 ms-md-4" loading="lazy" src="/kuvat/oph_light.png" width="180" height="174" alt="Opetushallitus rahoittaa hanketta">
</picture>
<picture class="dark-element">
  <source srcset="/kuvat/oph_dark.webp" type="image/webp">
  <img class="float-sm-end d-block mx-auto mb-2 ms-md-4" loading="lazy" src="/kuvat/oph_dark.png" width="180" height="174" alt="Opetushallitus rahoittaa hanketta">
</picture>


[Matematiikkakilpailuiden](kilpailut) tarkoituksena on kannustaa
lahjakkaita nuoria harrastamaan matematiikkaa. Tähän liittyvästä
valmennuksesta ja kilpailuihin osallistumisesta vastaa Suomessa
[Suomen matemaattisen yhdistyksen](http://www.matemaattinenyhdistys.fi/)
[Valmennusjaosto](valmentajat).

Valmennus koostuu yleensä viikonloppuisin Päivölän opistolla
järjestettävistä [**valmennustapahtumista**](kaytanto)
(ks. [aikataulu](aikataulu)) sekä [**kirjevalmennuksesta**](valmennus),
joka on tarkoitettu kaikille, myös niille, jotka eivät voi
osallistua valmennustapahtumiin. **Tilaisuudet ovat kaikille
koululaisille avoimia** ja ne on suunnattu erityisesti
lukio- ja yläkouluikäisille.

[Kilpailuja](kilpailut) on eri tasoilla kansallisista
alueellisista kilpailuista Kansainvälisiin Matematiikkaolympialaisiin.
Niihin pääsee mukaan ottamalla ahkerasti osaa valmennukseen
ja tulemalla valituksi joukkueeseen.


## Uutisia {id=uutisia}

{%- set uutiset = collections.uutinen | reverse | batch(4) | first %}
<ul>
{%- for artikkeli in uutiset %}
<li> {{ artikkeli.templateContent | safe }}
</li>
{%- endfor %}
</ul>

<a href="/uutiset">Uutisarkisto</a>


