// Borrowed from https://github.com/chybie/NgBabelJspm

var gulp = require('gulp');
var connect = require('gulp-connect');

// Html task
gulp.task('html', function() {
  gulp.src('app/**/*.html')
    .pipe(connect.reload());
});

// JS task
gulp.task('js', function() {
  gulp.src('app/**/*.js.js')
    .pipe(connect.reload());
});

// Watch our changes
gulp.task('watch', function(){
  //html
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['app/**/*.js'], ['js']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

// Start the tasks
gulp.task('default', ['connect', 'watch']);
