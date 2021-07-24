---
layout: page
title: Iranin geometriakilpailu– IGO
url: /IGO/
eleventyNavigation:
  key: IGO
  parent: kilpailut
  order: 2
---

## Yleistä

[Iranin geometriakilpailussa](https://igo-official.ir) mitellään nimensä mukaisesti geometrian taidoista. Kukin osallistujamaa ottaa osaa omasta maasta käsin ja kilpailun yhtenä tavoitteena onkin lisätä geometriasta pitävien keskinäistä kommunikointia sekä kotimaissa että kansainvälisesti. Kilpailu järjestettiin ensimmäisen kerran vuonna 2014 ja Suomi on ottanut siihen osaa vuodesta 2017 lähtien. 

Iranin geometriakilpailussa on tarjolla on neljä sarjaa: perustaso 7.-ja 8.-luokkalaisille, keskitaso 9.-luokkalaisille ja lukion ensimmäisen vuoden oppilaille, vaativa taso lukion 2. ja 3. luokan oppilaille sekä avoin sarja. Kilpailu tarjoaakin etenkin nuorimmille kilpailijoille hyvän mahdollisuuden ensimmäisiin kosketuksiin kansainvälisiin kilpailuihin. Kukin osallistujamaa voi osallistua kilpailuun niin monella kilpailijalla kuin haluaa, mutta vain neljä kilpailijaa/sarja otetaan huomioon virallisissa tuloksissa.

Syksyisin pidettävään kilpailuun kutsutaan Suomessa edellisenä keväänä ja kesänä aktiivisia ja menestyneitä valmennettavia luokka-asteet huomioiden. Kutsuttavien ja osallistujien määrä vaihtelee vuosittain muun muassa ratkaisuiden tarkistamiseen käytössä olevista resursseista riippuen. Mikäli olet kiinnostunut ottamaan osaan kilpailuun, mutta et ole saanut kutsua, niin kysythän vapaista paikoista Lauri Hallilalta (laurihallila@gmail.com). Etenkin perustasosta saattaa löytyä vapaita paikkoja.

Lisätietoa kilpailusta löytyy yllä mainitulta [kotisivulta](https://igo-official.ir). Kysymyksiä voi myös esittää Lauri Hallilalle.

## Menneet kilpailut

Kilpailut vuodesta 2017 lähtien.

<div class="list-group">
{% for k in data %}
<div class="row list-group-item">
<div class="col-xs-2 col-sm-1">{{ k['vuosi'] | markdownify | safe }}</div>
<div class="col-xs-2">{{ k['tehtavat'] | markdownify | safe }}</div>
<div class="col-xs-2 col-sm-3">{{ k['ratkaisut'] | markdownify | safe }}</div> 
<div class="col-xs-4 col-sm-4">{{ k['menestys'] | markdownify | safe }}</div>
</div>
{% endfor %}
</div>

