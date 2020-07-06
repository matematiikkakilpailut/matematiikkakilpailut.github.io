---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2020"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "10.&ndash;12.1. (viikko 2)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "helmi&ndash;huhti&shy;kuussa"
    tapahtuma: "[Seitsemäs&shy;luokkalaisten alueel&shy;linen matematiikka&shy;kilpailu](/seiskat/) Helsingissä, Oulussa, Sata&shy;kunnassa ja Turussa **Finaalit pidetään etänä tai siirretään syksylle 2020**"
  - pvm: "7.&ndash;8.2."
    tapahtuma: "MAOLin perus&shy;koulun ja lukion loppu&shy;kilpailu Helsingissä"
  - pvm: "21.&ndash;23.2. (viikko 8)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "30.3."
    tapahtuma: "Pohjois&shy;mainen matematiikka&shy;kilpailu kutsutuille ~~omassa koulussa~~ kotona"
  - pvm: "3.&ndash;5.4. (viikko 14)"
    tapahtuma: "**Toteutetaan etänä ks. [uutiset](https://matematiikkakilpailut.fi/#uutisia)** ~~Valmennus&shy;viikonvaihde Päivölässä. Pythagoraan polku -kilpailu halukkaille.~~"
  - pvm: "15.&ndash;21.4."
    tapahtuma: "**Tapahtuu virtuaalisesti:** [Euroopan tyttöjen matematiikka&shy;olympialaiset <abbr>EGMO</abbr>](https://egmo2020.nl)"
  - pvm: "8.-11.6."
    tapahtuma: "[Perus&shy;koululaisten valmennus&shy;leiri ~~Päivölässä~~ **virtuaalisesti**](2020-kesaleiri/)"
  - pvm: "13.-16.6."
    tapahtuma: "[**Virtuaalivalmennusta** halukkaille](2020-kesavalmennus/)"
  - pvm: "noin ~~kesäkuussa~~ **kesällä**"
    tapahtuma: "~~Kesän valmennusleiri kutsutuille~~ Olympiajoukkueen valinta- ja valmennusleiri"
  - pvm: "~~6.&ndash;11.7.~~"
    tapahtuma: "~~Olympiajoukkueen yhteispohjoismainen valmennusleiri Sorøssa, Tanskassa~~ **PERUTTU**"
  - pvm: "13.&ndash;14.7."
    tapahtuma: "[CMC-kilpailu](https://artofproblemsolving.com/contests/cmc) kutsutuille"
  - pvm: "~~8.&ndash;18.7.~~ **16.-26.9.**"
    tapahtuma: "[61. Kansain&shy;väliset matematiikka&shy;olympialaiset <abbr>IMO</abbr>](http://www.imo-official.org/year_info.aspx?year=2020) ~~Pietarissa~~
    **ETÄNÄ**"
  - pvm: "2020"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "4.&ndash;6.9. (viikko 36)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä, ohjelmassa mm. Baltian tie -joukkueen valinta."
  - pvm: "23.9.&ndash;6.10."
    tapahtuma: "[MAOLin peruskoulun matematiikka&shy;kilpailu](https://maol.fi/neljan-tieteen-kisat/)"
  - pvm: "5.10."
    tapahtuma: "[MAOLin lukion matematiikka&shy;kilpailu](https://maol.fi/neljan-tieteen-kisat/)"
  - pvm: "16.&ndash;18.10. (viikko 42)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "30.10."
    tapahtuma: "[Iranin geometria&shy;kilpailu](https://igo-official.ir/) Päivölässä(?)"
  - pvm: "12.&ndash;16.11."
    tapahtuma: "Baltian tie -kilpailu Reykjavikissa"
  - pvm: "27.&ndash;29.11. (viikko 48)"
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
