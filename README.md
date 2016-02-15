# gulp-remark

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

Gulp plug-in. It processes your files through [remark][remark]. If you want to define specified options, use [`.remarkrc`][remarkrc]. The ignoring of files available using [`.remarkignore`][remarkignore] file.

#### options

Type: `Object`  
Default: `{}`

Passed to remark. [See its documentation][remark-settings].

### gulpRemark().use([plugin][remark-plugins][, options])

Change the way [`remark`][remark] works by using a [`plugin`][remark-plugins].

#### plugin

*Required*  
Type: `Function|Array.<Function>`

A [Remark plugin][remark-plugins] or `Array` of plugins.

#### options

Type: `Object`  
Default: `{}`

Passed to plugin. Specified by its documentation.

## License

MIT © [Denys Dovhan](http://denysdovhan.com)

[remark]: http://remark.js.org/
[remarkrc]: https://github.com/wooorm/remark/blob/master/doc/remarkrc.5.md
[remarkignore]: https://github.com/wooorm/remark/blob/master/doc/remarkignore.5.md
[remark-use]: https://github.com/wooorm/remark#remarkuseplugin-options
[remark-plugins]: https://github.com/wooorm/remark/blob/master/doc/plugins.md
[remark-settings]: https://github.com/wooorm/remark#remarkprocessvalue-options-done

[npm-url]: https://npmjs.org/package/gulp-remark
[npm-image]: https://img.shields.io/npm/v/gulp-remark.svg?style=flat-square

[travis-url]: https://travis-ci.org/denysdovhan/gulp-remark
[travis-image]: https://img.shields.io/travis/denysdovhan/gulp-remark.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/denysdovhan/gulp-remark
[coveralls-image]: https://img.shields.io/coveralls/denysdovhan/gulp-remark.svg?style=flat-square

[depstat-url]: https://david-dm.org/denysdovhan/gulp-remark
[depstat-image]: https://david-dm.org/denysdovhan/gulp-remark.svg?style=flat-square
