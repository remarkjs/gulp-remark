# gulp-remark [![Build Status][build-badge]][build-status] [![Coverage Status][coverage-badge]][coverage-status] [![Chat][chat-badge]][chat]

[Gulp][] plugin for [**remark**][remark] — markdown processor powered by
plugins.

## Installation

[npm][]:

```bash
npm install --save-dev gulp-remark
```

## Usage

```js
var gulp = require('gulp')
var remark = require('remark-gulp')
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
This is similar to the [`remark-cli`][cli], so you can
specify configuration with [`.remarkrc`][remarkrc] and ignore files with
[`.remarkignore`][remarkignore].

###### `options`

All options are passed to [`unified-engine-gulp`][engine].
The [parse][remark-parse-settings] and [stringify][remark-stringify-settings]
settings can be passed in `options.settings`, or in configuration files
(`.remarkrc`, `package.json`).

### `remark().use(plugin[, options])`

Change the way [`remark`][remark] works by using a [`plugin`][remark-plugins].

## Contribute

See [`contributing.md` in `remarkjs/remark`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Denys Dovhan][author]

[build-badge]: https://img.shields.io/travis/remarkjs/gulp-remark.svg

[build-status]: https://travis-ci.org/remarkjs/gulp-remark

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/gulp-remark.svg

[coverage-status]: https://codecov.io/github/remarkjs/gulp-remark

[chat-badge]: https://img.shields.io/gitter/room/remarkjs/Lobby.svg

[chat]: https://gitter.im/remarkjs/Lobby

[license]: license

[author]: http://denysdovhan.com

[npm]: https://docs.npmjs.com/cli/install

[contributing]: https://github.com/remarkjs/remark/blob/master/contributing.md

[coc]: https://github.com/remarkjs/remark/blob/master/code-of-conduct.md

[remark]: https://github.com/remarkjs/remark

[gulp]: https://github.com/gulpjs/gulp

[cli]: https://github.com/remarkjs/remark/tree/master/packages/remark-cli

[remarkrc]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md

[remarkignore]: https://github.com/unifiedjs/unified-engine/blob/master/doc/ignore.md

[remark-plugins]: https://github.com/remarkjs/remark/blob/master/doc/plugins.md

[remark-parse-settings]: https://github.com/remarkjs/remark/tree/master/packages/remark-parse#processoruseparse

[remark-stringify-settings]: https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#processorusestringify

[engine]: https://github.com/unifiedjs/unified-engine-gulp#engineoptions
