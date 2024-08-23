const express = Boolean(10>9);

console.log(express);



// Everything with a value is True

console.log(Boolean(100));
console.log(Boolean(3.4));
console.log(`Any (not empty) string is ${Boolean("any")}`);
console.log(`any expression is (except zero) ${Boolean(1+3+3.14)}`);


// Evrything without a value is false
let x = 0;
console.log(Boolean(x));
console.log(Boolean(-0));
console.log(Boolean(""));
let y;
console.log(Boolean(y));

let z = null;
console.log(Boolean(z));



// Keyword New:
let b = false;
let a = new Boolean(true);
console.log(typeof b);
console.log(typeof a);
