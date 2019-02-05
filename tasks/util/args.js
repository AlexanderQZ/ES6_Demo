'use strict';
require('yargs')
    .command('serve[port]', 'start the server', (yargs)=>{
        yargs
            .positional('port',{
                describe: 'port to bind on',
                default: 8080
            })
    }, (argv) =>{
        if(argv.verbose) console.info(`start server on :${argv.port}`);
        serve(argv.port);
    })
    .option('production',{
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    .option('verbose',{
        alias: 'v',
        default: false
    })
    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })
    .argv
// import yargs from 'yargs';
// //区分环境
// const args = yargs
//     .option('production',{
//         boolean: true,
//         default: false,
//         describe: 'min all scripts'
//     })

//     .option('watch',{
//         boolean: true,
//         default: false,
//         describe: 'watch all files'
//     })

//     .option('verbose',{
//         boolean: true,
//         default: false,
//         describe: 'log'
//     })

//     .option('sourcemaps',{
//         describe: 'force the creation of sourcemaps'
//     })

//     .option('port',{
//         string: true,
//         default: 8080,
//         describe: 'server port'
//     })

//     .argv