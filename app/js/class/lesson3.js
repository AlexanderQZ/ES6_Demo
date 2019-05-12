'use strict'

{
    {
        //图片加载
        //1. 加载图片
        function loadImg(src) {
            return new Promise((resolve, reject) => {
                var img = document.createElement('img');
                img.src = src;
                img.onload = () => {
                    resolve(img)
                };
                img.onerror = err => {
                    reject(err)
                };
            });

        }

        function showImg(imgs) {
            imgs.forEach((img) => {
                document.body.appendChild(img)
            });
        }

        Promise.all([
            loadImg('https://img1.doubanio.com/view/photo/l/public/p647348019.webp'),
            loadImg('https://img1.doubanio.com/view/photo/raw/public/p2203008659.jpg'),
            loadImg('https://img3.doubanio.com/view/photo/l/public/p2171942433.webp')
        ]).then(showImg);
    }

    {
        //图片加载
        //1. 加载图片
        // function loadImg(src) {
        //     return new Promise((resolve, reject)=>{
        //         var img = document.createElement('img');
        //         img.src = src;
        //         img.onload = ()=>{resolve(img)};
        //         img.onerror = err=>{reject(err)};
        //     });

        // }

        // function showImg(imgs) {
        //     imgs.forEach((img)=>{document.body.appendChild(img)});
        // }

        // Promise.race([
        //     loadImg('https://img1.doubanio.com/view/photo/l/public/p647348019.webp'),
        //     loadImg('https://img1.doubanio.com/view/photo/raw/public/p2203008659.jpg'),
        //     loadImg('https://img3.doubanio.com/view/photo/l/public/p2171942433.webp')
        // ]).then(showImg);
    }

    // {

    //     let ajax = (callback) => {
    //         return new Promise((resolve, reject) => {
    //             console.log('开始');
    //             setTimeout(() => {
    //                 callback && callback.call();
    //             }, 1000);
    //         })
    //     }

    //     ajax(() => {
    //         console.log('执行1');
    //     });

    // } 
    // {    let ajax = (value)=>{
    //         return new Promise((resolve, reject)=>{
    //             if(value <= 5) {
    //                 resolve(value);
    //             } else {
    //                 reject('ERROR');
    //             }
    //         })
    //     }

    //     ajax(6).then((value)=>{
    //         console.log('log',value);
    //     },(err)=>{
    //         console.log(err); 
    //     });
    // }
    {
        // let state = function* () {
        //     while(1) {
        //         yield 'A';
        //         yield 'B';
        //         yield 'C';
        //     }
        // }
        // let status = state();
        // console.log(status.next());
        // console.log(status.next());
        // console.log(status.next());
        // console.log(status.next());
    }

    {
        // let draw = function (count) { 
        //     //具体抽奖逻辑
        //     console.info(`剩余${count}次`);
        // }

        // let residue = function* (count) {
        //     while(count > 0) {
        //         yield draw(count);
        //     }
        // }

        // let start = residue(5);
        // let btn = document.createElement('button');
        // btn.id = 'start';
        // btn.textContent='抽奖';
        // document.body.appendChild(btn);
        // document.getElementById('start').addEventListener('click', function() {
        //     start.next();
        // },false);
    }

    {
        let ajax = function* () {
            yield new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve({code: 1});
                }, 200);
            });
        }

        let pull = ()=>{
            let gengerate = ajax();
            let state = gengerate.next();
            console.info(state, state.value);
            state.value.then((d)=>{
                if(d.code != 1) {
                    setTimeout(()=>{
                        console.info('wait');
                        poll();
                    }, 1200);
                }
            });
        }
        pull(); 

    }
}