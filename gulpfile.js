var gulp = require('gulp');
var mocha = require('gulp-mocha');

// Gulp task to make the test with mocha plugin
gulp.task('test',function () {
  gulp.src('./test.js')
    .pipe(mocha())
    .on('error', function () {
      this.emit('end');
    });

});

/*
 Gulp task to listen to changes on the files and re-run
 the task test in this case
*/
gulp.task('watch', function () {
  gulp.watch('./*.js', ['test']);
});
