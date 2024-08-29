/* Promise Syntax
let myPromise = new Promise(function(myResolve,myReject){
// "Producing code" (May take some time)

myResolve(); // when successful
myReject();  // when error
});

// "Consuming Code"  (Must wait for a fulfilled promise)

myPromise.then(
function(value){//code if successful},
function(error){// code if some error}
);

*/


function myDisplayers(some) {
    console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // some code (try to change x to 5)

    if (x === 0) {
        myResolve("OK");
    } else {
        myReject("Not OK");
    }
});

myPromise.then(
    function (value) { myDisplayers(value); },
    function (error) { myDisplayers(error); }
);