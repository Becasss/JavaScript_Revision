// Local Scope

myFunction();

function myFunction() {
  let x = "Hello, World!";
  document.getElementById("demo1").innerHTML = typeof x + " " + x;
}

document.getElementById("demo2").innerHTML = typeof x;