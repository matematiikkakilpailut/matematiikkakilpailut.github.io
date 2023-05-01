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

{% macro f(val) %}
{%- if val %}
<a href="{{ val }}">pdf</a>
{%- else %}
&mdash;
{%- endif %}
{%- endmacro %}

<div role="list">
<div class="row flex-wrap mb-3" role="heading">
<div class="col-3"><strong>Vuosi</strong></div>
<div class="col-3"><strong>Tehtävät</strong></div>
<div class="col-3"><strong>Ratkaisut</strong></div>
<div class="col-3"><strong>Tulokset</strong></div>
</div>
<hr>
{% for k in kilpailut %}
<div class="d-flex list-group-item" role="listitem">
<div class="col-3">{{ k['vuosi'] }}</div>
<div class="col-3">{{ f(k['tehtavat'] ) }}</div>
<div class="col-3">{{ f(k['ratkaisut']) }}</div>
<div class="col-3">{{ f(k['tulokset'] ) }}</div>
</div>
{% endfor %}
</div>
