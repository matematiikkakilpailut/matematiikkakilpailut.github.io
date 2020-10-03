---
layout: page
title: Iranin geometriakilpailu– IGO
url: /IGO/
kilpailut:
  - vuosi: "**Vuosi**"
    tehtavat: "**Tehtä&shy;vät**"
    ratkaisut: "**Ratkai&shy;sut**"
    menestys: "**Suomen menestys**"
  - vuosi: "[2019](https://igo-official.ir/events/6/)"
    tehtavat: "[pdf](teht2019.pdf)"
    ratkaisut: "[englanniksi](https://igo-official.ir/media/IGO_2019_Booklet_en.pdf)"
    menestys: "**Vaativa taso:** 2 kunniamainintaa <br> **Keskitaso:** 1 pronssi <br>**Perustaso:** 2 kunniamainintaa"
  - vuosi: "[2018](https://igo-official.ir/events/5/)"
    tehtavat: "[pdf](teht2018.pdf)"
    ratkaisut: "[englanniksi](https://igo-official.ir/media/Solutions-en.pdf)"
    menestys: "**Vaativa taso:** 1 pronssi, 2 kunniamainintaa <br> **Keskitaso:** 2 kunniamainintaa"
  - vuosi: "[2017](https://igo-official.ir/events/4/)"
    tehtavat: "[pdf](teht2017.pdf)"
    ratkaisut: "[osa suomeksi](https://matematiikkalehtisolmu.fi/2018/2/IGO.pdf)"
    menestys: "**Vaativa taso:** 1 kunniamaininta <br> **Keskitaso:** 1 pronssi, 1 kunniamaininta <br>**Perustaso:** 1 kunniamaininta"
---

## Yleistä

[Iranin geometriakilpailussa](https://igo-official.ir) mitellään nimensä mukaisesti geometrian taidoista. Kukin osallistujamaa ottaa osaa omasta maasta käsin ja kilpailun yhtenä tavoitteena onkin lisätä geometriasta pitävien keskinäistä kommunikointia sekä kotimaissa että kansainvälisesti. Kilpailu järjestettiin ensimmäisen kerran vuonna 2014 ja Suomi on ottanut siihen osaa vuodesta 2017 lähtien. 

Iranin geometriakilpailussa on tarjolla on neljä sarjaa: perustaso 7.-ja 8.-luokkalaisille, keskitaso 9.-luokkalaisille ja lukion ensimmäisen vuoden oppilaille, vaativa taso lukion 2. ja 3. luokan oppilaille sekä avoin sarja. Kilpailu tarjoaakin etenkin nuorimmille kilpailijoille hyvän mahdollisuuden ensimmäisiin kosketuksiin kansainvälisiin kilpailuihin. Kukin osallistujamaa voi osallistua kilpailuun niin monella kilpailijalla kuin haluaa, mutta vain neljä kilpailijaa/sarja otetaan huomioon virallisissa tuloksissa.

Syksyisin pidettävään kilpailuun kutsutaan Suomessa edellisenä keväänä ja kesänä aktiivisia ja menestyneitä valmennettavia luokka-asteet huomioiden. Kutsuttavien ja osallistujien määrä vaihtelee vuosittain muun muassa ratkaisuiden tarkistamiseen käytössä olevista resursseista riippuen. Mikäli olet kiinnostunut ottamaan osaan kilpailuun, mutta et ole saanut kutsua, niin kysythän vapaista paikoista Lauri Hallilalta (laurihallila@gmail.com). Etenkin perustasosta saattaa löytyä vapaita paikkoja.

Lisätietoa kilpailusta löytyy yllä mainitulta [kotisivulta](https://igo-official.ir). Kysymyksiä voi myös esittää Lauri Hallilalle.

## Menneet kilpailut

Kilpailut vuodesta 2017 lähtien.

<div class="list-group">
{% for k in page.kilpailut %}
<div class="row list-group-item">
<div class="col-xs-2 col-sm-1">{{ k['vuosi'] | markdownify }}</div>
<div class="col-xs-2">{{ k['tehtavat'] | markdownify }}</div>
<div class="col-xs-2 col-sm-3">{{ k['ratkaisut'] | markdownify }}</div> 
<div class="col-xs-4 col-sm-4">{{ k['menestys'] | markdownify }}</div>
</div>
{% endfor %}
</div>

