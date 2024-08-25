// Local Scope

myFunction();

function myFunction() {
  let x = "Hello, World!";
  document.getElementById("demo1").innerHTML = typeof x + " " + x;
}

document.getElementById("demo2").innerHTML = typeof x;




// Gobal Javscrpt Variables:

let carName = "Volvo";
myfunctoin();

function myfunctoin() {
  document.getElementById("demo3").innerHTML = "I can display " + carName;
}