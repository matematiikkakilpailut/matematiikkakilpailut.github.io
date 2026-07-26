---
layout: page
title: Aikataulu
url: /aikataulu/
description: >-
  Matematiikan olympiavalmennuksen aikataulu: tulevat valmennusviikonloput,
  leirit ja kilpailut.
scripts: |
  <script defer src="/js/aikataulu.js"></script>
---

{########################################
 # Tapahtumalista: _data/aikataulu.yaml #
 ########################################}

{#- Ei yhtään tyhjää riviä tai sisennystä! muuten markdown-it
    tuottaa <p>-elementtejä -#}
{%- for a in aikataulu.aikataulu %}
{%- if a.otsikko %}
{%- if not loop.first %}
</ul>
{%- endif %}
<div class="mk-kausi"><h2>{{ a.tapahtuma | markdownify | safe }} {{ a.pvm | markdownify | safe }}</h2></div>
<ul class="mk-tapahtumat">
{%- else %}
{%- if loop.first %}
<ul class="mk-tapahtumat">
{%- endif %}
<li class="{{ a | tapahtumanTila }}"{% if a.alkaa %} data-alkaa="{{ a.alkaa | isoPaiva }}"{% endif %}{% if a.paattyy %} data-paattyy="{{ a.paattyy | isoPaiva }}"{% endif %}>
<div class="mk-pvm">{{ a.pvm | markdownify | safe }}</div>
<div>{{ a.tapahtuma | markdownify | safe }}
{%- if a.ilmo %}
<div class="mt-2 d-flex flex-wrap align-items-center gap-3">
<a class="mk-nappi mk-nappi--vihrea" href="{{ a.ilmo }}">{{ a.ilmoteksti | default("Ilmoittaudu Päivölään") }}</a>
<a class="fw-bold text-decoration-none" href="/kaytanto/paivola/">Käytännön asiat &rarr;</a>
</div>
{%- endif %}
</div>
</li>
{%- endif %}
{%- endfor %}
{%- if aikataulu.aikataulu.length %}
</ul>
{%- endif %}
