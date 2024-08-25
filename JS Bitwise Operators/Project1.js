// The &(AND) Operators
console.log(5 & 1);


// The |(OR) Operators
console.log(5 | 1);


// The ^(XOR) Operators
console.log(5 ^ 1);


// THe ~ Operator

console.log(~ 1);   


// Javascript (Zero Fill) Bitwise Left Shift(<<)
console.log(5 << 1);
console.log(5 << 2);



// Javascript (Sign Preserving ) Bitwise Right Shift(>>)
console.log(5 >> 1);
console.log(5 >> 2);



// Converting Decimal to Binary

document.getElementById("emo").innerHTML = dec2bin(-5);
function dec2bin(dec2bin) {
    return(dec >> 0).toString(2);
}