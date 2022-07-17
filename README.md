### Termux.dev

This is the source repository for [termux.github.io](https://termux.github.io) and its custom domain [termux.dev]. The [termux.org] is redirected to [termux.dev]. The [termux.com](https://termux.com/) is mirrored from [termux/termux.com](https://github.com/termux/termux.com) currently, until it can be redirected to [termux.dev].
##



## Run locally

Install dependencies as explained at [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/), then run

```
bundle exec jekyll serve
```

to start a local server at http://localhost:4000.

If [`_config.yml`] file was updated, then stop server with `ctrl + c` and start it again for changes to take effect.
##



## Add New Category For Posts

1. Add a new page file for the category at `<language>/posts/<category_name>.html` with the following contents, where `<language>` is language code like `ru`. Replace `<category_name>` with the actual name for the category in the file name and [front matter](https://jekyllrb.com/docs/front-matter). The `category_name` variable is used by [`category.html`](_includes/posts/category.html) to load posts for the category. Check [`en/posts/general.html`](en/posts/general.html) for the `general` category as a sample. The front matter title must be language specific.

```
---
layout: page
title: <category_name> Posts
no_add_title_heading: true
category_name: <category_name>
page_ref: /posts/<category_name>.html
---

{% include posts/category.html %}

```

2. Add `[{%- include t.html root="posts" key="views.index.<category_name>" -%}](/{{- page.lang -}}/posts/<category_name>.html)` link for the category in [`_layouts/posts/index.md`](_layouts/posts/index.md) like `[{%- include t.html root="posts" key="views.index.general" -%}](/{{- page.lang -}}/posts/general.html)`. The translation for the category must be added to the `_data/posts/t/<language>/view.yml` file with the `index.<category_name>` key, like in [`_data/posts/t/en/view.yml`](_data/posts/t/en/view.yml). The `index.<category_name>_posts` key must also be added that is used by [`category.html`](_includes/posts/category.html).

3. Add front matter default values for `category` for the `_posts/*/<category_name>` path scope in [`_config.yml`] file. This is required because otherwise jekyll will not assign the `category` automatically to the posts and posts will not be added to the `site.categories` used by [`category.html`](_includes/category.html) and so posts won't show for the category. Check [jekyll docs](https://jekyllrb.com/docs/configuration/front-matter-defaults) for more info. If we used the `<category_name>/_posts/` path for posts, then `<category_name>` would have been automatically assigned to the post since its exist above the `_posts` directory in the path (check [`page.categories` variable](https://jekyllrb.com/docs/variables)), but we can't use that since we need to maintain `_posts/<language>` directory structure and we don't want language to be added as the category and added after `/posts` in url. We can also add `category` to front matter of each post file but that just creates repeatability.

```
defaults:
  -
    scope:
      path: "_posts/*/<category_name>"
    values:
      category: <category_name>
```

4. For each new language added for posts, add following to [`_config.yml`] file so that proper language based route is assigned to posts and the `lang` front matter value is also assigned so that it can be accessed with `page.lang`.

```
  -
    scope:
      path: "_posts/<language>"
    values:
      lang: <language>
      permalink: /<language>/:collection/:categories/:year/:month/:day/:title:output_ext
```
##



## Add New Post In Category

Check [jekyll docs](https://jekyllrb.com/docs/posts) and [github docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#adding-a-new-post-to-your-site) for details.

1. Add the file for the `en` language post under the directory for the category at `_posts/en/<category_name>/YYYY-MM-DD-POST_TITLE.md`. For example, by creating the file `_posts/en/general/1970-01-01-post-title.md`, jekyll will automatically create a route for the post at `en/posts/general/1970/01/01/post-title.html`. For translations of posts to other languages than `en`, create a file at `_posts/<language>/<category_name>/YYYY-MM-DD-POST_TITLE.md`, where `<language>` is language code like `ru`. The front matter title must be language specific. You can also add `last_modified_at` and `author` key values in the front matter.

```
---
title:  "Post Title"
page_ref: /posts/<category_name>/YYYY/MM/DD/<post_basename>.html
---

Post Content
```

2. Add any asset files used by the post under the `assets/posts/globals/<category_name>/YYYY-MM-DD-POST_TITLE` or `assets/posts/<language>/<category_name>/YYYY-MM-DD-POST_TITLE` directory, like `assets/posts/globals/general/1970-01-01-post-title` or `assets/posts/<language>/general/1970-01-01-post-title` and link to them with `[Text Asset](/assets/posts/globals/general/1970-01-01-post-title/asset.txt)` or `![Image Asset](/assets/posts/globals/general/1970-01-01-post-title/asset.png)`. Check [jekyll docs](https://jekyllrb.com/docs/posts/#including-images-and-resources) for more.

3. Ensure that the first paragraph of the post is a just a short description of the post since that text will show in the posts list for the category. This is done by setting `show_excerpts` to `true` in [`_config.yml`](_config.yml) and used by [`category.html`](_includes/category.html). Check [jekyll docs](https://jekyllrb.com/docs/posts/#post-excerpts) for more info.

4. Each post of the site must have the `page_ref` key in its front matter for its unique absolute path on the site (not local path) without the language prefix to find alternate translations of a page. All translations must have the same `page_ref` and should equal the english file name. This allows alternate translations to have different language specific filenames, but the same reference to allow site language change and search engine indexing via sitemaps.xml to be added later. For example, `_posts/en/general/1970-01-01-post-title.md` file should have `page_ref: /posts/general/1970/01/01/post-title.html` and so should any of its translations.
##


[termux.dev]: https://termux.dev