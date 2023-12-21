// let response = fetch("https://jsonplaceholder.typicode.com/posts");
// fetch() = API 호출을 할 수 있도록 도와주는 내장함수 => Promise<Response> 반환
// = 비동기처리, .then()을 통해 사용 가능
// response.then((res) => 
//     console.log(res)
// );
// response 성공 객체 자체를 반환함 = 응답에 대한 여러 정보 포함

async function getData (){
    let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}
getData();
// JSON 데이터 추출가능