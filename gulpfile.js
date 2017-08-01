/**
 * Created by Jelle on 19-7-2017.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('website/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('website/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'website'
        }
    })
});

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('website/sass/*.scss', ['sass']);
    gulp.watch('website/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});


