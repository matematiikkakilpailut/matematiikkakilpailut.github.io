---
layout: page
title: Aikataulu
url: /aikataulu/
aikataulu:
  - pvm: "2015"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
  - pvm: "9.–11.1. (viikko 2)"
    tapahtuma: |
      Valmennus&shy;viikonvaihde Päivölässä. Alakerran ohjelmassa lukuteoriaa
      (johon [verryttely&shy;tehtäviä][v1]) ja geometriaa, yläkerran ohjelmassa
      lukuteoriaa (johon [verryttely&shy;tehtäviä][v2]) ja kombinatoriikkaa.
      
      [v1]: /valmennus/2015/2015-tammikuu-lukuteorian_verryttely.pdf
      [v2]: /valmennus/2015/2015-tammikuu-ylakerran-lukuteoriaverryttely.pdf
  - pvm: "30.–31.1."
    tapahtuma: |
      MAOL:n matematiikka&shy;kilpailujen loppukilpailu Ressun lukiossa Helsingissä.
  - pvm: "20.–22.2. (viikko 8)"
    tapahtuma: |
      Valmennusviikonvaihde Päivölässä. Perjantaina mahdollisuus osallistua
      EGMO-joukkueen valinta&shy;kokeeseen. Yläkerran ohjelmassa epäyhtälöitä
      (joihin [verryttelytehtäviä][v1]) ja funktionaali&shy;yhtälöitä (joihin myös
      [verryttelytehtäviä][v2]) sekä kolmiulotteista geometriaa (kannattaa
      vilkaista [esitietotoiveita][esi1]). Alakerrassa mm. funktionaali&shy;yhtälöitä
      (joihin [verryttelytehtäviä][v3]) ja trigonometrian perusasioita; kannattaa
      selvittää itselleen muutama [esitieto][esi2].

      [v1]: /valmennus/2015/2015-helmikuu-epayhtaloverryttely.pdf
      [v2]: /valmennus/2015/2015-helmikuu-ylakerran-funktionaaliyhtaloverryttely.pdf
      [esi1]: /valmennus/2015/avgeomesi.pdf
      [v3]: /valmennus/2015/2015-helmikuu-alakerran-funktionaaliyhtaloverryttely.pdf
      [esi2]: /valmennus/2015/trigesi.pdf
  - pvm: "24.3."
    tapahtuma: "Pohjoismainen matematiikka&shy;kilpailu."
  - pvm: "14.–20.4."
    tapahtuma: |
      [4. Euroopan tyttöjen matematiikka&shy;olympialaiset](https://www.egmo.org/egmos/egmo4/)
      Minskissä Valko-Venäjällä.
  - pvm: "17.–19.4. (viikko 16)"
    tapahtuma: |
      Valmennusviikonvaihde ja [Pythagoraan Polku -kilpailu][pp] Päivölässä.

      [pp]: /pythagoras/Pythagoras_kutsu_2015.pdf
  - pvm: "3.5. – 8.5. (viikko 19)"
    tapahtuma: |
      Matematiikka&shy;olympiajoukkueen valinta- ja valmennusleiri Päivölässä
      erikseen kutsutuille. Muut kuin kutsutut voivat osallistua
      omakustanteisesti.
  - pvm: "9.&ndash;12.6"
    tapahtuma: |
      Kes&auml;valmennusta Helsingin yliopistolla Kumpulan kampuksella Exactumissa (sali B321) 9.&ndash;12.6 klo. 9&ndash;16.
  - pvm: "2.–7.7."
    tapahtuma: |
      Yhteispohjoismainen matematiikka&shy;olympia&shy;joukkueiden valmennusleiri Sorøssä Tanskassa.
  - pvm: "8.–16.7."
    tapahtuma: |
      [56. Kansainväliset matematiikka&shy;olympialaiset](http://www.imo2015.org/)
      Chiang Maissa Thaimaassa.
  - pvm: "5.–11.11."
    tapahtuma: |
      Baltian Tie -joukkuematematiikkakilpailu Tukholmassa.
  - pvm: "2016"
    tapahtuma: "Kevät ja kesä"
    otsikko: true
- pvm "5.4."
    tapahtuma:|
     Pohjoismainen matematiikkakilpailu.
- pvm: "6.–16.7."
    tapahtuma: |
      [57. Kansainväliset matematiikka&shy;olympialaiset](http://www.imohkc.org.hk/)
      Hongkongissa.
---
<div class="list-group">
{% for a in page.aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify }}</div>
</div>
{% endfor %}
</div>
