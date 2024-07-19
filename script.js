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
    let ans;
    if (op == '+') ans = add(a, b);
    if (op == '-') ans = substract(a, b);
    if (op == '*') ans = multiply(a, b);
    if (op == '/') ans = divide(a, b);
    return Math.round(ans * 1e10) / 1e10;
}

// Update display when number is pressed, b is zero for next input numbers
function changeDisplay(content) {
    const display = document.querySelector("#display");
    if (content == Infinity || content == -Infinity) {
        display.textContent = "Division by 0 error";
        return Infinity;
    }
    if (display.textContent == '0' || b == null) display.textContent = content;
    else display.textContent += content;
    return Number(display.textContent);
}

let a;
let b;
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
        if (a == null && b != null) {
            a = b;
            b = null;
            changeDisplay(a);
        } else if (a != null && b != null)  {
            a = operate(op, a, b);
            b = null;
            changeDisplay(a);
        }
        op = button.textContent;
    })
});

const equalButton = document.querySelector("#eq");
equalButton.addEventListener("click", () => {
    if (a != null && b != null && op != null) {
        a = operate(op, a, b)
        b = null;
        changeDisplay(a);
    }
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", () => {
    b = null;
    a = null
    op = null;
    changeDisplay(0);
})