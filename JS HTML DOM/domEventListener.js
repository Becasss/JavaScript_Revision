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
