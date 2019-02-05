'use strict';

let gulp = require('gulp');
let watchify = require('watchify');
let browserify = require('browserify');
let browserSync = require('browser-sync').create();
let gulpWebpack = require('webpack-stream');
let named = require('vinyl-named');
let plumber = require('gulp-plumber');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let assign = require('lodash.assign');

let {
    log,
    colors
} = require('gulp-util');

// add custom browserify options here
var customOpts = {
    entries: ['app/js/index.js'],
    debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
gulp.task('scripts', bundle);
b.on('update', bundle);
// b.on('log', log.info);

function bundle() {
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandle: function () {
                console.log('error');
            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            mode: 'development',
            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }]
            }
        }), null, (err, stats) => {
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }));
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        .pipe(uglify({
            compress: {
                properties: false
            },
            output: {
                'quote_keys': true
            }
        }))
        .pipe(gulp.dest('server/public/js'));
        // .pipe(browserSync.reload({stream:true}));
}
