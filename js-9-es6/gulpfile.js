'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var del = require('del');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

var serverConfig = {
  server: {
    baseDir: './dist'
  },
  host: 'localhost',
  port: 9000,
  logPrefix: 'NASA',
  notify: false,
  open: false
};

gulp.task('bundleHtml', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('bundleJs', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('webServer', function() {
  browserSync(serverConfig);
});

gulp.task('watch', function() {
  gulp.watch('src/*.html', ['bundleHtml']);
  gulp.watch('src/js/**/*.js', ['bundleJs']);
});

gulp.task('clean:dist', function() {
  return del.sync('./dist');
});

gulp.task('start', ['clean:dist', 'bundleHtml', 'bundleJs', 'webServer', 'watch']);
