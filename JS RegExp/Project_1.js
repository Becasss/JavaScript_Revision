// Javascript Strigs Methdos:
let text = "Visit W3schools!";
let n = text.search("W3schools");
console.log(n);



// Using string search() with a regular expression

let a = text.search(/w3schools/i);
console.log(a);



// Using string replace() with a string

function myFunction(){
    let b = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    b.replace("Microsoft!", "Google");
}