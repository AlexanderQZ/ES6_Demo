'use strict';

let gulp = require('gulp');
let del = require('del');

gulp.task('clean',function(done){
    del(['server/public', 'server/views']);
    done();
});