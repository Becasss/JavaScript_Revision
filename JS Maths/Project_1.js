document.write(Math.PI);



// Maths Properties (Constants):

document.write("<br>" + Math.E);     // returns Euler's number

document.write("<br>" + Math.PI);    // returns PI

document.write("<br>" + Math.SQRT2);  // returns the square root of 2


document.write("<br>" + Math.SQRT1_2); // returns the square root of 1/2


document.write("<br>" + Math.LN2);      // returns the natural Logarithm of 2

document.write("<br>" + Math.LN10);     // returns the natural Logarithm of 10 

document.write("<br>" + Math.LOG2E); // returns the base 2 logarithm of E

document.write("<br>" + Math.LOG10E); // returns the base 10 logarithm of E




// Math.methods(number):

document.write("<br>" + Math.round(4.6));    // returns its nearest integer

document.write("<br>" + Math.ceil(4.5));      // rounded up to its nearest integer

document.write("<br>" + Math.floor(4.9));      // rounded down to its nearest integer


document.write("<br>" + Math.trunc(4.9));       // returns the integer part of x
    
document.write("<br>" + Math.sign(-6));         // returns ths sign of  x is negative, null or positive


document.write("<br>" + Math.pow(5, 3));      // returns the value of 5 to the power of 3

document.write("<br>" + Math.sqrt(64));      // returns the square root of 64.

document.write("<br>" + Math.abs(-4.6));          // returns the absolute (Positive) value of x


document.write("<br>" + Math.sin(90 * Math.PI / 180)); // returns 1 (the sine of 90 degrees)

document.write("<br>" + Math.cos(0 * Math.PI / 180));    // returns 1 (the cos of ) degrees


document.write("<br>" + Math.min(0, 130, 30, -23, 2323));     // returns the lowest vallue in a list of arguments.

document.write("<br>" + Math.max(0, 150, 40, -2, -100));    // Returns the highest value in a list of arguments.

document.write("<br>" + Math.random())        // returns a random number between 0 (inclusive) and 1 (exclusive):


document.write("<br>" + Math.log(1));       // Returns the natural logarithm of 1


// Math.E and Math.log() are twins

document.write("<br>" + Math.E);    // returns Euler's number

document.write("<br>" + Math.log(Math.E)); // returns the natural logarithm of E