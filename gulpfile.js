var gulp = require('gulp');
var less = require('gulp-less');
// var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');



gulp.task('compile-less', function() {
  return gulp.src('wp-content/themes/ch8se/less/style.less')
    .pipe(plumber({errorHandler: notify.onError({title: 'LESS compile error',message: "<%= error.message %>"})}))
    .pipe(less())
    .pipe(plumber.stop())
    .pipe(gulp.dest('wp-content/themes/ch8se'));
    // .pipe(connect.reload());
});

// gulp.task('webserver', function() {
//   connect.server({
//     livereload: true,
//     port: 3030
//   });
// });


gulp.task('watch', function() {
  gulp.watch('wp-content/themes/ch8se/less/*.less' , ['compile-less']);
  // livereload.listen(35729);
});

gulp.task('build', ['compile-less']);
gulp.task('default', ['build',/* 'webserver',*/ 'watch']);
