---
layout: page
title: MAOLin matematiikkakilpailut
url: /MAOL/
eleventyNavigation:
  key: MAOL
  parent: kilpailut
  order: 0
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

<div class="list-group"></div>
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Vuosi</strong></div>
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Tehtävät</strong></div>
<div class="col-xs-6"><strong>Ratkaisut</strong></div>
</div> 
{% for v in alkukilpailu %}
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1">{{ v.vuosi }}</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="{{ v.tehtavat }}">pdf</a></div>
<div class="col-xs-6"><a href="{{ v.ratkaisut }}">pdf</a></div>
</div>
{% endfor %}


### Loppukilpailun tehtäviä ja ratkaisuja

Lukion matematiikkakilpailun loppukilpailu on järjestetty vuodesta
1997 alkaen. Tässä tehtäviä ja ratkaisuja sekä PostScript- (lyh. ps)
että pdf-muodossa seuraavan taulukon mukaisesti.

<div class="list-group">
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Vuosi</strong></div>
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Tehtävät</strong></div>
<div class="col-xs-6"><strong>Ratkaisut</strong></div>
</div>
{% for v in loppukilpailu %}
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1">{{ v.vuosi }}</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="{{ v.tehtavat }}">pdf</a></div>
<div class="col-xs-6"><a href="{{ v.ratkaisut }}">pdf</a></div>
</div>
{% endfor %}

