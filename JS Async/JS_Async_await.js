// Async Syntax
/*
async function myFunction(){
return "Hello";
}
// Is same as:
function myFunction(){
return Promise.resolve("Hello");
}
// myFunction().then(
function (value){code if successful},
function(error){code if some erro)
}
);
*/



// Example: JavaScript async / await
function myDisplayer(some) {
    console.log(some);
}

async function myFunction() {
    return "Hello";
}
myFunction().then(
    function (value) {
        myDisplayer(value);
    }
    function(error) {
        myDisplayer(error);
    }
);


// example2
function myDisplay(some) {
    console.log(some);
}

async function myfunction() {
    return "hello";
}

myFunction().then(
    function (value) {
        myDisplay(value);
    },
    function (error) {
        myDisplay(error);
    }
);


// Await Syntax

async function myDisplays() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("I love you`");
    });
    console.log(await myPromise);
}
myDisplay();



// Example without reject:

async function myDsplay() {
    let myPromise = new Promise(function (resolve) {
        resolve("I love you");
    });
    console.log(await myPromise);
}
myDsplay();



// waiting for a Timeout
async function mydisplay() {
    let myPromise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("I love you");
        }, 3000);
    });
    console.log(await myPromise);
}
mydisplay();