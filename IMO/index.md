---
layout: page
title: Kansainväliset matematiikkaolympialaiset – IMO
url: /IMO/
eleventyNavigation:
  title: IMO
  parentKey: /kilpailut/
description: >-
  IMO, International Mathematical Olympiad, on vuosittain järjestettävä
  lukiolaisten matematiikkakilpailu. Tällä sivulla on viimeisten kilpailujen
  tehtäviä ja ratkaisuja sekä Suomen tulostietoja.
---

## Yleistä

<abbr>IMO</abbr> (<span lang="en">International Mathematical
Olympiad</span>) sai alkunsa vuonna 1959 Romaniassa. Se on järjestetty
siitä alkaen vuosittain, mutta vuosi 1980 jäi väliin. Kilpailu on
periaatteessa vain yksilöiden välinen, mutta käytännössä joukkueiden
pistesummia vertaillaan innokkaasti.

Nykyään jokainen osallistujamaa lähettää enintään kuusi kilpailijaa,
jotka suorittavat kaksi koetta peräkkäisinä päivinä. Kumpanakin
päivänä ratkaistavana on kolme tehtävää, joista voi kustakin saada
enintään seitsemän pistettä. Enintään puolelle kilpailijoista jaetaan
kulta-, hopea- ja pronssimitaleita noin suhteessa 1 : 2 : 3\. Ne
mitalitta jääneet kilpailijat, jotka ovat ratkaisseet vähintään yhden
tehtävän seitsemän pisteen arvoisesti, saavat kunniamaininnan.

Matematiikkaolympialaisten englanninkielisiltä
[virallisilta kotisivuilta][official] löytyy paljon tietoa, mm.
kaikkien vuosien tehtävät ja melko täydelliset tulosluettelot.
Samanlaista tietoa ja erityisesti tehtävien ratkaisuja löytyy paljon
myös Serbiassa ylläpidettäviltä [The IMO Compendium][compendium]-sivuilta.
Foorumilta [Art of Problem Solving][aops] löytyy paljon
Kansainvälisiin matematiikkaolympialaisiin liittyvää aineistoa.
Myös [Viron valmennussivut][viro] sisältävät kiinnostavaa (vironkielistä)
materiaalia.

[official]: http://www.imo-official.org/
[compendium]: http://www.imomath.com/
[aops]: http://www.artofproblemsolving.com/Forum/viewforum.php?f=87
[viro]: http://www.math.olympiaadid.ut.ee

Matematiikkaolympialaisten kulkua valottaa myös kilpailijoille tarkoitettu
[käytännön opas](https://drive.google.com/file/d/1WbbNOwm8fK9Hi73BCJVjWdZCOZUuUMT7/view).

## Tehtävät ja ratkaisut

Vuosien 1959-1974 tehtävät ja ratkaisut ovat (vaikeasti) saatavilla
kirjasena Matti Lehtinen (toim.):
_Koululaisten kansainväliset matematiikkaolympialaiset_
Kirjayhtymä 1975.
Vuosien 1975-1994 tehtävät ja ratkaisut on koottu kirjaan
_Matti Lehtinen: Matematiikan olympiakirja_, Weilin+Göös 1995,
ISBN 951-35-5990-4, jota sitäkin alkaa olla hankala löytää.

Oheisista linkeistä voi myös ladata matematiikkaolympialaisten
vuosien 1959-74 [tehtävät](https://drive.google.com/file/d/10VLVnFTxScFu5WdUx1Se_KD1zBV9D8xX/view) ja
[tehtävät ja ratkaisut](https://drive.google.com/file/d/1F2qTwqgbsgP3YYlNfa8VbBGZkQ8BoZ6N/view) sekä vuosien 1975-94
[tehtävät](https://drive.google.com/file/d/1ZfXeLHEnGvaQJAuCStN0N8SfHvXOOCDm/view) ja [ratkaisut](https://drive.google.com/file/d/14kV1S1TEPoda_LuMoGKSGhOToxGaQIDx/view). Erityisesti
matematiikkaolympialaisten ensimmäisten vuosien tehtävät ovat selvästi
nykyisiä helpompia ja sopivat siis hyvin kilpailumatematiikan
harjoitteluun. Vuosien 1995-2016 tehtävät ja ratkaisut voi ladata
[tästä](https://drive.google.com/file/d/13x_GWoGjISulE-VT4Py1mRI7xWUmttzC/view) (n. 1 Mt). Myös tämän sivun lopussa oleva
taulukko sisältää linkkejä eri vuosien tehtäviin ja niiden
ratkaisuihin.

## Menneet kilpailut

Lue olympialaisiin valmentautumisesta ja erityisesti vuoden
2018 kilpailusta [Image-lehdestä](https://www.apu.fi/artikkelit/laske-kovempaa).

Alla on tietoa menneistä kilpailuista vuodesta 1993 lähtien. 

<div role="list">
{% for k in kilpailut %}
{% set header = loop.index0 == 0 %}
{% macro f(k, name) %}{{ k[name] | default('&mdash;', true) | markdownify | safe }}{% endmacro %}
<div class="row flex-wrap mb-2" role="listitem">
  <div class="col-12 col-xs-2 col-sm-6 col-lg-1">{{ f(k, 'vuosi') }}</div>
  <div class="col-12 col-xs-2 col-sm-6 col-lg-3">{{ f(k, 'paikka') }}</div>
  <div class="col-12 col-xs-2 col-sm-6 col-lg-1">{{ f(k, 'tehtavat') }}</div>
  <div class="col-12 col-xs-2 col-sm-6 col-lg-2">{{ f(k, 'ratkaisut') }}</div>
  <div class="col-12 col-xs-2 col-sm-6 col-lg-3">{{ f(k, 'sijoitus') }}</div>
  <div class="col-12 col-xs-2 col-sm-6 col-lg-2">{{ f(k, 'muuta') }}</div>
  <div class="col-12 col-lg-10 offset-lg-1">{{ f(k, 'edustajat') }}</div>
</div>
{% if header %}<hr>{% endif %}
{% endfor %}
</div>
