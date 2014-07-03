'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function () {
  return gulp.src(['*.js']).pipe(jshint());
});
