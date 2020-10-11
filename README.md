<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://thejs.dev/icons/icon-384x384.png" width="300" />
  </a>
</p>

# JS.dev
[![Build Status][build-status]][build-url]
[![Contribute on Github][gh-shield]][thejscgh]
[![Node Version 12.13.0][node-shield]][node12130]

[JS.dev][jsdev] is an open and transparent JavaScript development community. We welcome and publish contributions from members of the community, for a diverse range of topics covering development with JavaScript.

Our website is built with [GatsbyJS][gatsbyjs] and hosted on [Github Pages][gh-pages]. If you would like to request a feature, you can do so on our issues page, or submit through a pull request.

## 📝 Contributing

Our blog pages are a combination of markdown files and frontmatter formatting. To submit a new article, [create a pull request][thejscgh] on the content repository, and follow the guide in that project.

## 🚀 Building locally

This project makes use of git submodules:

* [jsdev-content][thejscgh] for the blog content

This project makes use of the [nvm][nvm] version manager, with [node version][node12130] `12.13.0`. To setup:

```bash
# Make sure the version of node exists first
nvm install 12.13.0
```

On Linux/OSX/WSL:
```bash
nvm use
```

On Windows (use [Windows nvm][winnvm]):
```bash
# Windows terminal you have to use specific version
nvm use 12.13.0
```

Run `npm install` to download and install the project dependencies. The easiest way to get GatsbyJS up and running in your local environment is to download the GatsbyJS CLI tools:

```bash
npm i -g gatsby gatsby-cli
```

At this point, your `content` directory will be empty. Let's go ahead and set that up:

```bash
git submodule update --init --recursive
```

We can now use GatsbyJS CLI to start development in a local environment:

```bash
gatsby develop
```

Gives us two local URLs:

* Localhost development site: [http://localhost:8080](http://localhost:8080)
* GraphQL: [http://localhost:8080/__graphql](http://localhost:8080/__graphql)

## 💫 Deploy

To build for production deployment, run the GatsbyJS `serve` command. Assets such as `sitemap.xml`, `feed.rss` and `robots.txt` will become available, while the GraphQL server will not be started.

```bash
npm run clean && npm run build && npm run serve
```

You can view the deployed site locally:

* [http://localhost:9000/](http://localhost:9000/)

[node12130]: https://nodejs.org/en/blog/release/v12.13.0/
[thejscgh]: https://github.com/thejsdevsite/jsdev-content/
[gh-shield]: https://img.shields.io/badge/style-github-orange?style=flat-square&label=contribute%20on&logo=github
[node-shield]: https://img.shields.io/badge/style-12.13.0-brightgreen?style=flat-square&label=node
[build-status]: https://travis-ci.com/thejsdevsite/jsdev.svg?branch=master
[build-url]: https://travis-ci.com/thejsdevsite/jsdev
[jsdev]: https://thejs.dev
[gatsbyjs]: http://gatsbyjs.com
[gh-pages]: https://pages.github.com/
[nvm]: https://github.com/nvm-sh/nvm
[winnvm]: https://github.com/coreybutler/nvm-windows