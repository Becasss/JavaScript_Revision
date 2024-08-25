// Converting strings to Numbers
 

// Number() Method:

document.getElementById("demo").innerHTML = 
Number("3.14") + "<br>" + 
Number(Math.PI) + "<br>" +
Number("   ")+ "<br>" + Number("") + "<br>" + 
Number("99 33") + "<br>" + 
Number("Johb") + "<br>" +
Number("10") + "<br>" ;


// The Uniary + operator

let y = "5";
let x =  + y;
console.log(typeof y);
console.log(typeof x);


// Converting Numbers to Strings

 let a = 123;
 console.log(String(a));
 console.log(String(123));
console.log(100 + 24);

// toString() Method:
console.log((123).toString());




// Converting Dates to Numbers
let d = new Date();
console.log(Number(d));

console.log(d.getTime());



// Converting Dates to strings

console.log(String(Date()));
console.log(Date().toString());



// Converting Booleans to Numbers

console.log(Number(false));
console.log(Number(true));




// Converting Booleans to Strings

console.log(String(false));
console.log(String(true));