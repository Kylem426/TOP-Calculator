const display = document.getElementById('display');
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let solution = 0;

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

