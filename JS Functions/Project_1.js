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