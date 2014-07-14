var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
var jasmine = require('gulp-jasmine');

var testFiles = [
  'public/bower_components/angular/angular.js',
  'public/bower_components/angular-route/angular-route.js',
  'public/bower_components/angular-mocks/angular-mocks.js',
  'public/lib/*.js',
  'public/js/*.js',
  'spec/*.js'
];

// tun tests once
gulp.task('test', function() {
	return gulp.src(testFiles)
		.pipe(karma({
			configFile: 'conf/karma.conf.js',
			action: 'run'
		}))
		.on('error', function(err) {
			// failed tests cause gulp to exit non-zero
			throw err;
		})
		.pipe(jasmine());
});

// continuously run tests on change
gulp.task('watch', function() {
  gulp.src(testFiles)
    .pipe(karma({
        configFile: 'conf/karma.conf.js',
        action: 'watch'
    })).on('error', function(err) {
        // failed tests cause gulp to exit non-zero
        throw err;
    })
    .pipe(jasmine());
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