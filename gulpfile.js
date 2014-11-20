var gulp = require('gulp'),
    concat = require('gulp-concat'),
    to5 = require('gulp-6to5'),
    sourcemaps = require('gulp-sourcemaps');

var es6Config = {
    modules: 'amd',
    amdModuleIds: true
};

gulp.task('src', function() {
    return gulp.src('./src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(to5(es6Config))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['src']);