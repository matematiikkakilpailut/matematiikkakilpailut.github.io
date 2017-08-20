---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2017"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "8.&ndash;10.9. (viikko 36)"
    tapahtuma: "Valmennusviikonvaihde Päivölässä."
  - pvm: "20.&ndash;22.10. (viikko 42)"
    tapahtuma: "Valmennusviikonvaihde Päivölässä."
  - pvm: "9.&ndash;13.11."
    tapahtuma: "[Baltian Tie -joukkuematematiikkakilpailu](http://www.balticway17.dk/) Sorøssä Tanskassa."
  - pvm: "1.&ndash;3.12. (viikko 48)"
    tapahtuma: "Valmennusviikonvaihde Päivölässä."
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
