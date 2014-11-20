var gulp = require('gulp'),
    concat = require('gulp-concat'),
    to5 = require('gulp-6to5'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('src', function() {
    return gulp.src('./src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(to5({modules: 'amd', amdModuleIds: true, sourceRoot: 'src/js'}))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['src']);