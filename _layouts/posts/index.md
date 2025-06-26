---
layout: page
---

{%- capture md -%}

- [{%- include t.html root="posts" key="views.index.general" -%}](/{{- page.lang -}}/posts/general.html)
- [{%- include t.html root="posts" key="views.index.apps" -%}](/{{- page.lang -}}/posts/apps.html)
- [{%- include t.html root="posts" key="views.index.packages" -%}](/{{- page.lang -}}/posts/packages.html)
- [{%- include t.html root="posts" key="views.index.security" -%}](/{{- page.lang -}}/posts/security.html)

[{%- include t.html root="posts" key="views.index.subscribe_to_rss_feed" -%}](/feed.xml).

{%- endcapture -%}
{{- md | markdownify -}}
