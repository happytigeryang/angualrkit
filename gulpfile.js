const gulp = require('gulp');
const eslint = require('gulp-eslint');
const reporter = require('eslint-html-reporter');
var path = require('path');
var fs = require('fs');
var open = require('gulp-open');

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths. So, it's best to have gulp
    // ignore the directory as well. Also, Be sure to return the stream from the
    // task; Otherwise, the task may end before the stream has finished.
    return gulp.src(['client/**/*.js', '!node_modules/**', '!bower_components/**'])
    // eslint() attaches the lint output to the "eslint" property of the file object
    // so it can be used by other modules.
        .pipe(eslint())
    // eslint.format() outputs the lint results to the console. Alternatively use
    // eslint.formatEach() (see Docs).
        .pipe(eslint.format(reporter, (results) => {
        fs.writeFileSync(path.join(__dirname, 'report-results.html'), results);
    }))
    // To have the process exit with an error code (1) on lint error, return the
    // stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task("open-eslint-report",() => {
    gulp
        .src('./report-results.html')
        .pipe(open());
});

gulp.task('default', ['lint','open-eslint-report'], function () {
    // This will only run if the lint task is successful...
});