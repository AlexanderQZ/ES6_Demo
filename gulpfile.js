'use strict';

// var requireDir = require('require-dir');
// requireDir('./tasks');
// var gulp = require('gulp');

// var HubRegistry = require('gulp-hub');

// // Load some files into the registry
// var hub = new HubRegistry(['tasks/*.js']); // only one file help.js

// // Tell gulp to use the tasks just loaded
// gulp.registry(hub);
var gulp = require('gulp');
var HubRegistry = require('gulp-hub');

// load some files into the registry
var hub = new HubRegistry(['tasks/*.js']);

// tell gulp to use the tasks just loaded
gulp.registry(hub);

// define composite tasks
// gulp.task('default', gulp.series('clean', gulp.parallel('css', 'scripts', 'pages', 'browser-sync', 'serve')));
gulp.task('default', gulp.series('clean', 'css', 'pages', 'scripts','serve'));