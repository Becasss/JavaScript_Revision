// The addEventListener() Method

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}


// Syntax: element.addEventListener(event, function, useCapture);


// Add an Event listener to an Element

document.getElementById("myBtn1").addEventListener("click", function () {
    alert("Hello World!");
});


// ADD  Many Event Handlers to the same Element

var x = document.getElementById("myBtn2");

x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
    alert("Hello World!");
}

function someOtherFunction() {
    alert("This is another function!");
}



// ADD events of different types to the same element

var y = document.getElementById("myBtn3");

y.addEventListener("mouseover", myfirstFunction);
y.addEventListener("mouseout", someFunction);
y.addEventListener('click', mySecondFunction);



function myfirstFunction() {
    document.getElementById("demo1").innerHTML += "Mouseover! <br>";
}

function someFunction() {
    document.getElementById("demo1").innerHTML += "Mouseout! <br>";
}

function mySecondFunction() {
    document.getElementById("demo1").innerHTML += "Clicked! <br>";
}


// Add an Event Handler to the window Object

window.addEventListener("resize", function () {
    document.getElementById("demo2").innerHTML = Math.random();
});