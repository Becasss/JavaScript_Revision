// The && Operator (Logical AND):

let a = 6;
let b = 3;

console.log(a < 10 && b >  1);
console.log(a < 10 && b < 1);


// The || Operator (Logical OR):

console.log(a == 5 || b == 5);
console.log(a == 6 || b == 0);
console.log(a == 0|| b == 3);
console.log(a == 6 || b == 3); 


// Condition Ternary Operator

// syntax : Variabelname = (condition) ? value1:value2

let z = (a == b) ? "a and b are equal" : "a and b are not equal";
console.log(z);


function myFunction(){
    let age = document.getElementById("age").value;
    let voteable = (age < 18)? "Too Young": "Old enough";
    document.getElementById("demo").innerHTML = voteable + "to vote.";
}
