var gulp = require('gulp'),
    env = process.env.NODE_ENV = 'development';

/*===============================
=            Scripts            =
===============================*/

var browserify = require('browserify'),
    babelify = require('babelify'),
    watchify = require('watchify'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

var bundler;

function build(bundler){
    bundler.bundle()
        .on('error', console.log.bind(console))
        .pipe(source('main.min.js'))
        .pipe(buffer())
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({stream: true}));
}

gulp.task('scripts', function() {
    bundler = browserify('src/scripts/main.js', {
        cache: {},
        packageCache: {},
        transform: [
            [babelify, {presets: ['es2015', 'react']}]
        ]
    });

    build(bundler);
});

gulp.task('scripts:watch', ['scripts'], function() {
    bundler.plugin(watchify);
    bundler.on('update', function() {
        build(bundler);
    });
});



/*==============================
=            Styles            =
==============================*/

var sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

gulp.task('styles', function() {
    return gulp.src('src/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles:watch', function() {
    gulp.watch('src/styles/**/*.scss', ['styles']);
});



/*=============================
=            Views            =
=============================*/

var pug = require('gulp-pug');

gulp.task('views', function() {
    gulp.src('src/views/index.pug')
        .pipe(pug())
        .on('error', console.log.bind(console))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('views:watch', function() {
    gulp.watch('src/views/index.pug', ['views']);
});



/*====================================
=            Browser Sync            =
====================================*/

var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});



/*=============================
=            Watch            =
=============================*/

gulp.task('watch', ['scripts:watch', 'styles:watch', 'views:watch']);



/*===============================
=            Default            =
===============================*/

gulp.task('default', ['scripts', 'styles', 'views', 'browser-sync', 'watch']);
