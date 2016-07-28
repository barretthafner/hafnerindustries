'use strict';

var gulp        = require('gulp'),
    webpack     = require('webpack-stream'),
    minifyHTML  = require('gulp-minify-html'),
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify'),
    path        = require('path');

var paths = {
    index:  './src/index.html',
    sass:    './src/sass/**/*.scss',
    img:    './src/img/**/*',
};


// Minify index
gulp.task('html', function() {
  return gulp.src(paths.index)
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist/'));
});

// Compile Sass task
gulp.task('styles', function() {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('webpack', function() {
  return gulp.src('src/index.jsx')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
});

// JavaScript linting task
gulp.task('jshint', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Image optimization task
gulp.task('images', function() {
  return gulp.src(paths.img)
    .pipe(gulp.dest('public/img'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch(paths.index, ['html']);
  gulp.watch(paths.js, ['jshint', 'scripts']);
  gulp.watch(paths.scss, ['styles']);
  gulp.watch(paths.img, ['images'])
});


// Build task
gulp.task('build', ['html', 'styles', 'scripts', 'jshint', 'images']);

// Default task
gulp.task('default', ['build', 'watch']);
