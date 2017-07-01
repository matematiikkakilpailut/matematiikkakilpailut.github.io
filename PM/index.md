---
layout: page
title: Pohjoismainen matematiikka&shy;kilpailu
url: /PM/
description: >-
  Pohjoismainen matematiikkakilpailu sijoittuu vaikeustasoltaan kansallisten
  kilpailujen ja matematiikkaolympialaisten väliin. Osallistujat ratkovat
  tehtäviä yhtä aikaa kukin omassa koulussaan. Kilpailu on yksi tärkeä näyttö
  valittaessa joukkuetta matematiikkaolympialaisiin. Tällä sivulla on aiempien
  kilpailujen tehtäviä, ratkaisuja ja tulostietoja.
kilpailut:
  - vuosi: 2009
    tehtavat: 2009/PM2009.pdf
    ratkaisut: 2009/PM2009r.pdf
    tulokset: 2009/nmc2009results.pdf
  - vuosi: 2010
    tehtavat: 2010/PM2010.pdf
    ratkaisut: 2010/PM2010r.pdf
    tulokset: 2010/PM2010tul.pdf
  - vuosi: 2011
    tehtavat: 2011/PM2011.pdf
    ratkaisut: 2011/PM2011r.pdf
    tulokset: 2011/PM2011tul.pdf
  - vuosi: 2012
    tehtavat: 2012/PM2012.pdf
    ratkaisut: 2012/PM2012r.pdf
    tulokset: 2012/nmc2012res.pdf
  - vuosi: 2013
    tehtavat: 2013/PM2013.pdf
    ratkaisut: 2013/PM2013rat.pdf
    tulokset: 2013/PM2013tul.pdf
  - vuosi: 2014
    tehtavat: "2014/nmc2014_Fin.pdf"
    ratkaisut: "2014/NMC2014ratk.pdf"
    tulokset: "2014/NMC2014_Results.pdf"
  - vuosi: 2015
    tehtavat: "2015/NMC2015suom.pdf"
    ratkaisut: "2015/NMC2015ratk.pdf"
    tulokset: "2015/NMC2015_Results.pdf"
  - vuosi: 2016
    tehtavat: "2016/NMC2016suom.pdf"
    ratkaisut: "2016/NMC2016ratk.pdf"
    tulokset: "2016/NMC2016_tulokset.pdf"
  - vuosi: 2017
    tehtavat: "2017/NMC2017suom.pdf"
    ratkaisut: ""
    tulokset: ""
---
## Pohjoismainen matematiikka&shy;kilpailu

### Yleistä

Pohjoismainen matematiikka&shy;kilpailu on kouluesimerkki pohjoismaisesta
joustavasta tavasta hoitaa asioita. Kilpailuja on käyty vuodesta 1987,
kun todettiin, että kansallisten kilpailujen ja
matematiikka&shy;olympialaisten väliin tarvitaan sopivan&shy;tasoinen kisa.
Järjestysvuoro kiertää käänteisessä ruotsinkielisen maannimen
mukaisessa järjestyksessä osallistuvissa maissa, ja kilpailu
järjestetään yht'aikaa kunkin kilpailijan omassa koulussa.
Pohjoismaisessa matematiikka&shy;olympialaisissa noudatetaan käytännössä
vakiintuneita [käytäntöjä ja sääntöjä](nmcrules.html).

Suomen enintään 20 edustajaa Pohjoismaiseen matematiikka&shy;kilpailuun
valitaan olympia&shy;valmennukseen osallistuvien ja Lukion
matematiikka&shy;kilpailussa menestyneiden joukosta. Valittuihin ja heidän
kouluihinsa otetaan yhteyttä kirjeitse tai sähköposteitse joitakin
vikkoja ennen kilpailua. Kilpailu on yksi tärkeä näyttö, kun valitaan
joukkuetta kesän kansainvälisiin matematiikka&shy;olympialaisiin ja
henkilöitä toukokuiselle joukkeen valinta- ja valmennusviikolle.

Tanskan matematiikka&shy;olympia&shy;valmennus ylläpitää Pohjoismaisen
matematiikka&shy;kilpailun [virallista kotisivua](http://www.georgmohr.dk/nmcperm/).
Sieltä löytyvät mm. kaikki kilpailutehtävät ja ratkaisut
englanninkielisinä ja useiden kilpailujen tehtävät eri pohjoismaisilla
kielillä.

### Tehtävät ja ratkaisut

Vuosien 1987–1994 tehtävät ja ratkaisut ovat tarjolla kirjassa
_Matti Lehtinen: Matematiikan olympiakirja._ Näiden
vuosien [tehtävät](nmct87_94.pdf) ja [ratkaisut](nmcr87_94.pdf) saa myös
oheisista linkeistä.

[Vuosien 1995–2016 tehtävät ja ratkaisut](nmckaikki.pdf) ovat
ladattavissa yhtenä tiedostona pdf-muodossa. Vuodesta 1995 lähtien on
tarjolla kunkin vuoden tehtäviä ja ratkaisuja sekä PostScript- (lyh.
ps) että pdf-muodossa seuraavan taulukon mukaisesti.

<div class="list-group">
{% assign c = 'class="col-xs-3 col-sm-2 col-md-1"' %}
<div class="row list-group-item">
<div {{ c }}><strong>Vuosi</strong></div>
<div {{ c }}><strong>Tehtävät</strong></div>
<div {{ c }}><strong>Ratkaisut</strong></div>
<div {{ c }}><strong>Tulokset</strong></div>
</div>
{% assign vt = "1995 1996 1997 1998 1999 2000 2001" | split: " " %}
{% for v in vt %}
<div class="row list-group-item">
<div {{ c }}>{{ v }}</div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}.ps">ps</a> <a href="{{ v }}/PM{{ v }}.pdf">pdf</a></div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}r.ps">ps</a> <a href="{{ v }}/PM{{ v }}r.pdf">pdf</a></div>
</div>
{% endfor %}
{% assign vt = "2002 2003 2004" | split: " " %}
{% for v in vt %}
<div class="row list-group-item">
<div {{ c }}>{{ v }}</div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}.ps">ps</a> <a href="{{ v }}/PM{{ v }}.pdf">pdf</a></div>
</div>
{% endfor %}
<div class="row list-group-item">
<div {{ c }}>2005</div>
<div {{ c }}><a href="2005/PM2005.ps">ps</a> <a href="2005/PM2005.pdf">pdf</a></div>
<div {{ c }}></div>
<div {{ c }}><a href="2005/PM2005tul.html">html</a></div>
</div>
{% assign vt = "2006 2007 2008" | split: " " %}
{% for v in vt %}
<div class="row list-group-item">
<div {{ c }}>{{ v }}</div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}.ps">ps</a> <a href="{{ v }}/PM{{ v }}.pdf">pdf</a></div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}r.pdf">pdf</a></div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}tul.pdf">pdf</a></div>
</div>
{% endfor %}
{% for k in page.kilpailut %}
<div class="row list-group-item">
<div {{ c }}>{{ k['vuosi'] }}</div>
<div {{ c }}><a href="{{ k['tehtavat'] }}">pdf</a></div>
<div {{ c }}><a href="{{ k['ratkaisut'] }}">pdf</a></div>
<div {{ c }}>{% if k['tulokset'] != null %}<a href="{{ k['tulokset'] }}">pdf</a>{% endif %}</div>
</div>
{% endfor %}
</div>
