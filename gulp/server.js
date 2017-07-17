'use strict';
require('./style');
require('./script');
require('./documentation');
require('./jshint');

var gulp = require('gulp');
// var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var config = require('./config');


// var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('server:watch', ['scripts:dev', 'styles:dev'], function () {
    console.log("server watch");
    gulp.watch(config.appFiles('scss', true), ['styles:dev']);
    gulp.watch(config.appFiles('js', true), ['scripts:dev']);
});

//Start browserSync server in development mode.
gulp.task('server:dev', ['server:watch'], function () {
    browserSync.instance = browserSync.init([
        config.appFiles('scss', true),
        config.appFiles('js', true)], {
            startPath: '/',
            browser: 'default',
            server: {
                baseDir: [config.getRootPath()],
                routes: { }
            },
            port: 8000
    });
});

//Start browserSync server in production mode.
gulp.task('server:prod', ['build:prod'], function () {

    browserSync.instance = browserSync.init({
        startPath: '/',
        browser: 'default',
        server: {
            baseDir: [config.getDistPath()],
            routes: {}
        }
    });
});
