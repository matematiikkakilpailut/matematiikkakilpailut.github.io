---
layout: page
title: MAOLin matematiikka&shy;kilpailut
url: /MAOL/
description: >-
  Matemaattisten aineiden opettajien liitto MAOL järjestää
  matematiikkakilpailuja peruskoululaisille ja lukiolaisille.
  Kilpailussa menestyneitä kutsutaan kilpailuvalmennukseen,
  jonka kautta valitaan joukkue matematiikkaolympialaisiin.
  Tällä sivulla on lukiosarjojen loppukilpailun tehtäviä
  ja ratkaisuja.
---
## Peruskoulun matematiikka&shy;kilpailu

Peruskoulun matematiikka&shy;kilpailu on suunnattu ensi sijassa
peruskoulun 9. luokan oppilaille, mutta ei osallistumista
nuoremmiltakaan ole kielletty. Kilpailussa on kaksi kierrosta.
Alkukilpailu pidetään kouluissa. Loppukilpailuun kutsutaan noin 20
alkukilpailun parasta. Loppukilpailuun osallistuu yleensä kaksi
virolaista vierailijaa, ja Peruskoulun kilpailun kaksi parasta on
voinut osallistua Viron vastaavaan kilpailuun. Peruskoulun
matematiikka&shy;kilpailun tehtäviä ja ratkaisuja löytyy
[MAOL:n kilpailusivulta][maolpk].

[maolpk]: https://maol.fi/neljan-tieteen-kisat/vanhat-kilpailutehtavat/

## Lukion matematiikka&shy;kilpailu

### Yleistä

Suomessa kansallisen kilpailun järjestää Matemaattisten Aineiden
Opettajien Liitto eli [MAOL ry][maol]. Kilpailussa on kolme sarjaa iän
mukaan: *avoin*, *väli-* ja *perussarja*. Alkukilpailusta karsitaan
kilpailijat *loppukilpailuun*, jossa on sarjoista huolimatta vain
yhdet tehtävät.

Jonkin verran MAOL:n Lukion matematiikka&shy;kilpailun alkukilpailutehtäviä
löytyy [MAOL:n kilpailusivuilta][maollukio].

[maol]: http://www.maol.fi
[maollukio]: https://maol.fi/neljan-tieteen-kisat/vanhat-kilpailutehtavat/

### Alkukilpailun tehtäviä ja ratkaisuja

Lukion matematiikka&shy;kilpailun tehtäviä ja ratkaisuja muutamilta
vuosilta löytyy pdf-muotoisina oheisesta taulukosta.
<div class="list-group"></div>
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Vuosi</strong></div>
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Tehtävät</strong></div>
<div class="col-xs-6"><strong>Ratkaisut</strong></div>
</div>   
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1">2016</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="2016/al2016.pdf">pdf</a></div>
<div class="col-xs-6"><a href="2016/al2016ratk.pdf">pdf</a></div>
</div>
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1">2015</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="2015/teht2015.pdf">pdf</a></div>
<div class="col-xs-6"><a href="2015/ala2015ratk.pdf">avoimen sarjan tehtävät ja ratkaisuja</a></div>
</div>
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1">2014</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="2014/alkukteht2014.pdf">pdf</a></div>
<div class="col-xs-6"><a href="2014/alkukratk2014.pdf">pdf</a>, 
  <a href="2014/avaratk.pdf">lisää avoimen sarjan ratkaisuja</a></div>
  </div>
{% assign vt = "2013 2012 2011 2010 2009" | split: " " %}
{% for v in vt %}
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1">{{ v }}</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="{{ v }}/tehtalku{{ v }}.pdf">pdf</a></div>
<div class="col-xs-6"><a href="{{ v }}/ratkalku{{ v }}.pdf">pdf</a></div>
</div>
{% endfor %} 
  
  



### Loppukilpailun tehtäviä ja ratkaisuja

Lukion matematiikka&shy;kilpailun loppukilpailu on järjestetty vuodesta
1997 alkaen. Tässä tehtäviä ja ratkaisuja sekä PostScript- (lyh. ps)
että pdf-muodossa seuraavan taulukon mukaisesti.

<div class="list-group">
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Vuosi</strong></div>
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Tehtävät</strong></div>
<div class="col-xs-6"><strong>Ratkaisut</strong></div>
</div>
{% assign vt = "2019 2018 2017 2016 2015 2014 2013 2012 2011 2010" | split: " " %}
  {% for v in vt %}
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1">{{ v }}</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="{{ v }}/lukm{{ v }}.pdf">pdf</a></div>
<div class="col-xs-6"><a href="{{ v }}/lukm{{ v }}r.pdf">pdf</a></div>
</div>
{% endfor %}
{% assign vt = "2009 2008 2007 2006 2005 2004 2003 2002 2001 2000" | split: " " %}
{% for v in vt %}
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1">{{ v }}</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="{{ v }}/lukm{{ v }}.ps">ps</a>
  <a href="{{ v }}/lukm{{ v }}.pdf">pdf</a></div>
<div class="col-xs-6"><a href="{{ v }}/lukm{{ v }}r.pdf">pdf</a></div>
</div>
{% endfor %}
{% assign vt = "99 98 97" | split: " " %}
{% for v in vt %}
<div class="row list-group-item">
<div class="col-xs-3 col-sm-2 col-md-1">19{{ v }}</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="19{{ v }}/lukm{{ v }}.ps">ps</a>
  <a href="19{{ v }}/lukm{{ v }}.pdf">pdf</a></div>
<div class="col-xs-6"><a href="19{{ v }}/lukm19{{ v }}r.pdf">pdf</a></div>
</div>
{% endfor %}


