var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify');



/*===============================
=            Scripts            =
===============================*/

gulp.task('scripts', function() {
    var b = browserify({
        entries: ['src/scripts/main.js'],
   		transform: [],
   		cache: {},
   		debug: true,
   		packageCache: {},
   		fullPaths: true,
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
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({stream: true}));
}



/*==============================
=            Styles            =
==============================*/

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



/*====================================
=            Browser Sync            =
====================================*/

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

gulp.task('watch', function() {
    gulp.watch('src/scripts/main.js', ['scripts']);
    gulp.watch('src/styles/main.scss', ['styles']);
})



/*===============================
=            Default            =
===============================*/

gulp.task('default', ['scripts', 'styles', 'browser-sync', 'watch']);
