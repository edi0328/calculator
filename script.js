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

// Update display when number is pressed
function changeDisplay(content) {
    const display = document.querySelector("#display");
    if (display.textContent == '0' || b == 0) display.textContent = content;
    else display.textContent += content;
    return Number(display.textContent);
}

let a;
let b = display.textContent;
let op;

// When button is pressed, display changes and stores number
const numButtons = document.querySelectorAll(".num");
numButtons.forEach(button => {
    button.addEventListener("click", () => {
        b = changeDisplay(button.textContent);

    })
});

// Pressing an operation stores the operation and assigns the displayed value to a
const opButtons = document.querySelectorAll(".op");
opButtons.forEach(button => {
    button.addEventListener("click", () => {
        op = button.textContent;
        a = b;
        b = 0;
})});

const equalButton = document.querySelector("#eq");
equalButton.addEventListener("click", () => {
    b = changeDisplay(operate(op, a, b));
});

