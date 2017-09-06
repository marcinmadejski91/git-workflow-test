var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
 return gulp.src('dev-css/style-lp.sass')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('dev-css/**/*.sass',['sass']);
});
