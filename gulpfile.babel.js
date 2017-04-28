import gulp from 'gulp';
import clean from 'gulp-clean';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';

gulp.task('build:clean', () => {
  return gulp.src('./bin').pipe(clean({ read: false }));
});

gulp.task('build:compile', ['build:clean'], () => {
  return gulp.src('./src/**/*.js')
             .pipe(babel())
             .pipe(gulp.dest('bin'));
});

gulp.task('build', ['build:clean', 'build:compile']);

gulp.task('test', ['build'], next => {
  return gulp.src(['test/**/*.js'], { read: false })
             .pipe(mocha({
               reporter: 'spec',
               compilers: ['js:babel-core/register', 'js:babel-polyfill']
             }));
});
