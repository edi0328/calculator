function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    if (op == '+') return add(a, b);
    if (op == '-') return substract(a, b);
    if (op == '*') return multiply(a, b);
    if (op == '/') return divide(a, b);
}

function changeDisplay(content) {
    const display = document.querySelector("#display");
    if (display.textContent == '0') display.textContent = content;
    else display.textContent += content;
    return display.textContent;
}

let a;
let b;
let op;

// When button is pressed, display changes and stores number
const numButtons = document.querySelectorAll(".num");
numButtons.forEach(button => {
    button.addEventListener("click", () => a = changeDisplay(button.textContent));
})

// Pressing an operation stores the operation
const opButtons = document.querySelectorAll(".op");
opButtons.forEach(button => {
    button.addEventListener("click", () => 
        op = button.textContent)
})