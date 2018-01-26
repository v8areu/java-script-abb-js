const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const useref = require('gulp-useref');
const uglifyEs = require('gulp-uglify-es').default;
const imageMin = require('gulp-imagemin');
const gulpIf = require('gulp-if');
const rename = require('gulp-rename');
const del = require('del');
const cache = require('gulp-cache');
const runSequence = require('run-sequence');
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
    .pipe(imageMin())
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
  .pipe(gulp.dest('./dist/css'))  
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
  .pipe(gulp.dest('./dist/js'))
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

gulp.task('images:device', function() {
  return gulp.src(
    './node_modules/html5-device-mockups/device-mockups/**/*'
  )
    .pipe(cache(imageMin()))
    .pipe(gulp.dest('app/device-mockups'))
    .pipe(gulp.dest('dist/device-mockups'));
});

gulp.task('images:background', function() {
  return gulp.src('./app/img/**/*')
    .pipe(cache(imageMin()))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('images', ['images:device', 'images:background']);

// copy html files
gulp.task('html', function() {
  return gulp.src('./app/*.html')
    .pipe(gulp.dest('dist'));
});

// clear dist folder
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('clean', ['clean:dist']);

// for development purpose
gulp.task('watch', ['browserSync', 'css', 'js'], function () {
  gulp.watch('app/scss/**/*.scss', ['css']);
  gulp.watch('app/js/*.js', ['js']);
  gulp.watch('app/img/**/*', browserSync.reload);
  gulp.watch('app/device-mockups/**/*', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
});

// for building purpose (finalization)
gulp.task('build', function (callback) {
  runSequence('clean', 
    ['html', 'css', 'js', 'images',],
    callback
  )
})