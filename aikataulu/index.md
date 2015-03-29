---
layout: page
title: Aikataulu
url: /aikataulu/
---
{% include JB/setup %}

{% comment %}

OHJE AIKATAULUN PÄIVITTÄMISEEN:

Itse taulukko on tiedoston lopussa HTML-muodossa.
Ensimmäisen sarakkeen css-luokka on col-sm-3 ja toisen col-sm-9.
Tee uusi tapahtuma vaikka kopioimalla vanha ja vaihtamalla sisältö:

  <div class="col-sm-3">1.-2.3.</div>
  <div class="col-sm-9"> ... </div>

Jos toisen sarakkeen sisältö on aivan yksinkertainen, kirjoita se
html:nä (markdown ei tässä kohtaa kelpaa). Muuten keksi sille sopiva
nimi* ja kirjoita sen sisältö sivun alkuosaan capture/endcapture -rakenteen
sisään ja viittaa siihen taulukosta rakenteella

  {{ nimi | markdownify }}

(*) sopiva nimi voi sisältää kirjaimia, numeroita ja alleviivausmerkkejä

{% endcomment %}

{% capture viikonvaihde_2015_2 %}
Valmennusviikonvaihde Päivölässä. Alakerran ohjelmassa lukuteoriaa
(johon [verryttelytehtäviä][v1]) ja geometriaa, yläkerran ohjelmassa
lukuteoriaa (johon [verryttelytehtäviä][v2]) ja kombinatoriikkaa.

[v1]: /valmennus/2015/2015-tammikuu-lukuteorian_verryttely.pdf
[v2]: /valmennus/2015/2015-tammikuu-ylakerran-lukuteoriaverryttely.pdf
{% endcapture %}

{% capture MAOL_loppu_2015 %}
MAOL:n matematiikkakilpailujen loppukilpailu Ressun lukiossa Helsingissä.
{% endcapture %}

{% capture viikonvaihde_2015_8 %}
Valmennusviikonvaihde Päivölässä. Perjantaina mahdollisuus osallistua
EGMO-joukkueen valintakokeeseen. Yläkerran ohjelmassa epäyhtälöitä
(joihin [verryttelytehtäviä][v1]) ja funktionaaliyhtälöitä (joihin myös
[verryttelytehtäviä][v2]) sekä kolmiulotteista geometriaa (kannattaa
vilkaista [esitietotoiveita][esi1]). Alakerrassa mm. funktionaaliyhtälöitä
(joihin [verryttelytehtäviä][v3]) ja trigonometrian perusasioita; kannattaa
selvittää itselleen muutama [esitieto][esi2].

[v1]: /valmennus/2015/2015-helmikuu-epayhtaloverryttely.pdf
[v2]: /valmennus/2015/2015-helmikuu-ylakerran-funktionaaliyhtaloverryttely.pdf
[esi1]: /valmennus/2015/avgeomesi.pdf
[v3]: /valmennus/2015/2015-helmikuu-alakerran-funktionaaliyhtaloverryttely.pdf
[esi2]: /valmennus/2015/trigesi.pdf
{% endcapture %}

