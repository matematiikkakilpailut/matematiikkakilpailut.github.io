---
layout: page
title: Baltian tie
url: /Baltian_tie/
eleventyNavigation:
  key: Baltian_tie
  title: Baltian tie
  parent: kilpailut
  order: 4
description: >-
  Baltian Tie on matematiikkakilpailu Itämeren alueen ja Pohjoismaiden
  lukiolaisjoukkueille. Kilpailun nimi on muisto Baltian maissa vuonna
  1989 järjestetystä suurestä itsenäisyysmielenosoituksesta. Suomi on
  osallistunut vuodesta 1993 alkaen. Tällä sivulla on tehtävät ja
  malliratkaisuja sekä Suomen tulostietoja.
---

## Yleistä

Baltian Tie -joukkuematematiikkakilpailu pidettiin ensimmäisen kerran vuonna 1990
Latviassa, Riiassa. Kilpailun nimi on muisto kaikissa Baltian maissa
yhtäaikaisesti järjestetystä suurestä itsenäisyysmielenosoituksesta,
kun vuonna 1989 yli miljoona Viron, Latvian ja Liettuan asukasta
asettui käsi kädessä Via Balticalle neuvostovaltaa vastustamaan.

Suomi on lähettänyt kilpailuun viisijäsenisen joukkueensa vuodesta
1993 alkaen. Joukkueen menestys on ollut kohtalainen; parhaimmillaan
vuonna 2005 Suomi oli toinen kahdentoista maan joukossa.

Osallistuvia maita ovat Viro, Latvia, Liettua, Suomi, Ruotsi, Norja,
Tanska, Islanti, Puola, Venäjä (Pietari) ja Saksa. Vuodesta 2001
alkaen järjestäjämaa on voinut kutsua kilpailuun myös yhden
vierailevan maan. Vuonna 2001 kutsuttiin Israel, 2004 ja 2014 Valko-Venäjä,
2005 Belgia, 2011 Etelä-Afrikka ja 2015 Hollanti.

Baltian Tie -kilpailussa viisihenkiset joukkueet toimivat yhteistyössä. Tehtäviä on 20, ja vaikka ne ovat ehkä hiukan helpompia kuin Kansainvälisten Matematiikkaolympialaisten tehtävät, niin niiden ratkaiseminen neljän ja puolen tunnin kilpailun aikana vaatii melkein välttämättä joukkueen työnjakoa. Joskus työnjako voi ilmetä niin, että toinen joukkueenjäsen jalostaa toisen keksimän idean valmiiksi ratkaisuksi.

## Tehtävät ja ratkaisut

Kaikkien Baltian Tie -kilpailujen tehtävät (540 kappaletta!) vuosilta
1999-2016 voi ladata yhtenä [pdf-tiedostona tästä](bwteht.pdf).
Ratkaisukokoelmat ovat tällä hetkellä saatavina
[vuosien 1990-99](Btratk1990_99.pdf) ja
[vuosien 2000-09](Btratk2000_09.pdf) kilpailutehtäviin. Linkkejä eri vuosien tehtävien ratkaisuihin löytyy alla olevasta taulukosta.

Melkein kaikkien Baltian Tie -kilpailujen tehtävät ja ratkaisut
löytyvät englanninkielisinä
[Viron matematiikkakilpailujen verkkosivuilta](http://www.math.olympiaadid.ut.ee/eng/html/?id=bw).


## Menneet kilpailut

{% macro f(val) %}{{ val | default('&mdash;', true) | markdownify | safe }}{% endmacro %}

<div role="list">
{% for k in kilpailut %}
<div class="row flex-wrap mb-2" role="listitem">
<div class="col-1 col-lg-1">{{ f(k['vuosi']     ) }}</div>
<div class="col-2 col-lg-1">{{ f(k['paikka']    ) }}</div>
<div class="col-3 col-lg-2">{{ f(k['sijoitus']  ) }}</div>
<div class="col-2 col-lg-1">{{ f(k['tehtavat']  ) }}</div>
<div class="col-4 col-lg-2">{{ f(k['ratkaisut'] ) }}</div>
<div class="col-12 col-sm-10 col-lg-5 offset-sm-1 offset-lg-0">{{ f(k['joukkue']   ) }}</div>
</div>
{% if loop.index0 == 0 %}<hr>{% endif %}
{% endfor %}
</div>
