const gulp   = require('gulp');
const sass   = require('gulp-sass');
const notify = require('gulp-notify');

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function() {
    gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['sass'])
});
