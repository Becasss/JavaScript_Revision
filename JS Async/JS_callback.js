// Function SEquence

function myDisplayer(some) {
    document.getElementById('demo').innerHTML = some;
}

function myfirst() {
    myDisplayer("Hello");
}
function mysecond() {
    myDisplayer("World");
}


mysecond();
myfirst();



// Sequence Control

function myDisplay(some) {
    console.log(some);
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;

    return sum;
}
let result = myCalculator(10, 10);
myDisplay(result);


// JavaScript Callbacks
function myDisplays(something) {
    console.log(something);
}

function myCalculators(num1, num2, myCallback) {
    let sum = num1 + num2;

    myCallback(sum);
}

myCalculators(10, 10, myDisplays);