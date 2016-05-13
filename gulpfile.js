var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    jshint      = require('gulp-jshint'),
    minifyHTML  = require('gulp-minify-html'),
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify'),
    path        = require('path');

var paths = {
    index:  './site/index.html',
    js:     './site/js/**/*.js',
    scss:   './site/scss/*.scss',
    less:   './site/less/**/*.less',
    img:    './site/img/**',
};


// Minify index
gulp.task('html', function() {
  return gulp.src(paths.index)
//    .pipe(minifyHTML())
    .pipe(gulp.dest('public/'));
});

// Compile Sass task
gulp.task('styles', function() {
  return gulp.src(paths.scss)
    .pipe(sass({}))
    .pipe(gulp.dest('public/css'));
});

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  return gulp.src(paths.js)
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
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
