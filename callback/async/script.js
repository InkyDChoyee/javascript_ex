function hello(){
    return 'hello';
}

// async = promise를 반환하는 비동기처리 함수가 된다
async function helloAsync(){
    // Promise<string> 반환
    return 'hello Async';
}

console.log(hello());  // 결과값 = hello 출력
console.log(helloAsync());  // 결과값 = Promise{<pending>} 출력 => .then() 사용가능
helloAsync().then((res)=>{  // 결과값이 .then()의 res에 전달
    console.log(res);       // hello Async 문자열 출력
});

// async 키워드를 붙여준 함수의 결과값
// = 비동기 작업 객체 promise의 resolve의 결과값이 된다