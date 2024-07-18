// BigInt :: are used to store big integer value that are too bigto be represented by a normal JavaScript Number.


// JavaScript Integer Accuracy :: JS integers are only accuarate up to 15 digits.



// How to create a BigInt :
let x = 99999999999999999;
let y = BigInt(99999999999999999);

document.write("The number x is " + x + " and y is " + y);

let a = 123234234354345344423414123412341n;
let b = BigInt(1343243443454335435243423);

document.write("<br>The number a is " + a + " and b is " + b);



// MIN_SAFE_INTEGER & MAX_SAFE_INTEGER::

let minSafe = Number.MIN_SAFE_INTEGER;
let maxSafe = Number.MAX_SAFE_INTEGER;

document.write("<br>The minimum safe integer is " + minSafe + " and the maximum safe integer is " + maxSafe);



// New Number Methods:
document.write("<br>" + Number.isInteger(10) + "<br>" + Number.isInteger(10.5));


// Number.isSafeInteger() Method::
