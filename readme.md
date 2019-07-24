# gulp-remark

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[Gulp][] plugin for [**remark**][remark] — Markdown processor powered by
plugins.

## Install

[npm][]:

```sh
npm install --save-dev gulp-remark
```

## Use

```js
var gulp = require('gulp')
var remark = require('gulp-remark')
var html = require('remark-html')
var lint = require('remark-preset-lint-markdown-style-guide')

gulp.task('default', function() {
  gulp
    .src('*.md')
    .pipe(
      remark()
        .use(html)
        .use(lint)
    )
    .pipe(gulp.dest('dist'))
})
```

## API

### `remark([options])`

Create a Gulp plugin.
The files are processed with [**remark**][remark].
This is similar to the [`remark-cli`][cli], so you can specify configuration
with [`.remarkrc`][remarkrc] and ignore files ([`.remarkignore`][remarkignore]).

###### `options`

All options are passed to [`unified-engine-gulp`][engine].
The [parse][remark-parse-settings] and [stringify][remark-stringify-settings]
settings can be passed in `options.settings`, or in configuration files
(`.remarkrc`, `package.json`).

### `remark().use(plugin[, options])`

Change the way [**remark**][remark] works by using a [`plugin`][remark-plugins].

## Security

Use of [**remark**][remark] and its plugins could open you up to
[cross-site scripting (XSS)][xss] or other attacks.
Carefully assess each plugin and the risks involved in using them.

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Denys Dovhan][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/remarkjs/gulp-remark/master.svg

[build]: https://travis-ci.org/remarkjs/gulp-remark

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/gulp-remark.svg

[coverage]: https://codecov.io/github/remarkjs/gulp-remark

[downloads-badge]: https://img.shields.io/npm/dm/gulp-remark.svg

[downloads]: https://www.npmjs.com/package/gulp-remark

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/master/contributing.md

[support]: https://github.com/remarkjs/.github/blob/master/support.md

[coc]: https://github.com/remarkjs/.github/blob/master/code-of-conduct.md

[license]: license

[author]: https://denysdovhan.com

[remark]: https://github.com/remarkjs/remark

[gulp]: https://github.com/gulpjs/gulp

[cli]: https://github.com/remarkjs/remark/tree/master/packages/remark-cli

[remarkrc]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md

[remarkignore]: https://github.com/unifiedjs/unified-engine/blob/master/doc/ignore.md

[remark-plugins]: https://github.com/remarkjs/remark/blob/master/doc/plugins.md

[remark-parse-settings]: https://github.com/remarkjs/remark/tree/master/packages/remark-parse#processoruseparse-options

[remark-stringify-settings]: https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#processorusestringify-options

[engine]: https://github.com/unifiedjs/unified-engine-gulp#engineoptions

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
