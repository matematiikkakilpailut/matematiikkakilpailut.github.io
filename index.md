---
layout: page
title: Matematiikkakilpailut ja olympiavalmennus
alert: yes
description: >-
  Matematiikkakilpailujen tarkoituksena on kannustaa lahjakkaita nuoria
  harrastamaan matematiikkaa. Kansainvälisiin kilpailuihin valmennetaan
  halukkaita. Valmennus koostuu valmennusviikonlopuista ja kirjevalmennuksesta.
  Valmennettavien joukosta valitaan edustajat kansainvälisiin kilpailuihin,
  kuten Kansainvälisiin matematiikkaolympialaisiin.
url: /
eleventyNavigation:
  key: root
  title: Valmennus
style: |
  [data-bs-theme="dark"] .light-element { display: none; }
  [data-bs-theme="light"] .dark-element { display: none; }
---
<picture class="light-element">
  <source srcset="/kuvat/oph_light.webp" type="image/webp">
  <img class="float-sm-end d-block mx-auto mb-2 ms-md-4" loading="lazy" src="/kuvat/oph_light.png" width="180" height="174" alt="Opetushallitus rahoittaa hanketta">
</picture>
<picture class="dark-element">
  <source srcset="/kuvat/oph_dark.webp" type="image/webp">
  <img class="float-sm-end d-block mx-auto mb-2 ms-md-4" loading="lazy" src="/kuvat/oph_dark.png" width="180" height="174" alt="Opetushallitus rahoittaa hanketta">
</picture>


[Matematiikkakilpailuiden](kilpailut) tarkoituksena on kannustaa
lahjakkaita nuoria harrastamaan matematiikkaa. Tähän liittyvästä
valmennuksesta ja kilpailuihin osallistumisesta vastaa Suomessa 
[Suomen matemaattisen yhdistyksen](http://www.matemaattinenyhdistys.fi/) 
[Valmennusjaosto](valmentajat).

Valmennus koostuu yleensä viikonloppuisin Päivölän opistolla
järjestettävistä [**valmennustapahtumista**](kaytanto) 
(ks. [aikataulu](aikataulu)) sekä [**kirjevalmennuksesta**](valmennus),
joka on tarkoitettu kaikille, myös niille, jotka eivät voi
osallistua valmennustapahtumiin. **Tilaisuudet ovat kaikille
koululaisille avoimia** ja ne on suunnattu erityisesti
lukio- ja yläkouluikäisille.

[Kilpailuja](kilpailut) on eri tasoilla kansallisista
alueellisista kilpailuista Kansainvälisiin Matematiikkaolympialaisiin.
Niihin pääsee mukaan ottamalla ahkerasti osaa valmennukseen
ja tulemalla valituksi joukkueeseen.

{#
**[Ilmoittaudu](https://www.paivola.fi/fi/matematiikkakilpailuvalmennukseen-ilmoittautuminen/)
seuraavaan valmennusviikonloppuun vähintään
viikkoa etukäteen!**
#}


## Uutisia {id=uutisia}

{%- set uutiset = collections.uutinen | reverse | batch(7) | first %}
<ul>
{%- for artikkeli in uutiset %}
<li> {{ artikkeli.templateContent | safe }}
</li>
{%- endfor %}
<li><a href="/uutiset">Lisää uutisia</a></li>
</ul>



## Muut aktiviteetit {id=muut-aktiviteetit}

Eräät valmennettavat pitivät [blogia 2018-2019][blog].

[Helsingin yliopiston matematiikan ja tilastotieteen osasto][mathstat]
ja [tiedekasvatuskeskus][tiedekasvatus] järjestävät
[Tekijäryhmä-nimistä matematiikkakerhoa][tekijaryhma] jonka tarkoitus
on tarjota haasteita matematiikasta innostuneille lukiolaisille.

Valmennusjaosto järjesti 28.1.2012 Helsingin yliopistossa
[työpajan Epsilonit kirjaa tutkimassa - matematiikka harrastuksena][epsilonit].

Vuosittain järjestetään
[alueelliset matematiikkakilpailut seitsemäsluokkalaisille][seiskat]
Helsingissä, Oulussa, Satakunnassa ja Turussa yhteistyössä paikallisten korkeakoulujen
sekä Summamutikka- ja OuLUMA-keskusten kanssa.

Oulussa LUMA-keskus ja Oulun yliopisto järjestävät
kilpailumatematiikkavalmennustilaisuuksia. Tarkemmin [tästä][oulu].

[blog]: https://blog.matematiikkakilpailut.fi
[mathstat]: http://www.mathstat.helsinki.fi
[tiedekasvatus]: https://www.helsinki.fi/fi/tiedekasvatus
[tekijaryhma]: https://www.helsinki.fi/fi/tiedekasvatus/tekijaryhma
[epsilonit]: /kokoukset/epsilon
[seiskat]: /seiskat
[oulu]: https://ouluma.fi/2012/08/matematiikkavalmennus/


## Muuta {id=muuta}

#### Harppi-hankkeessa on kuvattu [matematiikkaharrastajan polku](https://www.mayk.fi/matematiikkalukio/kehitys/matematiikkaharrastajan-polku/)

#### [Po-Shen Lohin haastattelu](/kirjallisuus/Loh.pdf)

USA:n olympiavalmennuksen johtajan syyskuussa 2016 julkaistu haastattelu, joka voi olla opettavaa luettavaa.

#### [Päivölän kansanopisto](https://www.paivola.fi/)

Päivölässä toimii [matematiikkalinja](https://www.matematiikkalinja.fi/),
jonka yhteydessä järjestetään viikonloppuvalmennuksia.

#### [Solmu](http://matematiikkalehtisolmu.fi/)

Matematiikkalehti, johon sinäkin voisit kenties kirjoittaa jotain.
