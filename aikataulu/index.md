---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2015"
    tapahtuma: "Syksy"
    otsikko: true
  - pvm: "4.–6.9. (viikko 36)"
    tapahtuma: |
      Valmennusviikonvaihde Päivölässä. Aiheet: geometria ja lukuteoria.
  - pvm: "16.&ndash;18.10. (viikko 42)"
    tapahtuma: |
     Valmennusviikonvaihde Päivölässä.
      Aiheet: algebra, kombinatoriikka
      (johon alakerran [moniste][kombmon], luvut 1.1 ja 1.2,
      ja [ennakko&shy;tehtäviä][v1]) ja
      epäyhtälöt (johon [moniste][vaderlind] ja [verryttely&shy;tehtäviä][v2]).
      
  [v1]: /valmennus/2015/2015-lokakuu-kombin-ennakko.pdf
  [v2]: /valmennus/2015/2015-lokakuu-epayht-verryttely.pdf
  [kombmon]: http://wiki.helsinki.fi/pages/viewpage.action?pageId=163490394&amp;preview=/163490394/164463088/kombinatoriikka.pdf
      [vaderlind]: /kirjallisuus/vaderlind.pdf
  - pvm: "27.10."
    tapahtuma: |
      Matemaattisten Aineiden Opettajien Liiton Lukion matematiikkakilpailun alkukilpailu kouluissa.
  - pvm: "5.–9.11."
    tapahtuma: |
      [Baltian Tie -joukkuematematiikkakilpailu](http://bw15.math.su.se/) Tukholmassa.
  - pvm: "27.&ndash;29.11. (viikko 48)"
    tapahtuma: |
      Valmennusviikonvaihde  Päivölässä.
  
  - pvm: "2016"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "15.&ndash;17.1."
    tapahtuma: |
     Valmennusviikonvaihde Päivölässä.
  - pvm: "22.&ndash;23.1."
    tapahtuma: |
     Matemaattisten Aineiden Opettajien Liiton Lukion matematiikkakilpailun loppukilpailu Munkkiniemen 
     yhteiskoulussa Helsingissä.
  - pvm: "26.&ndash;28.2."
    tapahtuma: |
     Valmennusviikonvaihde Päivölässä.
  - pvm: "5.4."
    tapahtuma: |
     Pohjoismainen matematiikkakilpailu.
  - pvm: "10.&ndash;16.4."
    tapahtuma: |
      [5. Euroopan Tyttöjen Matematiikkaolympialaiset](http://egmo.ssmr.ro/) Bustenissa Romaniassa.
  - pvm: "15.&ndash;17.4."
    tapahtuma: |
     Valmennusviikonvaihde Päivölässä.
  - pvm: "9.&ndash;14.5."
    tapahtuma: |
     Matematiikkaolympiajoukkueen valinta- ja valmennusleiri Päivölässä erikseen kutsutuille. Muut kuin kutsutut voivat            osallistua omakustanteisesti.
  - pvm: "3.&ndash;8.7."
    tapahtuma: |
     Matematiikkaolympiajoukkueiden pohjoismainen valmennusleiri Sorøssä Tanskassa.
  - pvm: "6.&ndash;16.7."
    tapahtuma: |
      [57. Kansainväliset matematiikka&shy;olympialaiset](http://www.imohkc.org.hk/)
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
