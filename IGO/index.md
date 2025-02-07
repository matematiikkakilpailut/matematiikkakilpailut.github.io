---
layout: page
title: Iranin geometriakilpailu – IGO
url: /IGO/
eleventyNavigation:
  title: IGO
  parentKey: /kilpailut/
description: >-
  IGO on kansainvälinen geometriakilpailu, jossa on neljä sarjaa 7.-luokkalaisista lukiolaisiin.
  Suomalaiset osallistuvat syksyisin etänä - katso menneet kilpailut ja miten hakea mukaan.
---

## Yleistä

[Iranin geometriakilpailussa](https://igo-official.ir) mitellään nimensä mukaisesti geometrian taidoista. Kukin osallistujamaa ottaa osaa omasta maasta käsin ja kilpailun yhtenä tavoitteena onkin lisätä geometriasta pitävien keskinäistä kommunikointia sekä kotimaissa että kansainvälisesti. Kilpailu järjestettiin ensimmäisen kerran vuonna 2014 ja Suomi on ottanut siihen osaa vuodesta 2017 lähtien. 

Iranin geometriakilpailussa on tarjolla on neljä sarjaa: perustaso 7.-ja 8.-luokkalaisille, keskitaso 9.-luokkalaisille ja lukion ensimmäisen vuoden oppilaille, vaativa taso lukion 2. ja 3. luokan oppilaille sekä avoin sarja. Kilpailu tarjoaakin etenkin nuorimmille kilpailijoille hyvän mahdollisuuden ensimmäisiin kosketuksiin kansainvälisiin kilpailuihin. Kukin osallistujamaa voi osallistua kilpailuun niin monella kilpailijalla kuin haluaa, mutta vain neljä kilpailijaa/sarja otetaan huomioon virallisissa tuloksissa.

Syksyisin pidettävään kilpailuun kutsutaan Suomessa edellisenä keväänä ja kesänä aktiivisia ja menestyneitä valmennettavia luokka-asteet huomioiden. Kutsuttavien ja osallistujien määrä vaihtelee vuosittain muun muassa ratkaisuiden tarkistamiseen käytössä olevista resursseista riippuen. Mikäli olet kiinnostunut ottamaan osaan kilpailuun, mutta et ole saanut kutsua, niin kysythän vapaista paikoista Lauri Hallilalta (laurihallila@gmail.com). Etenkin perustasosta saattaa löytyä vapaita paikkoja.

Lisätietoa kilpailusta löytyy yllä mainitulta [kotisivulta](https://igo-official.ir). Kysymyksiä voi myös esittää Lauri Hallilalle.

## Menneet kilpailut

Kilpailut vuodesta 2017 lähtien.

{% macro f(text) %}{{ text | default('&mdash;', true) | markdownify | safe }}{% endmacro %}

<div role="list">
{% for k in data %}
{% set header = loop.index0 == 0 %}
<div class="row flex-wrap mb-2" role="listitem">
    <div class="col-2 col-sm-2">{{ f( k['vuosi'] ) }}</div>
    <div class="col-5 col-sm-2">{{ f( k['tehtavat'] ) }}</div>
    <div class="col-5 col-sm-2">{{ f( k['ratkaisut'] ) }}</div> 
    <div class="col-12 col-sm-6">{{ f( k['menestys'] ) }}</div>
</div>
{%- if header %}<hr>{% endif %}
{% endfor %}
</div>
