//화살표 함수

//중괄호가 없는 경우 바로 리턴
const sum = (a, b) => a+b;
//중괄호가 있으면 리턴이 필요
const mul = (a, b) => {
    return a*b;
};

//인자가 없더라도 형식을 지켜야 함
const hello = () => {
    for (let i=0;i<2;i++){
        console.log("hello");
    }
}