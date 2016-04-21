---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  
  - pvm: "2016"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "15.&ndash;17.1. (viikko 2)"
    tapahtuma: |
      Valmennusviikonvaihde Päivölässä.
      Aiheet: alakerrassa geometria (lue [peruspaketista][gpp] kohdat 6, 14, ja 29
        ja [täydennysmateriaalista][gtd] kohdat 9-12) ja algebra (johon [ennakko&shy;tehtäviä][alg]),
        yläkerrassa geometria ja
        epäyhtälöt (lue monisteesta [Epäyhtälöoppia matematiikkaolympialaisten tehtäviin][eyh]:
        Cauchyn epäyhtälö, aritmeettis-geometrinen epäyhtälö, Jensenin epäyhtälö, suuruus&shy;järjestys&shy;epäyhtälö).

      [gpp]: /kirjallisuus/geomperusp.pdf
      [gtd]: /kirjallisuus/geomlis13.pdf
      [alg]: /valmennus/2016/2016-01-polynomit-ennakko.pdf
      [eyh]: /kirjallisuus/eykirja.pdf
  - pvm: "22.&ndash;23.1."
    tapahtuma: |
     Matemaattisten Aineiden Opettajien Liiton Lukion matematiikkakilpailun loppukilpailu Munkkiniemen 
     yhteiskoulussa Helsingissä.
  - pvm: "26.&ndash;28.2. (viikko 8)"
    tapahtuma: |
      Valmennusviikonvaihde Päivölässä.
      Aiheet: alakerrassa geometria (käy läpi [geometrisen todistamisen perusharjoitus](/kirjallisuus/geomtodharj.pdf))
      ja lukuteoria (lue [törmäyskurssin](/kirjallisuus/tormayskurssi.pdf) luvut 1 ja 2), yläkerrassa kombinatoriikka ja geometria.
  - pvm: "5.4."
    tapahtuma: |
     Pohjoismainen matematiikkakilpailu erikseen kutsutuille.
  - pvm: "10.&ndash;16.4."
    tapahtuma: |
      [5. Euroopan Tyttöjen Matematiikkaolympialaiset](http://egmo.ssmr.ro/) Bustenissa Romaniassa.
  - pvm: "15.&ndash;17.4. (viikko 15)"
    tapahtuma: |
     Valmennusviikonvaihde Päivölässä.
  - pvm: "9.&ndash;15.5. (viikko 19)"
    tapahtuma: |
     Matematiikkaolympiajoukkueen valinta- ja valmennusleiri Päivölässä erikseen kutsutuille. Muut kuin kutsutut voivat            osallistua omakustanteisesti.
  - pvm: "3.&ndash;8.7."
    tapahtuma: |
     Matematiikkaolympiajoukkueiden pohjoismainen valmennusleiri Sorøssä Tanskassa.
  - pvm: "9.&ndash;16.7."
    tapahtuma: |
      [57. Kansainväliset matematiikka&shy;olympialaiset](http://www.imo2016.org/Home.php)
      Hongkongissa.
  - pvm: "2016"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "3.&ndash;7.11."
    tapahtuma: |
     Kansainvälinen Baltian Tie -joukkuematematiikkakilpailu Oulussa.
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
