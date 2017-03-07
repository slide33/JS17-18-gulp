var gulp = require('gulp'),
connect = require('gulp-connect'),
concatCss = require('gulp-concat-css'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
cssmin = require('gulp-cssmin');

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("main-css.css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('main/'));
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('main/'));
});


gulp.task('watch', function(){
  gulp.watch('css/*.css', ['css']);
  gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'css', 'watch']);
