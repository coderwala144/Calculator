function add() {
    let num1 = Number(document.getElementById('fnum').value);
    let num2 = Number(document.getElementById('snum').value);
    let num3 = num1 + num2;
    console.log("Addition is : " + num3);
    alert("Addition is : " + num3);
}

function sub() {
    let num1 = Number(document.getElementById('fnum').value);
    let num2 = Number(document.getElementById('snum').value);
    let num3 = num1 - num2;
    console.log("Subtraction is : " + num3);
    alert("Subtraction is : " + num3);
}

function multi() {
    let num1 = Number(document.getElementById('fnum').value);
    let num2 = Number(document.getElementById('snum').value);
    let num3 = num1 * num2;
    console.log("Multiplication is : " + num3);
    alert("Multiplication is : " + num3);
}

function div() {
    let num1 = Number(document.getElementById('fnum').value);
    let num2 = Number(document.getElementById('snum').value);
    let num3 = num1 / num2;
    console.log("Division is : " + num3);
    alert("Division is : " + num3);
}

function factorial() {
    let n = Number(document.getElementById('snum').value);
    let result = 1;
    if (n < 0) {
        console.log("Factorial is not defined for negative numbers.");
        alert("Factorial is not defined for negative numbers.");
        return;
    }
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log("Factorial is : " + result);
    alert("Factorial of second number is : " + result);
}

function qube() {
    let num2 = Number(document.getElementById('snum').value);
    let num3 = num2 * num2 * num2;
    console.log("Cube is : " + num3);
    alert("Cube is : " + num3);
}

function percentage() {
    let num1 = Number(document.getElementById('fnum').value);
    let num2 = Number(document.getElementById('snum').value);
    let num3 = (num1 / num2) * 100;
    console.log("Percentage is : " + num3 + '%');
    alert("Percentage is : " + num3 + '%');
}

function square() {
    let num2 = Number(document.getElementById('snum').value);
    let num3 = num2 * num2;
    console.log("Square is : " + num3);
    alert("Square is : " + num3);
}

function clearDisplay() {
    document.getElementById('fnum').value = '';
    document.getElementById('snum').value = '';
    console.log("Display cleared");
    alert("Display cleared");
}
function Inverse()
{
    let num1 = document.getElementById('snum').value;
    let num2 = 1/num1
    alert("Inverse of number : " +num2)
}