{% capture egmo_2015 %}
[4. Euroopan tyttöjen matematiikkaolympialaiset](https://www.egmo.org/egmos/egmo4/)
Minskissä Valko-Venäjällä.
{% endcapture %}

{% capture viikonvaihde_2015_16 %}
Valmennusviikonvaihde ja [Pythagoraan Polku -kilpailu][pp] Päivölässä.

[pp]: /pythagoras/Pythagoras_kutsu_2015.pdf
{% endcapture %}

{% capture leiri_2015 %}
Matematiikkaolympiajoukkueen valinta- ja valmennusleiri Päivölässä
erikseen kutsutuille. Muut kuin kutsutut voivat osallistua
omakustanteisesti.
{% endcapture %}

{% capture pmleiri_2015 %}
Yhteispohjoismainen matematiikkaolympiajoukkueiden valmennusleiri Sorøssä Tanskassa.
{% endcapture %}

{% capture imo_2015 %}
[56. Kansainväliset matematiikkaolympialaiset](http://www.imo2015.org/) Chiang Maissa Thaimaassa.
{% endcapture %}

{% capture imo_2016 %}
[57. Kansainväliset matematiikkaolympialaiset](http://www.imohkc.org.hk/) Hongkongissa.
{% endcapture %}

<style>
.vuodenaika > div {
    background: silver;
    padding-top: 6px;
    padding-bottom: 6px;
    margin-top: 6px;
    margin-bottom: 6px;
}
.col-sm-9 > p {
    display: inline;
}
</style>

<div class="vuodenaika">
<div class="col-sm-3">2014</div>
<div class="col-sm-9">Syksy</div>
</div>
<div class="col-sm-3">5.–7.9. (viikko 36)</div>
<div class="col-sm-9">Valmennusviikonvaihde Päivölässä.
	Ohjelmassa aloitteleville kilpailumatematiikan yleisesittelyä, pikku testi ja
	algebran perusteita, edistyneemmille kombinatoriikkaa, geometriaa ja lukuteoriaa
	sekä syksyn Baltian Tie -kilpailun joukkueen valintaan tähtäävä koe.</div>
<div class="col-sm-3">17.–19.10. (viikko 42)</div>
<div class="col-sm-9">Valmennusviikonvaihde Päivölässä.</div>
<div class="col-sm-3">5.11.</div>
<div class="col-sm-9">MAOL:n Peruskoulun matematiikkakilpailun alkukilpailu kouluissa.</div>
<div class="col-sm-3">6.–10.11.</div>
<div class="col-sm-9"><a href="http://mif.vu.lt/balticway2014/">Baltian Tie -kilpailu</a>
                      Vilnassa Liettuassa</div>
<div class="col-sm-3">11.11.   </div>
<div class="col-sm-9">MAOL:n Lukion matematiikkakilpailun alkukilpailu kouluissa.</div>
<div class="col-sm-3">28.–30.11. (viikko 48)   </div>
<div class="col-sm-9">Valmennusviikonvaihde Päivölässä.</div>

<div class="vuodenaika">
<div class="col-sm-3">2015</div>
<div class="col-sm-9">Kevät ja kesä</div>
</div>
<div class="col-sm-3">9.–11.1. (viikko 2)</div>
<div class="col-sm-9">{{ viikonvaihde_2015_2 | markdownify }}</div>
<div class="col-sm-3">30.–31.1.</div>
<div class="col-sm-9">{{ MAOL_loppu_2015 | markdownify }}</div>
<div class="col-sm-3">20.–22.2. (viikko 8)</div>
<div class="col-sm-9">{{ viikonvaihde_2015_8 | markdownify }}</div>
<div class="col-sm-3">24.3.</div>
<div class="col-sm-9">Pohjoismainen matematiikkakilpailu.</div>
<div class="col-sm-3">14.–20.4.</div>
<div class="col-sm-9">{{ egmo_2015 | markdownify }}</div>
<div class="col-sm-3">17.–19.4. (viikko 16)</div>
<div class="col-sm-9">{{ viikonvaihde_2015_16 | markdownify }}</div>
<div class="col-sm-3">3.5. – 8.5. (viikko 19)</div>
<div class="col-sm-9">{{ leiri_2015 | markdownify }}</div>
<div class="col-sm-3">2.–7.7.</div>
<div class="col-sm-9">{{ pmleiri_2015 | markdownify }}</div>
<div class="col-sm-3">8.–16.7.</div>
<div class="col-sm-9">{{ imo_2015 | markdownify }}</div>
<div class="vuodenaika">
<div class="col-sm-3">2016</div>
<div class="col-sm-9">Kevät ja kesä</div>
</div>
<div class="col-sm-3">6.–16.7.</div>
<div class="col-sm-9">{{ imo_2016 | markdownify }}</div>

