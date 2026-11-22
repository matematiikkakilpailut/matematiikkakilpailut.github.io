default:
    @just --list

install:
    npm ci

build:
    npx eleventy

serve:
    npx eleventy --serve

watch:
    npx eleventy --watch

test:
    npm test

clean:
    rm -rf _site _test-site

linkcheck: clean build
    lychee --no-progress --no-ignore --root-dir "$PWD/_site" \
        --scheme https --scheme http \
        --exclude 'web\.archive\.org' \
        --exclude-path _site/BW2006 \
        --exclude-path _site/BW2016 \
        --exclude-path _site/kokoukset \
        --exclude-path _site/vanhaset \
        _site
