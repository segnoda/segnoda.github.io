var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer');

function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}

gulp.task('styles', function() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on('error', errorLog)
        .pipe(prefix({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    var files = [
        'index.html',
        'css/main.css'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('src/styles/*.scss', ['styles']);
})

gulp.task('default', ['styles', 'browser-sync', 'watch']);
