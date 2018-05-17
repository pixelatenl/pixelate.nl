const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify-es').default;
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const sassLint = require('gulp-sass-lint');
const inject = require('gulp-inject');
const bourbon = require('node-bourbon');
const imagemin = require('gulp-imagemin');
const bs = require('browser-sync').create(); // create a browser sync instance.

const config = {
    paths: {
        html: {
            src: ['./src/**/*.html'],
            dist: './dist'
        },
        javascript: {
            src: [
                './src/js/**/*.js'],
            dist: './dist/js'
        },
        css: {
            src: ['./src/sass/**/*.scss'],
            dist: './dist/css/'
        },
        images: {
            src: [
                './src/images/**/*.{gif,png,jpg,svg}'],
            dist: './dist/images'
        },
        video: {
            src: [
                './src/video/**/*.*'],
            dist: './dist/video'
        },
        buildStatic: {
            src: [
                './src/.htaccess', './src/robots.txt'],
            dist: './dist'
        }
    },
    autoprefixerOptions: {
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    }
};

gulp.task('sassLint', function () {
    return gulp
        .src(config.paths.css.src)
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

gulp.task('styles', ['sassLint'], function () {
    return gulp
        .src(config.paths.css.src)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: bourbon.includePaths
        }).on('error', sass.logError))
        .pipe(autoprefixer(config.autoprefixerOptions))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.css.dist));
});

gulp.task('html', function () {
    return gulp.src(config.paths.html.src)
        .pipe(inject(gulp.src(['./dist/**/*.js', './dist/**/*.css'], {read: false}), {
            relative: true,
            ignorePath: '../dist/'
        }))
        .pipe(htmlmin({collapseWhitespace: false}))
        .pipe(gulp.dest(config.paths.html.dist));
});

gulp.task('javascript', function () {
    return gulp.src(config.paths.javascript.src)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(config.paths.javascript.dist));
});

gulp.task('build-js', function () {
    return gulp.src(config.paths.javascript.src)
        .pipe(uglify().on('error', gutil.log))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(config.paths.javascript.dist));
});

gulp.task('video', function () {
    return gulp.src(config.paths.video.src)
        .pipe(gulp.dest(config.paths.video.dist));
});

gulp.task('images', function () {
    return gulp.src(config.paths.images.src)
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true})
        ]))
        .pipe(gulp.dest(config.paths.images.dist));
});

gulp.task('buildStatic', function () {
    return gulp.src(config.paths.buildStatic.src)
        .pipe(gulp.dest(config.paths.buildStatic.dist));
});

gulp.task('browser-sync', function () {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

//Prepare task (run before injecting into html)
gulp.task('prepare', ['build-js', 'styles']);

//Default / Build
gulp.task('default', function (done) {
    runSequence('prepare', ['video', 'images', 'html', 'buildStatic'], done);
});

//Watch task
gulp.task('serve', function () {

    gulp.src(config.paths.html.src)
        .pipe(inject(gulp.src(['./dist/**/*.js', './dist/**/*.css'], {read: false}), {
            relative: true,
            ignorePath: '../dist/'
        }))
        .pipe(gulp.dest(config.paths.html.dist));

    //Serve using browsersync.
    bs.init({
        logConnections: true,
        logFileChanges: true,
        server: {
            baseDir: ['./dist'],
            index: 'index.html'
        },
        browser: process.env.DEV_BROWSER || 'default'
    });
    //Watch all the project's files
    gulp.watch(config.paths.css.src, ['styles']);
    gulp.watch(config.paths.javascript.src, ['javascript']);
    gulp.watch(config.paths.html.src, ['html']);
    gulp.watch(config.paths.html.images, ['images']);
    gulp.watch(['./dist/**/*.*', '.dist/css/styles.css']).on('change', bs.reload);
});
