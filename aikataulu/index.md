---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2018"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "noin 2.-7.7."
    tapahtuma: "Olympia&shy;joukkueen leiri Sorøssä, Tanskassa (josta siirtymä suoraan Romaniaan)"
  - pvm: "3.&ndash;14.7."
    tapahtuma: "[59. Kansain&shy;väliset matematiikka&shy;olympialaiset](http://www.imo2018.org/) Cluj-Napocassa Romaniassa"
  - pvm: "2018"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "7.-9.9. (viikko 36)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä. Ohjelmassa mm. [iranilainen geometria&shy;kilpailu](http://igo-official.ir/?lang=en) erikseen kutsutuille ja Baltian tie -joukkueen valinta&shy;koe, johon kaikki voivat osallistua."
  - pvm: "19.-21.10. (viikko 42)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "29.10-9.11."
    tapahtuma: "[MAOLin perus&shy;koulun matematiikka&shy;kilpailu](https://peda.net/yhdistykset/maol-ry/kilpailut/ntk/pm)"
  - pvm: "31.10."
    tapahtuma: "[MAOLin lukion matematiikka&shy;kilpailu](https://peda.net/yhdistykset/maol-ry/kilpailut/ntk/lm)"
  - pvm: "30.11.-2.12. (viikko 48)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
  
[//] #  <p>&dagger; Ajankohtaa ei ole vahvistettu</p>
