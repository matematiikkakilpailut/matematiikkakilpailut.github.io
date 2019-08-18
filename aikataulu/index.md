---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2019"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "10.&ndash;22.7."
    tapahtuma: "[60. Kansain&shy;väliset matematiikka&shy;olympialaiset](https://www.imo2019.uk/) Bathissa, Yhdisty&shy;neessä Kuningas&shy;kunnassa"
  - pvm: "2019"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "6.&ndash;8.9. (viikko 36)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "13.9."
    tapahtuma: "Iranin geometria&shy;kilpailu Päivölässä"
  - pvm: "18.&ndash;20.10. (viikko 42)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "noin loka-marraskuussa"
    tapahtuma: "MAOLin peruskoulun ja lukion matematiikka&shy;kilpailut"
  - pvm: "9.11."
    tapahtuma: >-
      [Harppi 2019](https://www.mayk.fi/matematiikka-ja-tiedefestarit-9-11-2019/) &ndash;
      matematiikka- ja tiede&shy;festarit Maunulassa
  - pvm: "14.&ndash;19.11."
    tapahtuma: "Baltian tie -kilpailu Szczecinissä, Puolassa"
  - pvm: "29.11.&ndash;1.12. (viikko 48)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "2020"
    tapahtuma: "Kevät"
    otsikko: true
  - pvm: "10.&ndash;12.1. (viikko 2)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "noin tammikuussa"
    tapahtuma: "MAOLin lukion loppu&shy;kilpailu Helsingissä"
  - pvm: "21.&ndash;23.2. (viikko 8)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "30.3."
    tapahtuma: "Pohjois&shy;mainen matematiikka&shy;kilpailu"
  - pvm: "noin viikko 14"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "noin huhtikuussa"
    tapahtuma: "Euroopan tyttöjen matematiikka&shy;olympialaiset EGMO"
  - pvm: "noin toukokuussa"
    tapahtuma: "Olympia&shy;joukkueen valinta- ja valmennus&shy;viikko Päivölässä"
  - pvm: "noin kesäkuun alussa"
    tapahtuma: "Perus&shy;koululaisten valmennus&shy;leiri Päivölässä"
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
