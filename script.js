let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

let shuffleOrder = () =>{
    let newNumber = parseInt(Math.random()*4,10)
    order.push(newNumber);

    for(i of order){
        let color = pickColor(i);
        let elemento = document.querySelector(`.${color}`);
        pulse(elemento);
        //setTimeout(() => { elemento.classList.add('selected')}, 250);
        //setTimeout(() => { elemento.classList.remove('selected')}, 1000);
    }

}

function pulse(elemento) {
    setTimeout(() => { elemento.classList.add('selected')}, 250);
    setTimeout(() => { elemento.classList.remove('selected')}, 1000);
}

function pickColor(number) {
    if (number == 0) {
        return 'blue';
    } else if (number == 1) {
        return 'red';
    } else if (number == 2) {
        return 'yellow';
    } else if (number == 3) {
        return 'green';
    }
}