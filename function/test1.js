//함수
function bok(main){
    console.log(`${main} mixed rice`)
}

function a(){
    const b = 5;
    console.log(b);
}

function sum(x, y)
{
    console.log(x+y);
}
function f(a, b, ...rest){
    console.log(rest);
}
a();
sum(1, 2);
bok('shrimp');
f(1, 2, 3, 4, 5, 6, 7);