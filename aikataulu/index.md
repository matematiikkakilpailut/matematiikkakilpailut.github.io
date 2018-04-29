---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2018"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "12.&ndash;14.1. (viikko 2)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä."
  - pvm: "19.&ndash;20.1."
    tapahtuma: "MAOLin matematiikka&shy;kilpailun loppu&shy;kilpailut Helsingissä"
  - pvm: "23.&ndash;25.2. (viikko 8)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä."
  - pvm: "helmi&ndash;maalis&shy;kuussa paikka&shy;kunta&shy;kohtaisesti"
    tapahtuma: "[Seitsemäs&shy;luokkalaisten matematiikka&shy;kilpailu](http://matematiikkakilpailut.fi/seiskat/)"
  - pvm: "6.&ndash;8.4. (viikko 14)"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä."
  - pvm: "9.4."
    tapahtuma: "Pohjoismainen matematiikkakilpailu"
  - pvm: "9.&ndash;15.4."
    tapahtuma: "[Euroopan tyttöjen matematiikka&shy;olympialaiset](https://www.egmo.org/egmos/egmo7/) Firenzessä"
  - pvm: "7.-12.5."
    tapahtuma: "Valmennus&shy;viikko Päivölässä."
  - pvm: "4.-8.6.&dagger;"
    tapahtuma: "Kesäleiri yläaste&shy;ikäisille Päivölässä"
  - pvm: "11.-15.6."
    tapahtuma: "Kesä&shy;valmennus&shy;leiri joukkueelle ja muille kiinnos&shy;tuneille Turussa"
  - pvm: "noin 2.-7.7."
    tapahtuma: "Olympia&shy;joukkueen leiri Sorøssä, Tanskassa (josta siirtymä suoraan Romaniaan)"
  - pvm: "3.&ndash;14.7."
    tapahtuma: "[59. Kansain&shy;väliset matematiikka&shy;olympialaiset](http://www.imo2018.org/) Cluj-Napocassa Romaniassa"
  - pvm: "2018"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "31.8.-2.9. (viikko 36)&dagger;"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "19.-21.10. (viikko 42)&dagger;"
    tapahtuma: "Valmennus&shy;viikonvaihde Päivölässä"
  - pvm: "30.11.-2.12. (viikko 48)&dagger;"
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
  <p>&dagger; Ajankohtaa ei ole vahvistettu</p>
