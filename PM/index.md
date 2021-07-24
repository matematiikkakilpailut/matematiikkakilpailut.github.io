---
layout: page
title: Pohjoismainen matematiikkakilpailu
url: /PM/
eleventyNavigation:
  key: PM
  title: Pohjoismainen
  order: 3
  parent: kilpailut
description: >-
  Pohjoismainen matematiikkakilpailu sijoittuu vaikeustasoltaan kansallisten
  kilpailujen ja matematiikkaolympialaisten väliin. Osallistujat ratkovat
  tehtäviä yhtä aikaa kukin omassa koulussaan. Kilpailu on yksi tärkeä näyttö
  valittaessa joukkuetta matematiikkaolympialaisiin. Tällä sivulla on aiempien
  kilpailujen tehtäviä, ratkaisuja ja tulostietoja.
---

## Yleistä

Pohjoismainen matematiikkakilpailu on kouluesimerkki pohjoismaisesta
joustavasta tavasta hoitaa asioita. Kilpailuja on käyty vuodesta 1987,
kun todettiin, että kansallisten kilpailujen ja
matematiikkaolympialaisten väliin tarvitaan sopivantasoinen kisa.
Järjestysvuoro kiertää käänteisessä ruotsinkielisen maannimen
mukaisessa järjestyksessä osallistuvissa maissa, ja kilpailu
järjestetään yht'aikaa kunkin kilpailijan omassa koulussa.
Pohjoismaisessa matematiikkaolympialaisissa noudatetaan käytännössä
vakiintuneita [käytäntöjä ja sääntöjä](nmcrules.html).

Suomen enintään 20 edustajaa Pohjoismaiseen matematiikkakilpailuun
valitaan olympiavalmennukseen osallistuvien ja Lukion
matematiikkakilpailussa menestyneiden joukosta. Valittuihin ja heidän
kouluihinsa otetaan yhteyttä kirjeitse tai sähköposteitse joitakin
vikkoja ennen kilpailua. Kilpailu on yksi tärkeä näyttö, kun valitaan
joukkuetta kesän kansainvälisiin matematiikkaolympialaisiin ja
henkilöitä huhti-toukokuuss pidettävälle joukkeen valinta- ja valmennusviikolle.

Tanskan matematiikkaolympiavalmennus ylläpitää Pohjoismaisen
matematiikkakilpailun [virallista kotisivua](http://www.georgmohr.dk/nmcperm/).
Sieltä löytyvät mm. kaikki kilpailutehtävät ja ratkaisut
englanninkielisinä ja useiden kilpailujen tehtävät eri pohjoismaisilla
kielillä.

## Tehtävät ja ratkaisut

Vuosien 1987-1994 tehtävät ja ratkaisut ovat tarjolla kirjassa
_Matti Lehtinen: Matematiikan olympiakirja._ Näiden
vuosien [tehtävät](nmct87_94.pdf) ja [ratkaisut](nmcr87_94.pdf) saa myös
oheisista linkeistä.

[Vuosien 1995-2016 tehtävät ja ratkaisut](nmckaikki.pdf) ovat
ladattavissa yhtenä tiedostona pdf-muodossa. 

## Menneet kilpailut

Alla olevassa taulukossa on tietoa menneistä kilpailuista vuodesta 1995 lähtien.

<div class="list-group">
{%- set c = 'class="col-xs-3 col-sm-2 col-md-1"' %}
<div class="row list-group-item">
<div {{ c | safe }}><strong>Vuosi</strong></div>
<div {{ c | safe }}><strong>Tehtävät</strong></div>
<div {{ c | safe }}><strong>Ratkaisut</strong></div>
<div {{ c | safe }}><strong>Tulokset</strong></div>
</div>
{% for k in kilpailut %}
<div class="row list-group-item">
<div {{ c | safe }}>{{ k['vuosi'] }}</div>
<div {{ c | safe }}>{% if k['tehtavat'] %}<a href="{{ k['tehtavat'] }}">pdf</a>{% endif %}</div>
<div {{ c | safe }}>{% if k['ratkaisut'] %}<a href="{{ k['ratkaisut'] }}">pdf</a>{% endif %}</div>
<div {{ c | safe }}>{% if k['tulokset'] %}<a href="{{ k['tulokset'] }}">pdf</a>{% endif %}</div>
</div>
{% endfor %}
{#
{% assign vt = "2008 2007 2006 2005" | split: " " %}
{% for v in vt %}
<div class="row list-group-item">
<div {{ c }}>{{ v }}</div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}.ps">ps</a> <a href="{{ v }}/PM{{ v }}.pdf">pdf</a></div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}r.pdf">pdf</a></div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}tul.pdf">pdf</a></div>
</div>
{% endfor %}
{% assign vt = "2004 2003 2002" | split: " " %}
{% for v in vt %}
<div class="row list-group-item">
<div {{ c }}>{{ v }}</div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}.ps">ps</a> <a href="{{ v }}/PM{{ v }}.pdf">pdf</a></div>
</div>
{% endfor %}
{% assign vt = "2001 2000 1999 1998 1997 1996 1995" | split: " " %}
{% for v in vt %}
<div class="row list-group-item">
<div {{ c }}>{{ v }}</div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}.ps">ps</a> <a href="{{ v }}/PM{{ v }}.pdf">pdf</a></div>
<div {{ c }}><a href="{{ v }}/PM{{ v }}r.ps">ps</a> <a href="{{ v }}/PM{{ v }}r.pdf">pdf</a></div>
</div>
{% endfor %}
</div>
#}
