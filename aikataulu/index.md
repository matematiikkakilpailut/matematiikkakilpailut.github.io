---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
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
  - pvm: "7.&ndash;13.4."
    tapahtuma: "Euroopan tyttöjen matematiikka&shy;olympialaiset [EGMO](https://www.egmo.org/egmos/egmo8/) Kiovassa"
  - pvm: "10.&ndash;14.5."
    tapahtuma: "Olympia&shy;joukkueen valinta- ja valmennus&shy;viikko Päivölässä"
  - pvm: "3.&ndash;6.6."
	tapahtuma: "Peruskoululaisten valmennusleiri"
  - pvm: "10.&ndash;22.7."
    tapahtuma: "[60. Kansain&shy;väliset matematiikka&shy;olympialaiset](https://www.imo2019.uk/) Bathissa, Yhdisty&shy;neessä Kuningas&shy;kunnassa"
  - pvm: "2019"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "noin viikko 36"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "noin viikko 42"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "noin loka-marraskuussa"
    tapahtuma: "MAOLin peruskoulun ja lukion matematiikka&shy;kilpailut"
  - pvm: "marraskuun alkupuolella"
    tapahtuma: "Baltian tie -kilpailu Szczecinissä, Puolassa"
  - pvm: "noin viikko 48"
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
