---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2017"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "8.&ndash;10.9. (viikko 36)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä. Ohjelmassa mm. [iranilainen geometria&shy;kilpailu](http://igo-official.ir/?lang=en) erikseen kutsutuille pe 8.9. klo 12 ja Baltian tie -joukkueen valintakoe, johon kaikki voivat osallistua."
  - pvm: "20.&ndash;22.10. (viikko 42)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä."
  - pvm: "23.10.&ndash;3.11."
    tapahtuma: "[MAOLin perus&shy;koulun matematiikka&shy;kilpailu](http://www.maol.fi/kilpailut/4tieteenkisat/peruskoulun-matematiikkakilpailu/)"
  - pvm: "30.10."
    tapahtuma: "[MAOLin lukion matematiikka&shy;kilpailu](http://www.maol.fi/kilpailut/4tieteenkisat/lukion-matematiikka/)"
  - pvm: "9.&ndash;13.11."
    tapahtuma: "[Baltian Tie -joukkue&shy;matematiikka&shy;kilpailu](http://www.balticway17.dk/) Sorøssä Tanskassa."
  - pvm: "1.&ndash;3.12. (viikko 48)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä."
  - pvm: "2018"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "12.&ndash;14.1. (viikko 2)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä."
  - pvm: "19.&ndash;20.1."
    tapahtuma: "MAOLin matematiikka&shy;kilpailun loppu&shy;kilpailut Helsingissä"
  - pvm: "23.&ndash;25.2. (viikko 8)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä."
  - pvm: "helmi&ndash;maalis&shy;kuussa paikka&shy;kunta&shy;kohtaisesti"
    tapahtuma: "[Seitsemäs&shy;luokkalaisten matematiikka&shy;kilpailu](http://matematiikkakilpailut.fi/seiskat/)"
  - pvm: "6.&ndash;8.4. (viikko 14)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä."
  - pvm: "9.4."
    tapahtuma: "Pohjoismainen matematiikkakilpailu"
  - pvm: "9.&ndash;15.4."
    tapahtuma: "[Euroopan tyttöjen matematiikka&shy;olympialaiset](https://www.egmo.org/egmos/egmo7/) Firenzessä"
  - pvm: "3.&ndash;14.7."
    tapahtuma: "[59. Kansain&shy;väliset matematiikka&shy;olympialaiset](http://www.imo2018.org/) Cluj-Napocassa Romaniassa"
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
