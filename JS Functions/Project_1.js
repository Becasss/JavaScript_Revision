function myFunctoin(p1, p2) {
    return p1 + p2;
}
let sum = myFunctoin(23, 34);
document.write("<br>The sum of 23 and 34 is " + sum);



// Funtion is called, the return value will end up in x
let x = myfunction(5, 6);

function myfunction(c, d) {
    

    return c * d;
}

document.write("<br>The prorduct of c and d is " + x);


// The Function() Constructor 

const myfnc = new Function("a", "b", "return a * b");
console.log(myfnc(5, 5));



// Default Parameters

function multiply(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}
console.log(multiply(5));


// Default Parameters values

function mul(x = 3, y = 6) {
    return x + y;

}
console.log(mul());



// Function Rest Parameters

function sem(...args) {
    let sem = 0;
    for (let arg of args) sem += arg;
    return sem;
}

let a = sem(4, 5, 6, 34, 34, 55, 6, 334);

console.log(a);


// The Argument Object

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }       }
        return `The maximum value is ${max}`;
}

console.log(findMax(5, 10, 15, 20));


// function to sum all input values:
function samAll() {
    let sam  = 0;
    for (let i = 0; i < arguments.length; i++){
        sam += arguments[i];
    }
    return sam;
}
console.log(samAll(1, 2, 3, 4, 5));