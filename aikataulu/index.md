---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2021"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "15.&ndash;17.1. (viikko 2)"
    tapahtuma: "Valmennus&shy;viikonvaihde etänä: [lisätietoa ja ilmoittautuminen](2021W02/)"
  - tapahtuma: "MAOLin perus&shy;koulun ja lukion loppu&shy;kilpailu omassa koulussa"
    pvm: "25.1."
  - pvm: "noin helmi-huhtikuussa"
    tapahtuma: "[Seitsemäs&shy;luokkalaisten alueel&shy;linen matematiikka&shy;kilpailu](/seiskat/) Helsingissä, Oulussa, Sata&shy;kunnassa ja Turussa"
  - pvm: "26.&ndash;28.2. (viikko 8)"
    tapahtuma: "Valmennus&shy;viikonvaihde etänä: [lisätietoa ja ilmoittautuminen](2021W08/)"
  - tapahtuma: "[Euroopan tyttöjen matematiikka&shy;olympialaiset <abbr>EGMO</abbr>](https://www.egmo.org/egmos/egmo10/) (suomalaisten osalta etänä)"
    pvm: "9.&ndash;15.4."
  - tapahtuma: "Pohjois&shy;mainen matematiikka&shy;kilpailu kutsutuille omassa koulussa"
    pvm: "16.4."
  - pvm: "n. 16.&ndash;18.4. (viikko 15)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä tai etänä"
  - tapahtuma: "Olympia&shy;joukkueen valinta- ja valmennusleiri"
    pvm: "n. touko- tai kesä&shy;kuussa"
  - tapahtuma: "Olympia&shy;joukkueen yhteis&shy;pohjois&shy;mainen valmennus&shy;leiri Sorøssa, Tanskassa"
    pvm: "olympiamatkan aluksi"
  - tapahtuma: "[62. Kansain&shy;väliset matematiikka&shy;olympialaiset <abbr>IMO</abbr> Pietarissa](http://www.imo-official.org/year_info.aspx?year=2021)"
    pvm: "14.&ndash;24.7."
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
