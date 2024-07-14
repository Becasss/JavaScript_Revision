let x = 34.289; // A number with decimals
let y = 45; // A number without Decimals

let sum = x + y;
document.write("The total sums is " + sum);




// Exponent Notation:
let a = 123e5;
let b = 123e-5;

document.write(a + "<br>" + b);


// Adding Numbers and Strings:
let c = "10";
let d = "123";
let e = c + d;

document.write("<br> The sum of c + d is " + e); // If you add two strings, the result will be concatenation.


let f = 10;
let g = "123";
let h = f + g; // If you add a number and a string, the result will be a string.

document.write("<br>The sum of f + g is " + h);



// Nan - Not a Number : Nan is a JavaScript Number reserved word indicating that a number s not a legal number.
let i = 1000 / "new";

document.write("<br> The i is " + i);


/// Infinity (or -infinity) is he value Javascript will return if you calcualte a number outside the largest possible numer.

let myNumber = 2;
let txt = "";

while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    txt = txt + myNumber + "<br>";
}

document.write("<br><br> The numbers are " + txt);





// JavaScript Numbers as Objects:
let j = new Number(1234);
document.write("<br><br> The numbers are " + j);
console.log(typeof(j)); // 

