---
permalink: null
---

# matematiikkakilpailut.github.io

Suomen matematiikan olympiavalmennuksen sivusto.

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
