const button = document.querySelector('button');
const button2 = document.querySelector('.remove');

function handler(event){
    console.log(event);
}

function removeHandler(event){
    console.log(event);
}
button.addEventListener('click', handler);
button2.addEventListener('click', removeHandler);