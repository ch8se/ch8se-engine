var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload'); //requires LiveReload plugin in browser
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var path = 'wp-content/themes/ch8se';


gulp.task('apply-prod-environment', function() {
  process.env.NODE_ENV = 'production';
});



gulp.task('compile-less', function() {
  return gulp.src(path + '/less/style.less')
    .pipe(plumber({errorHandler: notify.onError({title: 'LESS compile error',message: "<%= error.message %>"})}))
    .pipe(less())
    .pipe(plumber.stop())
    .pipe(gulp.dest(path))
    .pipe(livereload());
});

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "JS compile error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

gulp.task('browserify', function() {
  return browserify(path + "/app/app.js", {debug: true})
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle().on('error', handleErrors)
    .pipe(source("js/app.js"))
    .pipe(gulp.dest(path))
    .pipe(livereload());
});

gulp.task('browserify-uglify', function() {
  return browserify(path + "/app/app.js", {debug: false})
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle().on('error', handleErrors)
    .pipe(source("js/app.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(path))
    .pipe(livereload());
});


gulp.task('watch', function() {
  gulp.watch(path + '/less/*.less' , ['compile-less']);
  gulp.watch(path + '/app/**/*.js' , ['browserify']);
  // gulp.watch('/*.html' , ['html']);
  livereload.listen();
});

gulp.task('build', ['browserify', 'compile-less']);
gulp.task('production', ['apply-prod-environment', 'browserify-uglify', 'compile-less']);
gulp.task('default', ['build', 'watch']);
