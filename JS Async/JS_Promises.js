/* Promise Syntax
let myPromise = new Promise(function(myResolve,myReject){
// "Producing code" (May take some time

myResolve(); // when successful
myReject();  // when error
});
// "Consuming Code"  (Must wait for a fulfilled promise)
myPromise.then(
function(value){//code if successful},
function(error){// code if some error}
);
*/ 