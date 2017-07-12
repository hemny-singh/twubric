'use strict';

var gulp = require('gulp');
var path = require('path');
// var less = require('gulp-less');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var concatCss = require('gulp-concat-css');
var config = require('./config');

//Compile SASS files.
gulp.task('styles:dev:compile', function () {
    return gulp.src(config.appFiles('scss', true))
        .pipe(sass())
        .pipe(gulp.dest(config.getDistPath()));
});

//Inject compiled styles into the html file.
gulp.task('styles:dev', ['styles:dev:compile'], function () {

    var injectOptions = {
        name: 'styles',
        addSuffix: '?v=' + new Date().getTime()
    };

    var styles = gulp.src(path.join(config.getDistPath(), '/**/*.css'));
    return gulp.src(config.getViewPath())
        .pipe(inject(styles, injectOptions))
        .pipe(gulp.dest(config.getRootPath()));
});

//Compile and bundle LESS files.
gulp.task('styles:prod:compile', function () {
    return gulp.src(config.appFiles('scss', true))
        .pipe(sass({compress: true}))
        .pipe(concatCss('style.min.css'))
        .pipe(gulp.dest(config.getDistPath()));
});

//Inject the bundled css file into the html file.
gulp.task('styles:prod', ['styles:prod:compile'], function () {

    var injectOptions = {
        name: 'styles',
        addSuffix: '?v=' + new Date().getTime(),
        ignorePath: '/' + config.getDistPath()
    };

    return gulp.src(path.join(config.getDistPath(), 'index.html'))
        .pipe(inject(gulp.src(path.join(config.getDistPath(), 'style.min.css')), injectOptions))
        .pipe(gulp.dest(config.getRootPath()));
});
