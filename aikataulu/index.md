---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2021"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - tapahtuma: "Olympia&shy;joukkueen valinta- ja valmennusleiri etänä, lisätietoa myöhemmin"
    pvm: "13.&ndash;16.5."
  - pvm: "<del>20.&ndash;26.5. </del> 11.-16.10."
    tapahtuma: "[Romanian Master of Mathematics](http://rmms.lbi.ro/rmm2021/index.php?id=home) etänä"
  - pvm: "11.&ndash;13.6."
    tapahtuma: "Yläkoululaisten kesäleiri"
  - pvm: "18.&ndash;20.6."
    tapahtuma: "Olympiajoukkueelle suunnattu valmennusleiri, jonne muutkin innokkaat ovat tervetulleita"
  - tapahtuma: "Olympia&shy;joukkueen yhteis&shy;pohjois&shy;mainen valmennus&shy;leiri Sorøssa, Tanskassa (mahdollisesti)"
    pvm: "10.&ndash;17.7."
  - tapahtuma: "[62. Kansain&shy;väliset matematiikka&shy;olympialaiset <abbr>IMO</abbr> Pietarissa](http://www.imo-official.org/year_info.aspx?year=2021), Suomen joukkue Suomessa tai mahdollisesti Tanskassa yhdessä muiden Pohjoismaiden kanssa"
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
