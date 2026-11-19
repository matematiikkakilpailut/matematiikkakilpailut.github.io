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
