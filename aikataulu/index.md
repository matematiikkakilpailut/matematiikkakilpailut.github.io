---
layout: page
title: Aikataulu
url: /aikataulu/
---
<ul class="list-unstyled">
{% for a in aikataulu %}
{%- set ots = a['otsikko'] %}
<li class="row flex-wrap mb-2 mt-2 {% if ots %}bg-info bg-gradient text-light fw-bolder p-1{% endif %}">
<div class="col-sm-3">{{ a['pvm'] | markdownify | safe }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify | safe }}</div>
</li>
{% endfor %}
</ul>

<br>

<br>

Lue myös viikonloppuvalmennusten [käytännön asioista](/kaytanto/).
