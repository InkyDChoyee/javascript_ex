// function taskA(a,b,cb){
//     setTimeout(()=>{
//         const res = a+b;
//         cb(res);
//     }, 3000);
// }

// function taskB(a,cb) {
//     setTimeout(()=>{
//         const res = a * 2;
//         cb(res);
//     }, 1000);
// }

// function taskC(a,cb) {
//     setTimeout(()=>{
//         const res = a * -1;
//         cb(res);
//     }, 2000);
// }

// Callback_Hell
// taskA(3,4,(a_res)=>{
//     console.log("tesk A : ", a_res);
//     taskB(a_res,(b_res)=>{
//         console.log("task_B : ", b_res);
//         taskC(b_res,(c_res)=>{
//             console.log("task_C : ", c_res);
//         });
//     }); 
// });


// Promise() 객체사용 => .then(), .catch() 사용 가능
function taskA(a,b,){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a + b;
            resolve(res);
;        }, 3000);

    });
}

function taskB(a) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a * 2;
            resolve(res);
        }, 1000);
    });
}

function taskC(a) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a * -1;
            resolve(res);
        }, 2000);
    });
}

// .then()의 틀린 사용방법
// taskA(5,1).then((a_res)=>{
//     console.log("A Result : ", a_res);
//     taskB(a_res).then((b_res)=>{
//         console.log("B Result : ", b_res);
//         taskC(b_res).then((c_res)=>{
//             console.log("C Result : ", c_res);
//         })
//     })
// })

// .then() chaining
taskA(5, 1).then((a_res)=>{
    console.log("A Result : ", a_res);
    return taskB(a_res);
}).then((b_res)=>{
    console.log("A Result : ", b_res);
    return taskC(b_res);
}).then((c_res)=>{
    console.log("A Result : ", c_res);
    // 콜백 함수 연결~
})
// promise()객체 사용시 =>
// 비동기 처리를 호출하는 코드와 
// 결과를 처리하는 코드르 분리할 수 있다
// = 가독성있고 깔끔한 비동기 처리를 도와준다