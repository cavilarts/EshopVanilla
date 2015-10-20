var gulp = require('gulp'),
    browserSync = require('browser-sync');

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

gulp.task('default', ['browserSync']);