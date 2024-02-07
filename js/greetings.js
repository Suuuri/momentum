const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

//반복되서 나오는 경우 오타를 막고자 키로 만들어놓음
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 

function onLoginSubmit(event) {
    event.preventDefault(); //event : 브라우저가 원래 하려는 행동을 멈춰줌 (페이지 새로고침)
    //console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME); //form을 다시 숨겨준다
    //const username = loginInput.value; //loginInput.value를 변수로 저장
    //greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, loginInput.value); //username값을 username key랑 함께 local storage에 저장
    paintGreetings(); //paintGreetings 함수 호출
}

// 이미 local storage에 유저정보가 존재하는걸 알고있기 때문에 인자를 받을 필요가 없음. 
function paintGreetings() {
    const username = localStorage.getItem("username");
    greeting.innerText = `Hello ${username}`; //hello ${username} 텍스트를 호출
    greeting.classList.remove(HIDDEN_CLASSNAME); //hidden클래스명 제거
}


// 유저 정보의 유무를 확인
const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings();
}

console.log(savedUsername);