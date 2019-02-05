'use strict';
let gulp = require('gulp');

var browserSync = require("browser-sync").create();

gulp.task('css',()=>{
    return gulp.src('app/**/*.css')
                .pipe(gulp.dest('server/public'));
                // .pipe(browserSync.reload({stream:true}));
});
