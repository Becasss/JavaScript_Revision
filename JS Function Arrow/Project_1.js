let myFunction = (a,b) => a * b;
console.log(myFunction(4,6));




// Before Arrow

let hello = "";
hello = function(){
    return "Hello, world!";
}
console.log(hello());


// With Arrow Function
let hlo = "";

hlo = () =>  {
    return "Hello, world!";
}
console.log(hlo());



// With Arrow Function
let add = "";
add = () => "Hello, world!";
console.log(add());




// Arrow Function with a Parameters
let params ="";
params = (name) => `Hello, ${name}!`;
console.log(params("Bikash"));


// Arrow function without a Paranthesis

let noparams = "";
nonparams = val => "Hello, world!" + val;
console.log(nonparams(10));



/// JavaScript "this"
let maya = "";
maya = function(){
    document.getElementById("demo").innerHTML += maya;
}

// The window object calls the function:
window.addEventListener("load", maya);



// A button object calls the functions:

document.getElementById('btn').addEventListener("click",maya);