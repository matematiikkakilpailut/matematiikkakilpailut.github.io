---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2018"
    tapahtuma: "Syksy"
    otsikko: true
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
  - pvm: "11.&ndash;13.1. (viikko 2)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "18.&ndash;19.1."
    tapahtuma: "MAOLin lukion loppu&shy;kilpailu Helsingissä"
  - pvm: "22.&ndash;24.2. (viikko 8)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "1.4."
    tapahtuma: "Pohjois&shy;mainen matematiikka&shy;kilpailu"
  - pvm: "5.&ndash;7.4. (viikko 14)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
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
