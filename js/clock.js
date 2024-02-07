const clock = document.querySelector("h2#clock");


/*
intervals : '매번' 일어나야 하는 무언가 ex) 매 2초 ,...
setInterval(실행하고자하는 function, 호출되는 함수 간격을 몇ms로 할지)
timeout : 일정시간이 지나고 나서 한번만 호출
setTimeout(호출함수, 얼마나기다릴지 시간ms)
*/

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getClock();
setInterval(getClock, 1000); //1초마다 getClock 실행