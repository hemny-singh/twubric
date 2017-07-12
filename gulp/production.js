'use strict';

var gulp = require('gulp');
var del = require('del');
var path = require('path');
var runSequence = require('run-sequence');
var config = require('./config');

//Clean the distribution folder.
gulp.task('clean:prod', function () {
    del.sync(config.getDistPath());
});

//Copy html to distribution folder.
gulp.task('html:prod', function () {
    return gulp.src(config.getViewPath())
        .pipe(gulp.dest(config.getDistPath()));
});

//Build application in the production mode.
gulp.task('build:prod', function (cb) {
    runSequence('clean:prod', 'html:prod', 'vendors:prod', 'scripts:prod', 'styles:prod', cb);
});
