# gulp-mdast

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Gulp plugin for [mdast][mdast] — markdown processor powered by plugins

## Install

    npm install --save-dev gulp-mdast

## Usage

```js
import gulp from 'gulp';
import mdast from 'gulp-mdast';
import html from 'mdast-html';

gulp.task('default', () =>
  gulp.src('*.md')
    .pipe(mdast.use(html))
    .pipe(gulp.dest('dist'))
);
```

## API

### gulpMdast([options])

#### options

Type: `Object`  
Default: `{}`

See the [`mdast.process`][mdast-opts] options.

### gulpMdast.use([plugin][mdast-plugins][, options])

Change the way [`mdast`][mdast] works by using a [`plugin`][mdast-plugins].

#### plugin

*Required*  
Type: `Function|Array.<Function>`

A [mdast plugin][mdast-plugins] or `Array` of plugins.

#### options

Type: `Object`  
Default: `{}`

Passed to plugin. Specified by its documentation.

## License

MIT © [Denys Dovhan](http://denysdovhan.com)

[mdast]: http://mdast.js.org/
[mdast-opts]: https://github.com/wooorm/mdast/blob/master/doc/mdastsetting.7.md
[mdast-use]: https://github.com/wooorm/mdast#mdastuseplugin-options
[mdast-plugins]: https://github.com/wooorm/mdast/blob/master/doc/plugins.md

[npm-url]: https://npmjs.org/package/gulp-mdast
[npm-image]: https://img.shields.io/npm/v/gulp-mdast.svg?style=flat-square

[travis-url]: https://travis-ci.org/denysdovhan/gulp-mdast
[travis-image]: https://img.shields.io/travis/denysdovhan/gulp-mdast.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/denysdovhan/gulp-mdast
[coveralls-image]: https://img.shields.io/coveralls/denysdovhan/gulp-mdast.svg?style=flat-square

[depstat-url]: https://david-dm.org/denysdovhan/gulp-mdast
[depstat-image]: https://david-dm.org/denysdovhan/gulp-mdast.svg?style=flat-square
