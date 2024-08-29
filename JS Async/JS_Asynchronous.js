// Waiting for a Timeout

setTimeout(myFunction, 3000);

function myFunction() {
    console.log("I love You!");
}


setTimeout(function () { myfunction("I lvove your!"); }, 3000);

function myfunction(value) {
    console.log(value);
}

// Waiting for Intervals:

setInterval(myFunction1, 1000);

function myFunction1() {
    let d = new Date();
    console.log(d.getHours() + ':' + d.getMinutes() + ":" +
d.getSeconds());
}