---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2021"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "11.&ndash;13.6."
    tapahtuma: "[Yläkoululaisten kesäleiri](https://matematiikkakilpailut.fi/aikataulu/YlaKesa2021/)"
  - pvm: "18.&ndash;20.6."
    tapahtuma: "[Olympiajoukkueelle suunnattu valmennusleiri](https://matematiikkakilpailut.fi/aikataulu/2021-kesavalmennus/), jonne muutkin innokkaat ovat tervetulleita"
  - tapahtuma: "Olympia&shy;joukkueen yhteis&shy;pohjois&shy;mainen valmennus&shy;leiri Sorøssa, Tanskassa (mahdollisesti)"
    pvm: "10.&ndash;17.7."
  - tapahtuma: "[62. Kansain&shy;väliset matematiikka&shy;olympialaiset <abbr>IMO</abbr> Pietarissa](http://www.imo-official.org/year_info.aspx?year=2021), Suomen joukkue Suomessa tai mahdollisesti Tanskassa yhdessä muiden Pohjoismaiden kanssa"
    pvm: "14.&ndash;24.7."
  - pvm: "2021"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "10.&ndash;12.9. (viikko 36)"
    tapahtuma: "Valmennus&shy;viikon&shy;loppu Päivölässä (toivottavasti)"
  - pvm: "22.9.&ndash;5.10."
    tapahtuma: Perus&shy;koulun matematiikka&shy;kilpailu
  - pvm: "ke 6.10."
    tapahtuma: "Lukion matematiikka&shy;kilpailu, alku&shy;kilpailu"
  - pvm: "<del>20.&ndash;26.5. </del> 11.-16.10."
    tapahtuma: "[Romanian Master of Mathematics](http://rmms.lbi.ro/rmm2021/index.php?id=home) etänä"
  - pvm: "22.&ndash;24.10. (viikko 42)"
    tapahtuma: "Valmennus&shy;viikon&shy;loppu Päivölässä (toivottavasti)"
  - pvm: "noin marraskuussa"
    tapahtuma: "Baltian tie -joukkue&shy;kilpailu Reykjavikissa"
  - pvm: "3.&ndash;5.12. (viikko 48)"
    tapahtuma: "Valmennus&shy;viikon&shy;loppu Päivölässä (toivottavasti)"
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
