// gulpfile.js
var remark = require('./index.es5.js');
var gulp = require('gulp');

gulp.task('default', function () {
  return gulp.src('*.md').pipe(remark());
});
