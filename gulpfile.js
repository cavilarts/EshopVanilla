var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    jasmine = require('gulp-jasmine-phantom');

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'            
        }
    });

    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./html/*.html').on('change', browserSync.reload);
    gulp.watch('./static/css/*.css').on('change', browserSync.reload);
    gulp.watch('./static/js/*.js').on('change', browserSync.reload);
});

gulp.task('tests', function () {
    gulp.src('tests/spec/**/*.js')
        .pipe(jasmine({
            integration: true,
            vendor: 'static/js/**/*.js'
        }));
});

gulp.task('default', ['browserSync']);