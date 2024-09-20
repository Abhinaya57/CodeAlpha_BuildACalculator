let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';
let shouldResetScreen = false;

function appendNumber(number) {
    if (shouldResetScreen) {
        display.value = '';
        shouldResetScreen = false;
    }
    display.value += number;
}

function setOperation(operator) {
    if (currentOperation) calculate();
    firstOperand = display.value;
    currentOperation = operator;
    shouldResetScreen = true;
}

function calculate() {
    if (!currentOperation || !firstOperand) return;
    secondOperand = display.value;

    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(secondOperand) === 0 ? 'Error' : parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    display.value = result;
    currentOperation = '';
}

function clearDisplay() {
    display.value = '';
    currentOperation = '';
    firstOperand = '';
    secondOperand = '';
}
