---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2018"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "noin 2.&ndash;7.7."
    tapahtuma: "Olympia&shy;joukkueen leiri Sorøssä, Tanskassa (josta siirtymä suoraan Romaniaan)"
  - pvm: "3.&ndash;14.7."
    tapahtuma: "[59. Kansain&shy;väliset matematiikka&shy;olympialaiset](http://www.imo2018.org/) Cluj-Napocassa Romaniassa"
  - pvm: "2018"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "7.&ndash;9.9. (viikko 36)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä. Ohjelmassa mm. [iranilainen geometria&shy;kilpailu](http://igo-official.ir/?lang=en) erikseen kutsutuille ja Baltian tie -joukkueen valinta&shy;koe, johon kaikki voivat osallistua. Baltian tie on tänä vuonna Venäjällä, jonne matkustamiseen tarvitaan viisumi. Jos koet olevasi ehdolla joukkueeseen, ota viikon&shy;vaihteeseen mukaan passi, joka on voimassa vähintään 6 kk Baltian tien päättymisestä, 7.5.2019 asti."
  - pvm: "19.&ndash;21.10. (viikko 42)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "3.&ndash;7.11."
    tapahtuma: "[Baltian tie -kilpailu Pietarissa](http://www.pdmi.ras.ru/EIMI/2018/Baltic_way/index.html)"
  - pvm: "29.10&ndash;9.11."
    tapahtuma: "[MAOLin perus&shy;koulun matematiikka&shy;kilpailu](https://peda.net/yhdistykset/maol-ry/kilpailut/ntk/pm)"
  - pvm: "31.10."
    tapahtuma: "[MAOLin lukion matematiikka&shy;kilpailu](https://peda.net/yhdistykset/maol-ry/kilpailut/ntk/lm)"
  - pvm: "30.11.&ndash;2.12. (viikko 48)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "2019"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "18.&ndash;19.1."
	tapahtuma: "MAOLin lukion loppu&shy;kilpailu Helsingissä"
  - pvm: "1.4."
    tapahtuma: "Pohjois&shy;mainen matematiikka&shy;kilpailu"
  - pvm: "10.&ndash;22.7."
    tapahtuma: "[60. Kansain&shy;väliset matematiikka&shy;olympialaiset](https://www.imo2019.uk/) Bathissa, Yhdisty&shy;neessä Kuningas&shy;kunnassa"
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
