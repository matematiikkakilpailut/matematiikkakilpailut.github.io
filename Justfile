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
    rm -rf _site _test-site _linkcheck.json

linkcheck: clean build && linkfix
    -lychee --no-progress --no-ignore --cache --accept "200..=299,429" \
        --format json --output _linkcheck.json \
        --root-dir "$PWD/_site" \
        --scheme https --scheme http \
        --exclude 'web\.archive\.org' \
        --exclude-path _site/BW2006 \
        --exclude-path _site/BW2016 \
        --exclude-path _site/kokoukset \
        --exclude-path _site/vanhaset \
        _site

# Browse the last linkcheck report: enter opens the link and its source
linkfix:
    node test/linkfix.js | fzf --delimiter '\t' --tabstop 8 --no-sort \
        --header 'enter: open link + source · ctrl-x: ignore site · ctrl-r: reload' \
        --bind 'enter:execute-silent(open {2}; code -g {3})' \
        --bind 'ctrl-x:execute-silent(node test/linkfix.js --ignore {2})+reload(node test/linkfix.js)' \
        --bind 'ctrl-r:reload(node test/linkfix.js)'
