'use strict';

let gulp = require('gulp');

let nodemon = require("gulp-nodemon");
// let liveserver = require('gulp-live-server');
// let args = require('./util/args');
let browserSync = require('browser-sync').create();
var opn = require('opn');

// gulp.task('serve', gulp.series('build', gulp.parallel('watch', 'browserSync')));
// gulp.task('serve', (done)=>{
//     browserSync.init({
//         server: {
//             baseDir: "./app"
//         }
//     });
//     gulp.watch('*.html').on('change', reload);
//     done();
// });
gulp.task('serve', (done)=>{
    // var server = liveserver.static();
    // server.start();
    
    // var server = liveserver.new(['--harmony','server/bin/www']);
    // server.start();
    // nodemon({
    //     script: 'server/app.js',
    //     ignore: ['.vscode', '.idea', 'node_modules'],
    //     env: {
    //         'NODE_ENV': 'development'
    //     }
    // })
    // .on('start', function() {
    //     browserSync.init({
    //         proxy: 'localhost',
    //         port: 3000
    //         // server:{
    //         //     baseDir: 'app',
    //         //     directory: true,
    //         //     routes: {
    //         //         '/bower_components': 'bower_components'
    //         //     }
    //         // },
    //         // port:3000,
    //         // open:false,
    //         // browser: 'google chrome',
    //         // files: [
    //         //     'app/css/*.css',
    //         //     'app/js/*.js',
    //         //     'app/views/*.html',
    //         // ]
    //     });
       
    // });
    browserSync.init({
        server:{
            baseDir:'./',  // 设置服务器的根目录
            index:'./app/views/index.html' // 指定默认打开的文件
        }
        // port:3000  // 指定访问服务器的端口号
    });
    gulp.watch(['app/js/*.js'], gulp.task('scripts'));
    gulp.watch(['app/css/*.css'], gulp.task('css'));
    gulp.watch(['app/views/*.html'], gulp.task('pages'));
    gulp.watch('server/**/*').on('change',browserSync.reload);
    // gulp.watch(['app/css/*.css']).on('change', (path, stats)=>{
    //     browserSync.reload({stream:true});
    // });
    // gulp.watch(['app/views/*.html']).on('change', (path, stats)=>{
    //     browserSync.reload({stream:true});
    // });
    // gulp.watch(['app/js/.js']).on('change', (path, stats)=>{
    //     browserSync.reload({stream:true});
    // });

    //gulp.watch('app/*.html').on('change', browserSync.reload);
    // gulp.watch("app/*.html").on('change', browserSync.reload);
    // gulp.watch("app/*.css").on('change', browserSync.reload);
    // gulp.watch("app/*.js").on('change', browserSync.reload);
    // browserSync.watch('app/*.html').on('change', browserSync.reload);
    // browserSync.watch('app/*.css').on('change', browserSync.reload);
    // browserSync.watch('app/*.js').on('change', browserSync.reload);
    // browserSync.watch(['server/routes/**/*.js','server/app.js'], function (event, file){
    //     if (event === 'change') {
    //         browserSync.reload(['server/routes/**/*.js','server/app.js']);
    //     }
    // });
    done();
});


// gulp.task('serve', (cb)=>{
//     if(!args.watch) return cb();
//     browserSync.init({
//         server: "./app"
//     });
//     var server = liveserver.static();
//     server.start();
    
//     var server = liveserver.new(['--harmony','server/bin/www']);
//     server.start();

//     gulp.watch(['server/public/**/*.js','server/views/**/*.html'],function(file){
//         server.notify.apply(server,[file]);
//     });

//     gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
//         server.start.bind(server)();
//     });

//     gulp.watch("app/*.html").on('change', reload);
// }); 
