## Faviconit

Lähde on `kuvat/favicon.svg`, jossa on kylläisemmät värit kuin sivun
logossa (toimii paremmin vaihtelevilla taustoilla).

Rasteriversiot syntyvät favicon.svg:stä näin:

```
for s in 32 192 512; do
  magick -background none kuvat/favicon.svg -resize ${s}x${s} PNG32:/tmp/f$s.png
done
mv /tmp/f32.png kuvat/favicon-32x32.png
mv /tmp/f192.png kuvat/icon192.png
mv /tmp/f512.png kuvat/icon512.png
```

Apple-touch-icon kuuluu olla ilman läpinäkyvyyttä:

```
magick -background white kuvat/favicon.svg -resize 180x180 \
  -alpha remove -alpha off kuvat/apple-touch-icon.png
```

Juuren `favicon.ico` kolmessa koossa (48/32/16):

```
magick -background none kuvat/favicon.svg -resize 48x48 \
  -define icon:auto-resize=48,32,16 favicon.ico
```

Lopuksi pienennä PNG:t:

```
oxipng -o4 --strip safe kuvat/favicon-32x32.png kuvat/icon192.png \
  kuvat/icon512.png kuvat/apple-touch-icon.png
```

`icon192.png` ja `icon512.png` ovat `kuvat/manifest.webmanifest`-tiedoston
kuvakkeet.

## LinkedIn-banneri

LinkedInin yrityssivun kansikuva (1128×191, renderöidään 2×):

```
magick -density 192 kuvat/linkedin-banner.svg -resize 2256x382 kuvat/linkedin-banner.png
```

## Discord-tapahtuman kansikuva

Laskuharjoitusten tapahtumakuva (800×320, renderöidään 2×), kuviona
Pascalin kolmio modulo 2:

```
uv run python kuvat/discord-laskuharjoitukset.py > kuvat/discord-laskuharjoitukset.svg
magick -density 192 kuvat/discord-laskuharjoitukset.svg -resize 1600x640 kuvat/discord-laskuharjoitukset.png
oxipng -o4 --strip safe kuvat/discord-laskuharjoitukset.png
```

Samasta kuvasta tehdään uutisen jakokuva (1200×630) lisäämällä
taustaväriä ylä- ja alapuolelle:

```
magick kuvat/discord-laskuharjoitukset.png -background '#2d3e50' -gravity center \
  -extent 1600x840 -resize 1200x630 kuvat/og-laskuharjoitukset.png
oxipng -o4 --strip safe kuvat/og-laskuharjoitukset.png
```
