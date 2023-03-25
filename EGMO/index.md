---
layout: page
title: Euroopan tyttöjen matematiikkaolympialaiset – EGMO
url: /EGMO/
eleventyNavigation:
  key: EGMO
  parent: kilpailut
  order: 5
---

## Yleistä

Ensimmäiset [Euroopan tyttöjen matematiikkaolympialaiset](https://www.egmo.org/)
pidettiin vuonna 2012 Cambridgessä Englannissa, josta olikin tullut aloite kilpailun järjestämiseen. 
Kilpailun tavoitteena on houkutella lisää tyttöjä kilpamatematiikan pariin sekä madaltaa tyttöjen kynnystä
osallistua Kansainvälisiin Matematiikkaolympialaisiin. 

Viikon mittaisen tapahtuman aikana kilpailijat ehtivät kokeiden lisäksi tutustumaan nähtävyyksiin
ja toisiin kilpailijoihin. Vaikka kilpailu onkin nimensä mukaisesti tarkoitettu Euroopan maille,
on joka vuosi mukana ollut vierailijoita myös muista maanosista, joten osallistujakunta on varsin kansainvälistä.
Suomi osallistuu kilpailuun vuosittain enintään nelihenkisellä joukkueella.

[Seuraavat](https://egmo2023.dmfa.si/) Euroopan tyttöjen matematiikkaolympialaiset järjestetään 13.-19.4.2023 Sloveniassa.

## Menneet kilpailut

Lue kilpailijoiden ja joukkueenjohdon mietteitä kilpailusta [Dimensio-lehdestä](https://dimensiolehti.fi/?s=egmo)!

<div class="list-group">
{% for k in kilpailut %}
<div class="row list-group-item">
<div class="col-xs-1 col-sm-1">{{ k['vuosi'] | markdownify | safe }}</div>
<div class="col-xs-2 col-sm-2">{{ k['paikka'] | markdownify | safe }}</div>
<div class="col-xs-1">{{ k['tehtavat'] | markdownify | safe }}</div>
<div class="col-xs-2 col-sm-2">{{ k['ratkaisut'] | markdownify | safe }}</div>
<div class="col-xs-3 col-sm-3">{{ k['kertomus'] | markdownify | safe }}</div>  
<div class="col-xs-3 col-sm-3">{{ k['edustajat'] | markdownify | safe }}</div>
</div>
{% endfor %}
</div>
