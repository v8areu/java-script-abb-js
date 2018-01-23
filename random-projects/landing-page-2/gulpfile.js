const gulp = require('gulp');
const ts = require('gulp-typescript');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const useref = require('gulp-useref');
const uglifyEs = require('gulp-uglify-es').default;
const gulpIf = require('gulp-if');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

// import html5-device-mockups
const deviceMockupsPath = './node_modules/html5-device-mockups';
gulp.task('css:device', function() {
  return gulp.src([
    './node_modules/html5-device-mockups/dist/*.css',
    '!./node_modules/html5-device-mockups/dist/*.min.css',
  ])
    .pipe(gulp.dest('app/css'));
});

gulp.task('css:device-img', function() {
  return gulp.src(
    './node_modules/html5-device-mockups/device-mockups/**/*'
  )
    .pipe(gulp.dest('app/device-mockups'));
})

// compile css
gulp.task('css:compile', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

// minify css
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
    './app/css/*.css',
    '!./app/css/*.min.css'
  ])
  .pipe(cleanCss())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./app/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// complete css task
gulp.task('css', ['css:compile', 'css:device', 'css:device-img','css:minify']);

// minify js
gulp.task('js:minify', function() {
  return gulp.src([
    './app/js/*.js',
    '!./app/js/*.min.js'
  ])
  .pipe(uglifyEs())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./app/js'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// complete js task
gulp.task('js', ['js:minify']);

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    port: 3010,
  });
});

gulp.task('watch', ['browserSync', 'css', 'js'], function () {
  gulp.watch('app/scss/**/*.scss', ['css']);
  gulp.watch('app/js/*.js', ['js']);
  gulp.watch('app/img/**/*', browserSync.reload);
  gulp.watch('app/device-mockups/**/*', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
});

