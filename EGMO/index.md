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

Suomi on voittanut kilpailusta yhden kullan Aino Aulangon ollessa paras eurooppalainen vuonna 2024. 

[Seuraavat](https://www.egmo.org/egmos/egmo13/) Euroopan tyttöjen matematiikkaolympialaiset järjestetään vuonna 2025 Kosovossa.

## Menneet kilpailut

Lue kilpailijoiden ja joukkueenjohdon mietteitä kilpailusta [Dimensio-lehdestä](https://dimensiolehti.fi/?s=egmo)!

{% macro f(val) %}{{ val | default('&mdash;', true) | markdownify | safe }}{% endmacro %}

<div role="list">
{% for k in kilpailut %}
<div class="row flex-wrap mb-2" role="listitem">
<div class="col-1 col-lg-1">{{ f(k['vuosi']) }}</div>
<div class="col-3 col-lg-2">{{ f(k['paikka']) }}</div>
<div class="col-2 col-lg-1">{{ f(k['tehtavat']) }}</div>
<div class="col-3 col-lg-2">{{ f(k['ratkaisut']) }}</div>
<div class="col-3 col-lg-1">{{ f(k['kertomus']) }}</div>
<div class="col-12 col-sm-11 offset-sm-1 col-lg-4">{{ f(k['edustajat']) }}</div>
</div>
{%- if loop.index0 == 0 %}<hr>{% endif %}
{% endfor %}
</div>
