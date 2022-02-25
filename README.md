### Termux.org

This is the source repository for [termux.github.io](https://termux.github.io) and its redirect site [termux.org](https://termux.org).
##



## Run locally

Install dependencies as explained at [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/), then run

```
bundle exec jekyll serve
```

to start a local server at http://localhost:4000.
##



## Add New Category For Posts

1. Add a new page file for the category at `pages/posts/<category_name>.html` with the following contents. Replace `<category_name>` with the actual name for the category in the file name and [front matter](https://jekyllrb.com/docs/front-matter). The `category_name` variable is used by [`category.html`](_includes/category.html) to load posts for the category. Check [`general.html`](pages/posts/general.html) for the `general` category as a sample.

```
---
layout: default
title: <category_name> Posts
permalink: /posts/<category_name>
category_name: <category_name>
---

{% include category.html %}
```

2. Add `[<category_name>](/posts/<category_name>)` link to category in [`posts.md`](pages/posts.md) like [General](/posts/general). The link url must match the `permalink` defined in category page above.
##



## Add New Post In Category

Check [jekyll docs](https://jekyllrb.com/docs/posts) and [github docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#adding-a-new-post-to-your-site) for details.

1. Add the file for the post under the directory for the category at `_posts/<category_name>/YYYY-MM-DD-POST_TITLE.md`. For example, by creating the file `_posts/general/1970-01-01-post-title.md`, jekyll will automatically create a route for the post at `general/1970/01/01/post-title.html`. Also make sure to set the `category` in the front matter and also ensure its the same as category directory name under the `_path` directory, otherwise jekyll will not add the category to `site.categories` used by [`category.html`](_includes/category.html) and the posts won't show for the category.

```
---
layout: post
title:  "Post Title"
category: <category_name>
---

Post Content
```

2. Add any asset files used by the post under the `assets/posts/<category_name>/YYYY-MM-DD-POST_TITLE` directory, like `assets/general/1970-01-01-post-title` and link to them with `[Text Asset](/assets/general/1970-01-01-post-title/asset.txt)` or `![Image Asset](/assets/general/1970-01-01-post-title/asset.png)`. Check [jekyll docs](https://jekyllrb.com/docs/posts/#including-images-and-resources) for more.

3. Ensure that the first paragraph of the post is a just a short description of the post since that text will show in the posts list for the category. This is done by setting `show_excerpts` to `true` in [`_config.yml`](_config.yml) and used by [`category.html`](_includes/category.html). Check [jekyll docs](https://jekyllrb.com/docs/posts/#post-excerpts) for more info.
##
