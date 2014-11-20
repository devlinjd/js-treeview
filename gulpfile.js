'use strict';

var gulp = require('gulp');

var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var header = require('gulp-header');
var qunit = require('gulp-qunit');

var pkg = require('./package.json');
var scripts = ['./src/*.js'];
var css = ['./src/*.css'];
var build = './dist';

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
''].join('\n');

gulp.task('jslint', function () {
  return gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jsmin', function () {
  return gulp.src(['./src/treeview.js'])
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest(build));
});

gulp.task('csslint', function () {
  return gulp.src(css).pipe(csslint());
});

gulp.task('cssmin', function () {
  return gulp.src(['./src/treeview.css'])
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssmin())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest(build));
});

gulp.task('test', ['jslint', 'csslint'], function () {
  return gulp.src('./test/index.html').pipe(qunit());
});

gulp.task('watch', function () {
  gulp.watch(scripts, ['jslint']);
  gulp.watch(css, ['csslint']);
  gulp.watch(['./test/*.js', './test/*.html'], ['test']);
});

gulp.task('build', ['jsmin', 'cssmin']);
gulp.task('default', ['test']);
