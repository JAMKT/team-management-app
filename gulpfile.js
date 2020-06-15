const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

const paths = {
    src: './client/src',
    build: './client/public/styles'
};

// Compiles SASS to CSS
gulp.task("compileSass", () => { 
    return gulp.src(paths.src + '/**/*.scss')
        .pipe(sass({ includePaths : [paths.src + '/styles/'] }).on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(gulp.dest(paths.build + '/css')); 
});

// Minifies CSS files
gulp.task("minifyCss", () => {
    return gulp.src(paths.build + '/css/*.css')
        .pipe(cssnano())
        .pipe(concat('index.min.css'))
        .pipe(gulp.dest(paths.build + '/minicss'));
});

// Checks for changes and runs the tasks above
gulp.task("watch", () => { 
    gulp.watch(paths.src + '/**/*.scss', gulp.series('compileSass'));
    gulp.watch(paths.build + '/css/*.css', gulp.series('minifyCss'));
});

gulp.task("default", gulp.series('watch'));