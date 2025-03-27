let display = document.getElementById("display");
let currentInput = '';
let currentOperation = '';

function appendNumber(num) {
  currentInput += num;
  display.value = currentInput;
}

function setOperation(op) {
  if (currentInput === '') return;
  currentOperation = op;
  currentInput += op;
  display.value = currentInput;
}

function calculateResult() {
  try {
    display.value = eval(currentInput);
    currentInput = display.value;
  } catch (e) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}
