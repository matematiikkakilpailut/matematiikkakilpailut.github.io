---
layout: page
title: MAOLin matematiikkakilpailut
url: /MAOL/
---
{% include JB/setup %}

## Peruskoulun matematiikkakilpailu

Peruskoulun matematiikkakilpailu on suunnattu ensi sijassa
peruskoulun 9. luokan oppilaille, mutta ei osallistumista
nuoremmiltakaan ole kielletty. Kilpailussa on kaksi kierrosta.
Alkukilpailu pidetään kouluissa. Loppukilpailuun kutsutaan noin 20
alkukilpailun parasta. Loppukilpailuun osallistuu yleensä kaksi
virolaista vierailijaa, ja Peruskoulun kilpailun kaksi parasta on
voinut osallistua Viron vastaavaan kilpailuun. Peruskoulun
matematiikkakilpailun tehtäviä ja ratkaisuja löytyy
[MAOL:n kilpailusivulta][maolpk].

[maolpk]: http://www.maol.fi/kilpailut/peruskoulun-matematiikkakilpailu/kilpailutehtaeviae/

## Lukion matematiikkakilpailu

### Yleistä

Suomessa kansallisen kilpailun järjestää Matemaattisten Aineiden
Opettajien Liitto eli [MAOL ry][maol]. Kilpailussa on kolme sarjaa iän
mukaan: *avoin*, *väli-* ja *perussarja*. Alkukilpailusta karsitaan
kilpailijat *loppukilpailuun*, jossa on sarjoista huolimatta vain
yhdet tehtävät.

Jonkin verran MAOL:n Lukion matematiikkakilpailun alkukilpailutehtäviä
löytyy [MAOL:n kilpailusivuilta][maollukio].

[maol]: http://www.maol.fi
[maollukio]: http://www.maol.fi/kilpailut/4tieteenkisat/lukion-matematiikka/tehtaeviae/

### Alkukilpailun tehtäviä ja ratkaisuja

Lukion matematiikkakilpailun tehtäviä ja ratkaisuja muutamilta
vuosilta löytyy pdf-muotoisina oheisesta taulukosta.

<div class="row">
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Vuosi</strong></div>
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Tehtävät</strong></div>
<div class="col-xs-6"><strong>Ratkaisut</strong></div>
</div>
{% assign vt = "2009 2010 2011 2012 2013" | split: " " %}
{% for v in vt %}
<div class="row">
<div class="col-xs-3 col-sm-2 col-md-1">{{ v }}</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="{{ v }}/tehtalku{{ v }}.pdf">pdf</a></div>
<div class="col-xs-6"><a href="{{ v }}/ratkalku{{ v }}.pdf">pdf</a></div>
</div>
{% endfor %}
<div class="row">
<div class="col-xs-3 col-sm-2 col-md-1">2014</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="2014/alkukteht2014.pdf">pdf</a></div>
<div class="col-xs-6"><a href="2014/alkukratk2014.pdf">pdf</a>,
   <a href="2014/avaratk.pdf">avoimen sarjan ratkaisuja</a></div>
</div>


### Loppukilpailun tehtäviä ja ratkaisuja

Lukion matematiikkakilpailun loppukilpailu on järjestetty vuodesta
1997 alkaen. Tässä tehtäviä ja ratkaisuja sekä PostScript- (lyh. ps)
että pdf-muodossa seuraavan taulukon mukaisesti.

<div class="row">
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Vuosi</strong></div>
<div class="col-xs-3 col-sm-2 col-md-1"><strong>Tehtävät</strong></div>
<div class="col-xs-6"><strong>Ratkaisut</strong></div>
</div>
{% assign vt = "97 98 99" | split: " " %}
{% for v in vt %}
<div class="row">
<div class="col-xs-3 col-sm-2 col-md-1">19{{ v }}</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="19{{ v }}/lukm{{ v }}.ps">ps</a>
  <a href="19{{ v }}/lukm{{ v }}.pdf">pdf</a></div>
<div class="col-xs-6"><a href="19{{ v }}/lukm19{{ v }}r.pdf">pdf</a></div>
</div>
{% endfor %}
{% assign vt = "2000 2001 2002 2003 2004 2005 2006 2007 2008 2009" | split: " " %}
{% for v in vt %}
<div class="row">
<div class="col-xs-3 col-sm-2 col-md-1">{{ v }}</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="{{ v }}/lukm{{ v }}.ps">ps</a>
  <a href="{{ v }}/lukm{{ v }}.pdf">pdf</a></div>
<div class="col-xs-6"><a href="{{ v }}/lukm{{ v }}r.pdf">pdf</a></div>
</div>
{% endfor %}
{% assign vt = "2010 2011 2012 2013 2014 2015" | split: " " %}
{% for v in vt %}
<div class="row">
<div class="col-xs-3 col-sm-2 col-md-1">{{ v }}</div>
<div class="col-xs-3 col-sm-2 col-md-1"><a href="{{ v }}/lukm{{ v }}.pdf">pdf</a></div>
<div class="col-xs-6"><a href="{{ v }}/lukm{{ v }}r.pdf">pdf</a></div>
</div>
{% endfor %}
