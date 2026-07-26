---
permalink: null
---

# matematiikkakilpailut.github.io

Suomen matematiikan olympiavalmennuksen sivusto, osoitteessa
<https://matematiikkakilpailut.fi>. Sivusto rakennetaan
[Eleventy](https://www.11ty.dev/):llä ja se toimii Cloudflare Pagesissa.

Sivut ovat pääosin [Markdownia](https://www.markdownguide.org/basic-syntax/)
ja alussa on yaml-muotoinen blokki metadataa.

Usein päivitettyjä sivuja:

* `seiskat/` seitsemäsluokkalaisten kilpailun sivut (tehtävät ja tulokset
  kaupungeittain) &ndash; kaikkein useimmin muokatut, ks. oma osionsa alla
* `aikataulu/index.11tydata.yaml` tapahtumakalenteri yaml-muodossa,
  ks. tiedoston oma kommenttiotsikko ja alla oleva osio
* `uutiset/` uutiset etusivulle ja RSS-syötteeseen, ks. osio alla
* `valmennus/index.md` kotitehtävät ja valmennuskirjeet. **Huom.**:
  kirjeet ja tehtäväsarjat linkitetään Google Drive -linkkeinä, eikä
  niistä ole enää PDF-tiedostoja repossa.

Muita erikoistiedostoja:

* `_data/faq.yaml` sisältää etusivun usein kysytyt kysymykset.
* `_data/site.js` sisältää seiskojen sivujen rakenteen (fi/sv/en).
* `pdf-redirects.json` ohjaa vanhat repossa olleet PDF-osoitteet Google
  Driveen, ks. osio "Google Drive -PDF:t".

## Uutiset

Kun teet tärkeitä muutoksia, lisää uutinen hakemistoon `uutiset/`
(ota mallia olemassaolevista tiedostoista). Uutiset päätyvät sekä
etusivulle että RSS-syötteeseen ja sen kautta Telegram-tiedotuskanavalle.
Siksi uutisessa on hyvä olla linkki sen koskemaan aiheeseen
(valmennuskirje, ilmoittautumissivu tms).

Tiedoston nimen muoto on `uutiset/YYYY-MM-DD-otsikko.md`. Päivämäärä ja
uutisten järjestys tulevat suoraan tiedoston nimestä. Alussa olevaan
yaml-blokkiin tarvitaan vähintään `title:`, ja itse leipäteksti on
Markdownia. Esimerkki (`uutiset/2021-09-23-syyskuun-kirje.md`):

```markdown
---
title: Syyskuun valmennuskirje julkaistu, också på svenska
---
Syyskuun 2021 [valmennuskirje](https://drive.google.com/file/d/1_QR7c5e1jRYUGKyJ8rJJmgJeSDWKpfKL/view) on julkaistu.
```

Helpoin tapa on kopioida jokin olemassa oleva tiedosto uudella nimellä ja
muokata sisältö.

## Jakokuvat (og:image)

Jokaisella sivulla on jakokuva, joka näkyy kun linkki jaetaan somessa.
Oletuskuva tulee valituksi sivun osoitteen perusteella tiedostossa
`_includes/default.html`. Sivukohtaisen asetuksen voi tehdä näin:

```yaml
ogImage: /kuvat/og-imo2026.jpg
ogImageAlt: "IMOsta pronssia ja kunniamainintoja..."
```

`ogImageAlt` on pakollinen aina kun `ogImage` on annettu. Tiedostopäätteen
pitää olla `.jpg` tai `.png`.

Kuvien tuottaminen: ks `kuvat/og-*.svg`. Oikea koko näille on **1200 × 630**.

### Tyyli

* Tausta `#2d3e50`. Tekstit `#f5f6f4`, korostukset `#9ec7e8` (sininen),
  `#a9d6a1` (vihreä), `#ecc98e` (okra).
* Fontti Lato: sivun nimi `matematiikkakilpailut.fi` kohdassa (80, 92),
  koko 26, `font-weight="700"`, `letter-spacing="1"`, väri `#9ec7e8`.
* Otsikko vasempaan reunaan `x="80"`, `font-weight="900"`. Yksi sana &rarr;
  koko 84, useampi rivi &rarr; koko 56 ja rivinväli 68. Katkaise rivit itse;
  56:n koossa riville mahtuu noin 16 merkkiä.
* Teksti vasempaan puoliskoon, kuvitus tai valokuva oikealle. Alareunaan
  mahtuu vielä pieni kuvateksti (koko 22).
* Valokuva sijoitetaan `<image>`-elementtinä oikeaan reunaan, esimerkiksi
  `x="720" width="480" height="630"` ja `preserveAspectRatio="xMidYMid slice"`.
  Jos saumasta tulee ruma, sen voi pehmentää taustan värisellä liukuvärillä
  kuvan vasemman reunan päällä &ndash; toisissa kuvissa se toimii, toisissa
  ei, joten katso lopputulos.

### Työvaiheet

Rajaa valokuva ensin sopivaan kokoon:

```
magick alkuperainen.jpg -gravity center -resize 480x630^ -extent 480x630 -quality 92 rajattu.jpg
```

Upota se SVG:hen data-URI:na, jotta SVG toimii sellaisenaan:

```
base64 -i rajattu.jpg | tr -d '\n'
```

ja liitä tulos `<image ... xlink:href="data:image/jpeg;base64,TÄHÄN">`.
Muista `xmlns:xlink="http://www.w3.org/1999/xlink"` juurielementtiin.

Rasterointi (Inkscape tarvitsee Lato-fontin asennettuna järjestelmään):

```
inkscape kuvat/og-imo2026.svg -w 1200 -h 630 -o /tmp/og.png
magick /tmp/og.png -quality 92 kuvat/og-imo2026.jpg
```

Laatua 92 voi haluta säätää.

Lopuksi `npm run build` ja tarkista tulos:

```
grep -o '<meta property="og:image[^>]*>' _site/uutiset/2026-07-24-IMO-tuloksia.html
```

## Aikataulu

`aikataulu/index.11tydata.yaml` on tapahtumakalenteri, joka on kokonaan
yamlia ja josta aikataulusivu tehdään ohjelmallisesti. Muodon kuvaus ja
esimerkkirivit ovat tiedoston omassa kommenttiotsikossa sen alussa &ndash;
lue se ennen muokkaamista.

## Google Drive -PDF:t

Isot PDF-tiedostot (valmennuskirjeet, tehtäväsarjat, kirjallisuus ym.)
säilytetään yhteisessä Google Drivessa eikä repossa. Uuden PDF:n lisääminen:

1. Lataa PDF jaettuun Google Driveen. Käytä valmennuksen Google Driveä
   "Valmennusmateriaalia" ja siinä sopivaa alihakemistoa.
2. Aseta tiedoston jakoasetukseksi "kaikki, joilla on linkki, voivat
   katsella" ("anyone with the link can view"). Tämän pitäisi olla
   oletusarvo olemassaolevissa alihakemistoissa, mutta jos teet uuden
   alihakemiston, se pitää ehkä asettaa erikseen.
3. Kopioi jaetusta osoitteesta tiedoston ID. Osoite on muotoa
   `https://drive.google.com/file/d/<ID>/view`, jossa `<ID>` on tiedoston ID.
4. Linkitä tiedosto sivulta tuolla osoitteella, esim.
   `[Helmikuun tehtävät](https://drive.google.com/file/d/<ID>/view)`.
5. Seiskojen tapauksessa tyylisäännöt käsittelevät `.pdf`-loppuiset linkit
   erityisesti, joten lisää jakolinkin loppuun ylimääräinen parametri:
   `https://drive.google.com/file/d/.../view?x=.pdf` (tai `...view?usp=sharing&x=.pdf`)

## PDF:t repossa

`.gitignore` estää `*.pdf`-tiedostot, jotta niitä ei vahingossa lisätä
repoon &ndash; isot tiedostot kuuluvat Google Driveen (ks. yllä).

Säännöllinen poikkeus on seiskojen kilpailun PDF:t, jotka tulevat
hakemistoon `seiskat/<vuosi>/`. `no-new-pdfs`-tarkistus (ks. alla) sallii
nimenomaan tämän polun.

PDF:n lisääminen paikallisesti onnistuu pakottamalla:

```
git add -f polku/tiedosto.pdf
```

Helpointa on kuitenkin ladata tiedosto suoraan GitHubin selainkäyttö­liittymän
kautta: repossa "Add file" &rarr; "Upload files".

## Seiskojen kilpailu

`seiskat/`-hakemistossa ovat seitsemäsluokkalaisten alueellisen
matematiikkakilpailun sivut. Nämä ovat sivuston useimmin muokatut sivut:
tehtävät ja tulokset päivitetään kaupungeittain. Vuosittaiset PDF:t
(tehtävät, ratkaisut, tulokset) tulevat hakemistoon `seiskat/<vuosi>/` &ndash;
tämä on ainoa repoon sallittu PDF-polku. Tämänkin sijasta voisi käyttää
Google Driveä.

Sivujen fi/sv/en-rakenne määritellään tiedostossa `_data/site.js`.

## Pull requestit ja muokkaaminen GitHubin kautta

Helpoin tapa muokata on tehdä muutos GitHubissa ja commitoida se uudelle
branchille. Näin syntyy pull request. Jokaiselle PR:lle ajetaan Cloudflare
Pages -build, jonka pitää mennä läpi ennen mergeä, ja Cloudflare luo
esikatselu-URL:n muotoa
`https://<hash>.matematiikkakilpailut-github-io.pages.dev/`.

Kun build on vihreänä, mergeä PR masteriin, niin sivu päivittyy osoitteeseen
<https://matematiikkakilpailut.fi> minuuteissa.

Jos PR:n tarkistus näkyy punaisena, kyse on yleensä yaml-kirjoitusvirheestä.
Klikkaa tarkistuksen kohdalta "Details", niin näet buildin lokin &ndash; tai aja
`npm run build` paikallisesti, niin saat saman virheen näkyviin.

Repon ainoa GitHub-workflow on `.github/workflows/no-new-pdfs.yml`. Se on
PR-portti, joka estää uusien PDF-tiedostojen lisäämisen &ndash; paitsi polkuun
`seiskat/<vuosi>/`. Muut PDF:t kuuluvat Google Driveen.

Cloudflare Pagesin asetukset ovat vain Cloudflaren hallintapaneelissa (repossa
ei ole `wrangler.toml`-tiedostoa). Ne ovat: build-komento `npm run build`
(Eleventy) ja julkaistava hakemisto `_site`.

## Kääntäminen paikallisesti

Asenna [Node.js](https://nodejs.org/), sitten

```
npm i
npm run serve
```

ja avaa <http://localhost:8080> selaimessa. Pelkän käännöksen (samalla tavalla
kuin Cloudflaren buildissa) saa komennolla `npm run build`; tulos menee
hakemistoon `_site`.

## Tyylit

Tiedostossa `css/tyyli.css`.

`seiskat/`-sivuilla on oma `seiskat/tyyli.css` ja BW2016-sivuilla
vanha `css/bw2016.min.css`.
