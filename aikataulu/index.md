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
<div class="list-group">
{% for a in aikataulu %}
{% if a['otsikko'] %}<div class="list-group-item-info row">{% else %}<div class="list-group-item row">{% endif %}
<div class="col-sm-3">{{ a['pvm'] | markdownify | safe }}</div>
<div class="col-sm-9">{{ a['tapahtuma'] | markdownify | safe }}</div>
</div>
{% endfor %}
</div>
