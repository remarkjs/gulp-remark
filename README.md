# gulp-remark

[![Greenkeeper badge](https://badges.greenkeeper.io/denysdovhan/gulp-remark.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Gulp plugin for [remark][remark] — markdown processor powered by plugins

## Install

    npm install --save-dev gulp-remark

## Usage

```js
import gulp from 'gulp';
import remark from 'gulp-remark';
import html from 'remark-html';
import lint from 'remark-lint';

gulp.task('default', () =>
  gulp.src('*.md')
    .pipe(remark().use(html).use(lint))
    .pipe(gulp.dest('dist'))
);
```

## API

### gulpRemark([options])

Gulp plug-in. It processes your files through [remark][remark]. If you want to define specified options, use [`.remarkrc`][remarkrc]. The ignoring of files available using [`.remarkignore`][remarkignore] file. So, it’s more like the [`remark-cli`][cli].

#### options

Type: `Object`  
Default: `{}`

The [parse][remark-parse-settings] and [stringify][remark-stringify-settings] settings can be passed in
`options.settings`, or in configuration files (`.remarkrc`, `package.json`).

*   [`settings`][settings] (`Object`, optional)
    — Configuration for the parser and compiler of the processor.
*   [`detectConfig`][detect-config] (`boolean`, default: `true`)
    — Whether to search for configuration files.
*   [`detectIgnore`][detect-ignore] (`boolean`, default: `true`)
    — Whether to search for ignore files.
*   [`rcPath`][rc-path] (`string`, optional)
    — File-path to a configuration file to load.
*   [`ignorePath`][ignore-path] (`string`, optional)
    — File-path to an ignore file to load.
*   [`silent`][silent] (`boolean`, default: `false`)
    — Report only fatal errors.
*   [`quiet`][quiet] (`boolean`, default: `silent`)
    — Do not report successful files.
*   [`frail`][frail] (`boolean`, default: `false`)
    — Treat warnings as errors.
*   [`streamError`][stream-error] (`WritableStream`, default: `process.stderr`)
    — Stream to write the report (if any) to.
*   [`plugins`][plugins] (`Object`, optional)
    — Map of plug-in names or paths and options to use.
*   [`tree`][tree] (`boolean`, default: `false`)
    — Whether to treat both input and output as a syntax tree.
*   [`treeIn`][tree-in] (`boolean`, default: `tree`)
    — Whether to treat input as a syntax tree.
*   [`treeOut`][tree-out] (`boolean`, default: `tree`)
    — Whether to treat output as a syntax tree.
*   [`color`][color] (`boolean`, default: `false`)
    — Whether to report with ANSI colour sequences.

### gulpRemark().use([plugin][remark-plugins][, options])

Change the way [`remark`][remark] works by using a [`plugin`][remark-plugins].

#### plugin

*Required*  
Type: `Function`

A [Remark plugin][remark-plugins].

#### options

Type: `Object`  
Default: `{}`

Passed to plugin. Specified by its documentation.

## License

MIT © [Denys Dovhan](http://denysdovhan.com)

[remark]: http://remark.js.org/
[cli]: https://github.com/wooorm/remark/tree/master/packages/remark-cli
[remarkrc]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[remarkignore]: https://github.com/unifiedjs/unified-engine/blob/master/doc/ignore.md
[remark-use]: https://github.com/unifiedjs/unified#processoruseplugin-options
[remark-plugins]: https://github.com/wooorm/remark/blob/master/doc/plugins.md
[remark-parse-settings]: https://github.com/wooorm/remark/tree/master/packages/remark-parse#processoruseparse
[remark-stringify-settings]: https://github.com/wooorm/remark/tree/master/packages/remark-stringify#processorusestringify

[npm-url]: https://npmjs.org/package/gulp-remark
[npm-image]: https://img.shields.io/npm/v/gulp-remark.svg?style=flat-square

[travis-url]: https://travis-ci.org/denysdovhan/gulp-remark
[travis-image]: https://img.shields.io/travis/denysdovhan/gulp-remark.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/denysdovhan/gulp-remark
[coveralls-image]: https://img.shields.io/coveralls/denysdovhan/gulp-remark.svg?style=flat-square

[depstat-url]: https://david-dm.org/denysdovhan/gulp-remark
[depstat-image]: https://david-dm.org/denysdovhan/gulp-remark.svg?style=flat-square

[detect-config]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionsdetectconfig
[stream-error]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionsstreamerror
[tree]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionstree
[tree-in]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionstreein
[tree-out]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionstreeout
[rc-path]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionsrcpath
[settings]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionssettings
[detect-ignore]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionsdetectignore
[ignore-path]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionsignorepath
[plugins]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionsplugins
[color]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionscolor
[silent]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionssilent
[quiet]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionsquiet
[frail]: https://github.com/unifiedjs/unified-engine/blob/master/doc/options.md#optionsfrail
