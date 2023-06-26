const display = document.getElementById('display');
const numberButtons = document.getElementsByClassName('numberButton');
const operatorButtons = document.getElementsByClassName('operatorButton');
const equalsButton = document.getElementsByClassName('equalsButton');
const decimalButton = document.getElementsByClassName('decimalButton');
const clearButton = document.getElementsByClassName('clearButton');
let firstNumber = null;
let secondNumber = null;
let operator = "";
let solution = null;

function add(firstNumber, secondNumber) {
   solution = (firstNumber + secondNumber);
   display.textContent = solution;
};

function subtract(firstNumber, secondNumber) {
    solution = (firstNumber - secondNumber);
    display.textContent = solution;
};

function multiply(firstNumber, secondNumber) {
    solution = (firstNumber * secondNumber);
    display.textContent = solution;
};

function divide(firstNumber, secondNumber) {
    if(firstNumber == 0 || secondNumber == 0) {
        alert("You can't divide by zero!");
    }else {
       solution = (firstNumber / secondNumber);
       display.textContent = solution;
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
          displayValue = display.textContent;
        }else {
          display.textContent = display.textContent.concat(e.target.textContent);
          displayValue = display.textContent;
        }
    })
}

let displayValue = '';

for(i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', (e) => {
        if(display.textContent == '') {
            alert('You must input numbers before choosing an operator!');
        }else if(display.textContent == solution) {
            firstNumber = solution;
            operator = e.target.textContent;
            operate(firstNumber, operator, secondNumber);
        }else {
            firstNumber = Number(display.textContent);
            operator = e.target.textContent;
            display.textContent = display.textContent.concat(e.target.textContent);
        }
    })
}

clearButton[0].addEventListener('click', () => {
    display.textContent = '';
    displayValue = display.textContent;
    firstNumber = null;
    secondNumber = null;
});

function setSecondNumber() {
    let splitString = '';
    if(display.textContent.includes('+')) {
        splitString = display.textContent.split('+')[1];
        secondNumber = Number(splitString);
    }else if(display.textContent.includes('-')) {
        splitString = display.textContent.split('-')[1];
        secondNumber = Number(splitString);
    }else if(display.textContent.includes('/')) {
        splitString = display.textContent.split('/')[1];
        secondNumber = Number(splitString);
    }else if(display.textContent.includes('*')) {
        splitString = display.textContent.split('*')[1];
        secondNumber = Number(splitString);
    }else {
        //do nothing
    }
}
equalsButton[0].addEventListener('click', () => {
    setSecondNumber();
    operate(firstNumber, operator, secondNumber);
})