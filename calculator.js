const display = document.getElementById('display');
const numberButtons = document.getElementsByClassName('numberButton');
let firstNumber = null;
let secondNumber = null;
let operator = "";
let solution = null;

function add(firstNumber, secondNumber) {
   let solution = (firstNumber + secondNumber);
   console.log(solution);
};

function subtract(firstNumber, secondNumber) {
    let solution = (firstNumber - secondNumber);
    console.log(solution);
};

function multiply(firstNumber, secondNumber) {
    let solution = (firstNumber * secondNumber);
    console.log(solution);
};

function divide(firstNumber, secondNumber) {
    if(firstNumber == 0 || secondNumber == 0) {
        alert("You can't divide by zero!");
    }else {
       let solution = (firstNumber / secondNumber);
       console.log(solution);
    }
};

function operate(firstNumber, operator, secondNumber) {
    if(operator == '+') {
        add(firstNumber, secondNumber);
    }else if(operator == '-') {
        subtract(firstNumber, secondNumber);
    }else if(operator == '*') {
        multiply(firstNumber, secondNumber);
    }else if(operator == '/') {
        divide(firstNumber, secondNumber);
    }else {
        //do nothing
    }
};

for(i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', (e) => {
        if(display.textContent == '') {
          display.textContent = e.target.textContent;
        }else {
          display.textContent = display.textContent.concat(e.target.textContent);
        }
    })
}
