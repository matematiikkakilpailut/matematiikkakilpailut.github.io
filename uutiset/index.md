---
title: Uutisia
permalink: /uutiset/
override:tags: []
---

Voit seurata uutisia
<a href="/feed.xml" rel="alternate" type="application/atom+xml">RSS-syötteenä</a>
tai
<a href="https://t.me/+TS59DXkdJpozNDU0">Telegram-ryhmässä</a>.

{% set uutiset = collections.uutinen | reverse %}
{% for artikkeli in uutiset %}

## {{ artikkeli.data.title }} [{{ artikkeli.date.toLocaleDateString("fi", {timeZone: "UTC"}) }}]({{ artikkeli.url }}){.fs-6 .link-secondary}

{{ artikkeli.templateContent | safe }}
{% endfor %}

# Arkisto

Vanhempia uutisia on [arkistossa](/vanhaset.html).

# Aikataulu

Katso myös [valmennuksen aikataulua](/aikataulu/).
