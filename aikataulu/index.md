---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2020"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "4.&ndash;6.9. (viikko 36)"
    tapahtuma: "Valmennus&shy;viikonvaihde ~~Päivölässä, ohjelmassa mm. Baltian tie -joukkueen valinta.~~ **ETÄNÄ**. [Lisätietoja ja ilmoittautuminen](2020W36/)"
  - pvm: "20.-28.9."
    tapahtuma: "[61. Kansain&shy;väliset matematiikka&shy;olympialaiset <abbr>IMO</abbr>](http://www.imo-official.org/year_info.aspx?year=2020) ~~Pietarissa~~
    **ETÄNÄ**"
  - pvm: "23.9.&ndash;6.10."
    tapahtuma: "[MAOLin peruskoulun matematiikka&shy;kilpailu](https://maol.fi/neljan-tieteen-kisat/)"
  - pvm: "5.10."
    tapahtuma: "[MAOLin lukion matematiikka&shy;kilpailu](https://maol.fi/neljan-tieteen-kisat/)"
  - pvm: "16.&ndash;18.10. (viikko 42)"
    tapahtuma: "Valmennus&shy;viikonvaihde ~~Päivölässä tai~~ **ETÄNÄ**. [Lisätietoja ja ilmoittautuminen](2020W42/)"
  - pvm: "30.10."
    tapahtuma: "[Iranin geometria&shy;kilpailu](/IGO/) Päivölässä."
  - pvm: "12.&ndash;16.11."
    tapahtuma: "Baltian tie -kilpailu ~~Reykjavikissa tai~~ **ETÄNÄ**"
  - pvm: "27.&ndash;29.11. (viikko 48)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä tai etänä"
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
