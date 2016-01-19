// gulpfile.js
var remark = require('./index.es5.js');
var html = require('remark-html');
var gulp = require('gulp');

gulp.task('default', function () {
  return gulp.src('*.md')
    .pipe(
      remark().use(html)
    )
    .pipe(gulp.dest('dest/'));
});
