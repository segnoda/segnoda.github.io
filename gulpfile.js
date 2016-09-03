var gulp = require('gulp');

/*===============================
=            Scripts            =
===============================*/

var browserify = require('browserify'),
    babelify = require('babelify'),
    watchify = require('watchify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

gulp.task('scripts', function() {
    var b = browserify('src/scripts/main.jsx', {
        cache: {},
        packageCache: {},
        transform: [
            [babelify, {presets: ['react']}]
        ]
    });

    b = watchify(b);
    b.on('update', function(){
        build(b);
    });
    build(b);
})

function build(b){
    b.bundle()
        .on('error', console.log.bind(console))
        .pipe(source('main.min.js'))
        .pipe(buffer())
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({stream: true}));
}



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



/*=============================
=            Views            =
=============================*/

gulp.task('views', function() {
    gulp.src('src/views/index.pug')
        .pipe(pug())
        .on('error', console.log.bind(console))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({stream: true}));
});



/*====================================
=            Browser Sync            =
====================================*/

var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    var files = [
        'index.html',
        'js/main.min.js',
        'css/main.min.css'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});



/*=============================
=            Watch            =
=============================*/

var pug = require('gulp-pug');

gulp.task('watch', function() {
    gulp.watch('src/scripts/main.jsx', ['scripts']);
    gulp.watch('src/styles/main.scss', ['styles']);
    gulp.watch('src/views/index.pug', ['views']);
})



/*===============================
=            Default            =
===============================*/

gulp.task('default', ['scripts', 'styles', 'views', 'browser-sync', 'watch']);
