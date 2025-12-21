---
layout: page
title: Aikataulu
url: /aikataulu/
---
<p class="mb-3">
  <a href="/aikataulu.ics" class="btn btn-outline-secondary btn-sm">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-plus me-1" viewBox="0 0 16 16">
      <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"/>
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
    </svg>
    Tilaa kalenteri
  </a>
</p>

<ul class="list-unstyled">
{% for a in aikataulu %}
{%- set ots = a['otsikko'] %}
{%- set past = a['isPast'] %}
<li class="row flex-wrap mb-2 mt-2 {% if ots %}bg-info bg-gradient text-light fw-bolder p-1{% endif %}{% if past %} text-muted{% endif %}">
<div class="col-sm-3">{{ a['pvm'] | markdownify | safe }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify | safe }}</div>
</li>
{% endfor %}
</ul>

<br>

Lue myös viikonloppuvalmennusten [käytännön asioista](/kaytanto/).
