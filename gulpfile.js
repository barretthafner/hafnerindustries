'use strict';

var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  minify = require('gulp-minify-html'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  plumber = require('gulp-plumber'),
  del = require('del'),
  path = require('path');

var webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  webpackConfig = require('./webpack.config.js');

// Configure environment -------------------------------------------------------------------

var env = process.env.NODE_ENV || 'development';

var i = process.argv.indexOf("--production");
if (i > -1) {
  env = 'production';
}

var productionEnv = env === 'production';

// Configure source paths -------------------------------------------------------------------

var paths = {
  index: './src/index.html',
  sass: './src/public/sass/**/*.scss',
  img: './src/public/img/**/*',
  app: './src/client/**/*',
  js: './src/js/**/*'
};

// Basic Tasks -------------------------------------------------------------------

// Default task
gulp.task('default', ['build', 'watch']);

// Build task
gulp.task('build', ['clean', 'html', 'styles', 'images', 'webpack']);

// Watch task
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(paths.index, ['html']);
  gulp.watch(paths.sass, ['styles']);
  gulp.watch(paths.img, ['images']);
  gulp.watch(paths.app, ['webpack']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('clean', function () {
  del.sync(['dist']);
});

// Build tasks  -------------------------------------------------------------------

// Minify index
gulp.task('html', function () {
  return gulp.src(paths.index)
    .pipe(plumber())
    .pipe(gulpif(productionEnv, minify()))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

// Compile Sass task
gulp.task('styles', function () {
  return gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulpif(productionEnv, cleanCSS()))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});


// Move Images task
gulp.task('images', function () {
  return gulp.src(paths.img)
    .pipe(plumber())
    .pipe(gulpif(productionEnv, imagemin({
      optimizationLevel: 5
    })))
    .pipe(gulp.dest('dist/imgs/'))
    .pipe(livereload());
});




// Webpack -------------------------------------------------------------------

gulp.task('webpack', function () {

  var myConfig = Object.create(webpackConfig);
  if (productionEnv) {
    myConfig.plugins = myConfig.plugins.concat(
      new webpack.DefinePlugin({
        "process.env": {
          // This reduces the react lib size
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );
  } else {
    myConfig.devtool = "sourcemap";
    myConfig.debug = true;
  }

  return gulp.src(paths.app)
    .pipe(plumber())
    .pipe(webpackStream(myConfig))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});
