const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');


function clock(){
    const now = new Date();

    hour.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
    //innerText로 html의 text들을 변수로 지정 가능해짐
}

setInterval(clock, 1000); //함수명, 1초마다 반복 시키는 함수
