---
layout: page
title: Aikataulu
url: /aikataulu/
eleventyNavigation:
  key: aikataulu
  parent: root
  order: 0
  title: Aikataulu
---
<div role="list">
{% for a in aikataulu %}
{%- set ots = a['otsikko'] %}
<div class="row flex-wrap mb-2 mt-2 {% if ots %}bg-info bg-gradient text-light fw-bolder p-1{% endif %}" 
  {%- if ots %}role="heading"{% else %}role="listitem"{% endif %}>
<div class="col-sm-3">{{ a['pvm'] | markdownify | safe }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify | safe }}</div>
</div>
{% endfor %}
</div>

