var gulp = require('gulp');
var less = require('gulp-less');
// var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

var path = 'wp-content/themes/ch8se';

gulp.task("javascript", function () {
  return gulp.src(path + "/js/app.jsx")
    .pipe(sourcemaps.init())
    .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path + '/js/'));
});


gulp.task('compile-less', function() {
  return gulp.src(path + '/less/style.less')
    .pipe(plumber({errorHandler: notify.onError({title: 'LESS compile error',message: "<%= error.message %>"})}))
    .pipe(less())
    .pipe(plumber.stop())
    .pipe(gulp.dest(path));
    // .pipe(connect.reload());
});

// gulp.task('webserver', function() {
//   connect.server({
//     livereload: true,
//     port: 3030
//   });
// });


gulp.task('watch', function() {
  gulp.watch(path + '/less/*.less' , ['compile-less']);
  gulp.watch(path + '/js/app.jsx' , ['javascript']);
  // livereload.listen(35729);
});

gulp.task('build', ['compile-less', 'javascript']);
gulp.task('default', ['build',/* 'webserver',*/ 'watch']);
