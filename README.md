---
permalink: null
---

# matematiikkakilpailut.github.io

Suomen matematiikan olympiavalmennuksen sivusto.
Usein päivitettyjä sivuja:

* `aikataulu/index.11tydata.yaml` tapahtumakalenteri yaml-muodossa
* `valmennus/index.md` linkit valmennuskirjeisiin
  * `valmennus/<vuosi>/kirje_<vuosi>_<kk>.pdf` jne., kirjeet

Sivut ovat [Markdownia](https://www.markdownguide.org/basic-syntax/)
ja alussa on yaml-muotoinen blokki metadataa. Erikoisuuksia:

* `aikataulu/index.11tydata.yaml` on kokonaan yamlia ja siitä tehdään
   aikataulu ohjelmallisesti.
* `_data/faq.yaml` sisältää etusivun usein kysytyt kysymykset.
* `_data/site.js` sisältää seiskojen sivujen rakenteen.

Kun teet tärkeitä muutoksia, lisää uutinen hakemistoon `uutiset/`
(ota mallia olemassaolevista). Uutiset päätyvät sekä etusivulle että
RSS-syötteeseen ja sen kautta Telegram-tiedotuskanavalle.
Siksi uutisessa on hyvä olla linkki sen koskemaan aiheeseen
(valmennuskirje, ilmoittautumissivu tms).

## Muokkaaminen Githubin kautta

Muokkaa sivua, tee commit, tarkkaile [actions-sivua](https://github.com/matematiikkakilpailut/matematiikkakilpailut.github.io/actions)
ja jos käännös onnistuu, sivu päivittyy osoitteeseen https://matematiikkakilpailut.fi minuuteissa.


## Kääntäminen paikallisesti

Asenna Node.js, sitten

```
npm i
npx @11ty/eleventy --serve
```

ja avaa http://localhost:8080 selaimessa.


## Bootstrap

Käytössä Bootstrap versio 5, Bootswatchin tyyli Flatly.
Päivitys: lataa uusi versio https://bootswatch.com/ (ei min.css),
kopioi vanhasta `@font-face`-muutokset ja poista vastaava Google Fonts -osuus,
minimoi `csso`:lla, päivitä `default.html`:n cachebuster.
