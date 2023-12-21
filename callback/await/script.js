function delay(ms) {
    return new Promise((resolve) =>{
        setTimeout(resolve, ms); // setTimeout의 콜백 함수안에 resolve를 호출하는 것 말고는 없다면
                                 // 콜백함수 자체로 resolve를 전달해도 된다
    });
}

// async function helloAsync(){
//     return delay(3000).then(()=>{   
//         return "hello Async";     
//     });
// }
// 수행하는 작업에 비해 코드가 거창해짐 => 이런 경우에 await 사용

async function helloAsync(){
    await delay(3000);     // await 키워드를 비동기함수 호출 앞에 붙이면 
    return "hello Async";  // 비동기함수가 동기적인 함수처럼 작동을 하게된다
}                          // await 키워드는 async 키워드가 붙은 함수 내에서만 사용 가능

async function main (){
    const res = await helloAsync();
    console.log(res);
}

main();

