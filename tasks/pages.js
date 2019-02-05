'use strict';
let gulp = require('gulp');
let gulpif = require('gulp-if');
let watchify = require('watchify');
let browserify = require('browserify');
let assign = require('lodash.assign');
let browserSync = require('browser-sync').create();
let args = require('./util/args');

var customOpts = {
    entries: ['app/views/index.html'],
    debug: true
};

gulp.task('pages', bundle);
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
gulp.task('scripts', bundle);
b.on('update', bundle);

function bundle() {
    return  gulp.src('app/**/*.html')
            .pipe(gulp.dest('server'));
            // .pipe(browserSync.reload({stream:true}));
}
