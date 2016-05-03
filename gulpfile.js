var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload'); //requires LiveReload plugin in browser
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var path = 'wp-content/themes/ch8se';



gulp.task('compile-less', function() {
  return gulp.src(path + '/less/style.less')
    .pipe(plumber({errorHandler: notify.onError({title: 'LESS compile error',message: "<%= error.message %>"})}))
    .pipe(less())
    .pipe(plumber.stop())
    .pipe(gulp.dest(path))
    .pipe(livereload());
});

// Handle JS errors
function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "JS compile error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

// Compile JS
// There are 2 files: app used for frontent side and admin used only in admin. They have acces to same modules
function compileJs(file, minify) {
  return browserify(path + "/app/" + file + ".js", {debug: true})
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle().on('error', handleErrors)
    .pipe(source("js/" + file + ".js"))
    .pipe(gulpif(minify, buffer()))
    .pipe(gulpif(minify, uglify()))
    .pipe(gulp.dest(path))
    .pipe(livereload());
}

gulp.task('compile-app', function() {
  return compileJs('app');
});
gulp.task('compile-admin', function() {
  return compileJs('admin');
});

gulp.task('compile-app-uglify', function() {
  process.env.NODE_ENV = 'production';

  compileJs('app', true);
  compileJs('admin', true);
});


gulp.task('watch', function() {
  gulp.watch(path + '/less/*.less' , ['compile-less']);
  gulp.watch(path + '/app/**/*.js' , ['compile-app', 'compile-admin']);
  // gulp.watch('/*.html' , ['html']);
  livereload.listen();
});

gulp.task('build', ['compile-app', 'compile-admin', 'compile-less']);
gulp.task('production', ['compile-app-uglify', 'compile-less']);
gulp.task('default', ['build', 'watch']);
