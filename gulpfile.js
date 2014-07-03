'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('jshint', function () {
  gulp.src(['*.js']).pipe(jshint());
});

gulp.task('default', ['jshint'], function () {
  gulp.src(['treeview.js'])
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(rename('treeview.min.js'))
    .pipe(gulp.dest('./dist'));
  gulp.src(['treeview.css']).pipe(gulp.dest('./dist'));
});
