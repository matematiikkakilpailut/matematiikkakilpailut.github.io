---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2017"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "13.&ndash;15.1. (viikko 2)"
    tapahtuma: |
     Valmennusviikonvaihde Päivölässä. Aiheina geometria ja kombinatoriikka.
     Valmistautumismateriaalia: alakerran geometrian ohjelmaan kohdat 1&ndash;6, 7, 10, 13, 14, 17, ja 18
     [Geometrian peruspaketista](/kirjallisuus/geomperusp.pdf).
  - pvm: "20.&ndash;21.1."
    tapahtuma: |
     Matemaattisten Aineiden Opettajien Liiton Lukion matematiikkakilpailun ja Peruskoulun matematiikkakilpailun loppukilpailut 
     Ressun lukiossa Helsingissä.
  - pvm: "24.&ndash;26.2. (viikko 8)"
    tapahtuma: |
     Valmennusviikonvaihde Päivölässä. Aiheina lukuteoria ja kombinatoriikka.
  - pvm: "3.4."
    tapahtuma: |
     Pohjoismainen matematiikkakilpailu erikseen kutsutuille. Pidetään kilpailijoiden kouluissa.
  - pvm: "6.&ndash;12.4."
    tapahtuma: |
     Kuudennet Euroopan tyttöjen matematiikkaolympialaiset ([EGMO](https://www.egmo2017.ch/)) Z&uuml;richissä.
  - pvm: "21.&ndash;23.4.(*)"
    tapahtuma: |
     Valmennusviikonvaihde Päivölässä. Aiheena ainakin algebra.
  - pvm: "5.&ndash;10.5.(*)"
    tapahtuma: |
     Valmennusviikko ja joukkueen valintaleiri Päivölässä.
  - pvm: "Kesäkuussa(*)"
    tapahtuma: "Valmennusleiri valitulle joukkueelle."
  - pvm: "10.&ndash;15.7."
    tapahtuma: "Matematiikkaolympiajoukkueiden [pohjoismainen valmennusleiri](http://www.georgmohr.dk/soroe.html) Sorøssä Tanskassa."
  - pvm: "12&ndash;24.7."
    tapahtuma: |
     [58. Kansainväliset matematiikkaolympialaiset](http://www.imo2017.org.br) Rio de Janeirossa.
  - pvm: "2017"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "9.&ndash;13.11."
    tapahtuma: "[Baltian Tie -joukkuematematiikkakilpailu](http://www.balticway17.dk/) Sorøssä Tanskassa."
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
<p>(*) Päivämäärä vahvistamatta</p>
</div>
