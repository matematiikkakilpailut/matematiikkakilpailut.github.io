---
layout: page
title: MAOLin matematiikkakilpailut
url: /MAOL/
eleventyNavigation:
  title: MAOL
  parentKey: /kilpailut/
description: >-
  Matemaattisten aineiden opettajien liitto MAOL järjestää
  matematiikkakilpailuja peruskoululaisille ja lukiolaisille.
  Kilpailussa menestyneitä kutsutaan kilpailuvalmennukseen,
  jonka kautta valitaan joukkue matematiikkaolympialaisiin.
  Tällä sivulla on lukiosarjojen loppukilpailun tehtäviä
  ja ratkaisuja.
---
Matemaattisten aineiden opettajien liitto [MAOL](https://maol.fi/) 
järjestää vuosittain 
[matematiikkakilpailuja](https://maol.fi/neljan-tieteen-kisat/) 
peruskoululaisille ja lukiolaisille. Alkukilpailut pidetään
omissa kouluissa syksyisin. Alkukilpailun parhaat pääsevät
seuraavan vuoden alussa pidettävään loppukilpailuun. 
Kilpailuihin voi päästä mukaan kertomalla matematiikan 
opettajalleen osallistumishalustaan hyvissä ajoin ennen
kilpailua.

## Peruskoulun matematiikkakilpailu

Peruskoulun matematiikkakilpailu on suunnattu ensi sijassa
peruskoulun 9. luokan oppilaille, mutta myös nuoremmat oppilaat
voivat mainiosti osallistua. Loppukilpailuun osallistuu yleensä kaksi
virolaista vierailijaa, ja peruskoulun kilpailun kaksi parasta on
voinut osallistua Viron vastaavaan kilpailuun. Peruskoulun
matematiikkakilpailun tehtäviä ja ratkaisuja löytyy
[MAOL:n kilpailusivulta][maolpk].

[maolpk]: https://maol.fi/neljan-tieteen-kisat/vanhat-kilpailutehtavat/

## Lukion matematiikkakilpailu

### Yleistä

Lukion kilpailussa on kolme sarjaa iän
mukaan: *avoin*, *väli-* ja *perussarja*. Näistä avoin sarja
on vaikein. Kunkin sarjan parhaat pääsevät loppukilpailuun, 
jossa on sarjoista huolimatta vain yhdet tehtävät.

Peruskoululaiset voivat halutessaan osallistua lukion
kilpailuun.

Jonkin verran MAOL:n Lukion matematiikkakilpailun alkukilpailutehtäviä
löytyy [MAOL:n kilpailusivuilta][maollukio].

[maol]: http://www.maol.fi
[maollukio]: https://maol.fi/neljan-tieteen-kisat/vanhat-kilpailutehtavat/

### Alkukilpailun tehtäviä ja ratkaisuja

Lukion matematiikkakilpailun tehtäviä ja ratkaisuja muutamilta
vuosilta löytyy pdf-muotoisina oheisesta taulukosta.

{% macro f(text) %}{{ text | d('&mdash;', true) | markdownify | safe }}{% endmacro %}

<div role="list">
<div class="row flex-wrap mb-3" role="heading">
  <div class="col-4 col-md-3">{{ f("**Vuosi**") }}</div>
  <div class="col-4 col-md-3">{{ f("**Tehtävät**") }}</div>
  <div class="col-4 col-md-3">{{ f("**Ratkaisut**") }}</div>
</div>
<hr>
{% for v in alkukilpailu %}
<div class="row flex-wrap mb-3" role="listitem">
  <div class="col-4 col-md-3">{{ f(v['vuosi']) }}</div>
  <div class="col-4 col-md-3"><a href="{{ f(v['tehtavat']) }}">pdf</a></div>
  <div class="col-4 col-md-3"><a href="{{ f(v['ratkaisut']) }}">pdf</a></div>
</div>
{% endfor %}
</div>

### Loppukilpailun tehtäviä ja ratkaisuja

Lukion matematiikkakilpailun loppukilpailu on järjestetty vuodesta
1997 alkaen. Tässä tehtäviä ja ratkaisuja pdf-muodossa seuraavan taulukon mukaisesti.

<div role="list">
<div class="row flex-wrap mb-3" role="heading">
  <div class="col-4 col-md-3">{{ f("**Vuosi**") }}</div>
  <div class="col-4 col-md-3">{{ f("**Tehtävät**") }}</div>
  <div class="col-4 col-md-3">{{ f("**Ratkaisut**") }}</div>
</div>
<hr>
{% for v in loppukilpailu %}
<div class="row flex-wrap mb-3" role="listitem">
  <div class="col-4 col-md-3">{{ f(v['vuosi']) }}</div>
  <div class="col-4 col-md-3"><a href="{{ f(v['tehtavat']) }}">pdf</a></div>
  <div class="col-4 col-md-3"><a href="{{ f(v['ratkaisut']) }}">pdf</a></div>
</div>
{% endfor %}
</div>
