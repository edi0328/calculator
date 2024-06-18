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
    if (b == 0) return "Error";
    return a / b;
}

function operate(op, a, b) {
    if (op == '+') return add(a, b);
    if (op == '-') return substract(a, b);
    if (op == '*') return multiply(a, b);
    if (op == '/') return divide(a, b);
}

// Update display when number is pressed, b is zero for next input numbers
function changeDisplay(content) {
    const display = document.querySelector("#display");
    if (display.textContent == '0' || b == null) display.textContent = content;
    else display.textContent += content;
    return Number(display.textContent);
}

let a;
let b;
let op;
let ans;

// When button is pressed, display changes and stores number
const numButtons = document.querySelectorAll(".num");
numButtons.forEach(button => {
    button.addEventListener("click", () => {
        b = changeDisplay(button.textContent);
    }
)});

// Pressing an operation stores the operation and assigns the displayed value to a
const opButtons = document.querySelectorAll(".op");
opButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (a !== undefined) {
            ans = operate(op, a, b);
            b = null;
            changeDisplay(ans);
            op = button.textContent;
            a = ans
        } else {
        op = button.textContent;
        a = b;
        b = null;
        }
})});

const equalButton = document.querySelector("#eq");
equalButton.addEventListener("click", () => {
    if (a && b) {
    ans = operate(op, a, b);
    b = null;
    a = ans;
    changeDisplay(ans);
    }
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", () => {
    ans = null;
    b = null;
    a = null
    op = null;
    changeDisplay(0);
})