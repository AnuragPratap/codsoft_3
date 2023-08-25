const display = document.getElementById('display');
const operatorButtons = document.querySelectorAll('.operator');
const digitButtons = document.querySelectorAll('.digit');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';
let currentOperator = '';
let prevInput = '';
let result = '';

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    prevInput = '';
    result = '';
    updateDisplay();
}

function handleDigitClick(digit) {
    currentInput += digit;
    updateDisplay();
}

function handleOperatorClick(operator) {
    if (currentInput !== '') {
        if (currentOperator !== '') {
            calculate();
        }
        prevInput = currentInput;
        currentInput = '';
        currentOperator = operator;
    }
}

function calculate() {
    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(currentInput);
    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    currentInput = result.toString();
    currentOperator = '';
    updateDisplay();
}

// Event listeners
clearButton.addEventListener('click', clearDisplay);
equalsButton.addEventListener('click', calculate);

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleDigitClick(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperatorClick(button.textContent);
    });
});
