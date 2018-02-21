var gulp = require('gulp');
var clean = require('gulp-clean');

var gulpCopy = require('gulp-copy');

var sourceFiles = [ 'css/*' ];
var destination = 'test-report/';
 
gulp.task('default', function () {
    return gulp.src('test-report', {read: false})
        .pipe(clean())
        .pipe(gulpCopy(destination, {}));
});

gulp.task('copyFiles', function (){ 
return gulp
    .src(sourceFiles)
    .pipe(gulpCopy(destination, {}));
});