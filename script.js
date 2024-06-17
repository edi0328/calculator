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
    display.textContent = content;
    return content;
}

let a;
let b;
let op;