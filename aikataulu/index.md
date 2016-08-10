---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  
  
  - pvm: "2016"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "31.10."
    tapahtuma: |
     Matemaattisten Aineiden Opettajien Liiton Lukion matematiikkakilpailun alkukilpailu kouluissa.
  - pvm: "3.&ndash;7.11."
    tapahtuma: |
     Kansainvälinen Baltian Tie -joukkuematematiikkakilpailu Oulussa.
  - pvm: "8.11."
    tapahtuma: |
     Matemaattisten Aineiden Opettajien Liiton Peruskoulun matematiikkakilpailun alkukilpailu kouluissa.
  - pvm: "2017"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "20.&ndash;21.1."
    tapahtuma: |
     Matemaattisten Aineiden Opettajien Liiton Lukion matematiikakkilpailun ja Peruskoulun matematiikkakilpailun loppukilpailut Helsingissä.
  - pvm: "3.4."
    tapahtuma: |
     Pohjoismainen matematiikkakilpailu erikseen kutsutuille.
  - pvm: "6.&ndash;12.4."
    tapahtuma: |
      6. Euroopan tyttöjen matematiikkaolympialaiset [EGMO](https://www.egmo2017.ch/) Z&uuml;richissä.
  - pvm: "12&ndash;24.7."
    tapahtuma: |
     [58. Kansainväliset matematiikkaolympialaiset](http://www.imo2017.org.br) Rio de Janeirossa.
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
