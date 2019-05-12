'use strict';
{
    let name = 'list';
    let info = 'hello world';
    let m = `i am ${name}, ${info}`;
    // console.log(m);   
}
{
    // console.log('1'.padStart(2,'0'));
}

{
    // console.log('23', Number.isInteger(25));
    // console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    // console.log(Number.isSafeInteger(10));
    // console.log('4.9', Math.ceil(4.9));
    // console.log('4.9 floor', Math.floor(4.9));
    // console.log('-5', Math.sign(-5));
    // console.log('5', Math.sign(5));
    // console.log('0', Math.sign(0));
}

{
    //array from 可以取页面元素集合
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach((item)=>{
        // console.log('item', item.textContent);
    });
}

{
    for(let index of ['1','c','ks'].keys()){
        // console.log('keys', index);
    }

    for(let value of ['1', 'c', 'ks'].values()) {
        // console.log('value', value);
    }

    for(let [index, value] of ['1','c','ks'].entries()) {
        // console.log('values',index, value);
    }
}

// {
//     console.log([1, 2 ,3, 4].find((item)=>{return item > 3}));
// }
// {
//     function test(x, y='world') {
//         console.log(x+y);
//     }
//     test('hello ');
// }

{
    function text3(...args) {
        for(let v of args) {
            // console.log('args', v);
        }
    }
    // text3(1,2,3,4,5,'b');
}

{
    // let a = 1; 
    // let b = 2;
    // let o = {
    //     a,
    //     b,
    //     hello (){
    //         console.log('hello');
    //     }
    // }
    // console.log(o.hello());
}

{
    let a = 'n';
    let o = {
        [a]: '1'
    }
    console.log(o);
}