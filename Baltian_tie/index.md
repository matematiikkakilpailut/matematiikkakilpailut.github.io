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

<div class="list-group">
{% for k in kilpailut %}
<div class="row list-group-item">
<div class="col-xs-1 col-md-1">{% if k['vuosi'] | length %}{{ k['vuosi'] | markdownify | safe }}{% endif %}</div>
<div class="col-xs-2 col-md-2">{% if k['paikka'] | length %}{{ k['paikka'] | markdownify | safe }}{% endif %}</div>
<div class="col-xs-2 col-md-1">{% if k['sijoitus'] | length %}{{ k['sijoitus'] | markdownify | safe }}{% endif %}</div>
<div class="col-xs-3 col-md-1">{% if k['tehtavat'] | length %}{{ k['tehtavat'] | markdownify | safe }}{% endif %}</div>
<div class="col-xs-4 col-md-2">{% if k['ratkaisut'] | length %}{{ k['ratkaisut'] | markdownify | safe }}{% endif %}</div>
<div class="col-xs-11 col-xs-offset-1 col-md-5 col-md-offset-0">{% if k['joukkue'] | length %}{{ k['joukkue'] | markdownify | safe }}{% endif %}</div>
</div>
{% endfor %}
</div>




