var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('sass', function() {
  return sass('scss/style.scss')
    .pipe(gulp.dest('css'))
    .pipe(reload({ stream: true }));
});




gulp.task('default', ['sass'], function() {  
  
  browserSync({
    server: { baseDir: '' },
    reloadOnRestart: true
  });

  gulp.watch('scss/*.scss', ['sass']);

});