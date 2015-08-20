var gulp     = require('gulp');
var jshint   = require('gulp-jshint');
var Server   = require('karma').Server;

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('watch', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('lint', function() {
  return gulp.src('./public/js/*.js')
    .pipe(jshint({
        newcap: false
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint', 'test']);
gulp.task('ci', ['lint', 'test']);
