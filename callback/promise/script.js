function isPositive(number, resolve, reject) {
    setTimeout(()=>{
        // 전달받은 number가 숫자형 타입이 아니라면 비동기 처리 -> 실패
        // 전달받은 number가 숫자형 타입이 맞다면 비동기 처리 ->성공
        if(typeof number == 'number'){
            // 성공 -> resolve
            resolve(number >= 0 ? "양수" : "음수");
        }else {
            // 실패 -> reject
            reject("주어진 값이 숫자형 값이 아닙니다");
        }

    },2000) // 2s
}   // 2초 뒤에 콜백함수를 실행 전달받은 인자를 판단해줌


// 함수 호출
// isPositive(
//     [], 
//     (res)=>{
//         console.log("성공적으로 수행됨 : ", res);
//     }, 
//     (err)=>{
//         console.log("실패 하였음 : ", err);
//     });


// function isPositiveP(){
//     const executor = ()=>{setTimeout(()=>{if(''){}else{}},2000)}
// }
function isPositiveP(number) {
    // 비동기 작업을 실질적으로 실행시켜 주는 함수 executor 생성
    const executor = (resolve,reject) => {   // 실행자
        setTimeout(()=>{
            if(typeof number == 'number'){
                // 성공 -> resolve
                console.log(number);
                resolve(number >= 0 ? "양수" : "음수");
            }else {
                // 실패 -> reject
                reject("주어진 값이 숫자형 값이 아닙니다");
            }
        },2000);
    };

    // 비동기 작업 자체인 Promise를 저장할 상수 asyncTask 생성
    // new 키워드를 사용 -> promise 객체 생성자로 비동기작업 실행자 함수를 넘겨줌
    const asyncTask = new Promise(executor);
    // executor를 바로 실행하게 된다
    return asyncTask;
    // isPositiveP의 반환값이 promise로 바뀌게 된다
    // 어떤 함수가 promise를 반환한다는 것
    //  = 이 함수는 비동기작업을 하고 그 작업의 결과를
    // promise 객체로 반환을 받아서 사용할 수 있는 함수라는 것
}

const res = isPositiveP(101);
// promise의 내장 함수 .then(), .catch()
// res.then(()=>{}).catch(()=>{});
res
    .then((res)=>{  // resolve
        console.long("작업 성공 : ", res);
    })
    .catch((err)=>{  // reject
        console.log("작업 실패 : ", err);
    });
    
// resolve(number >= 0 ? "양수" : "음수"); 에서 전달한 양수라는 값이
// console.long("작업 성공 : ", res); 콜백 함수에 들어와서 실행 됨