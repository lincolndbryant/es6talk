var gulp = require('gulp'),
    concat = require('gulp-concat'),
    traceur = require('gulp-traceur'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps');

var traceurConfig = {
  modules: 'instantiate',
  moduleName: true,
  experimental: true,
  annotations: true,
  types: true,
  typed: true,
  asyncFunctions: true,
};

var src = "./src/**/**.js";

gulp.task('src', function () {
  return gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(traceur(traceurConfig))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"))
});

gulp.task('default', ['src']);

gulp.task('watch', function () {
  gulp.start('src');
  return watch(src, function (files, cb) {
    gulp.start('src', cb);
  });
});