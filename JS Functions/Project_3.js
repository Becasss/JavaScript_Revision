// initiate counter

let counter = 0;

// Function to increment counter
function add() {
    counter += 1;
}

// call add() 3 times

add();
add();
add();

// The counter should be now 3 
console.log(`The counter is now ${counter}`);



/// let cntr = 0;
function addd() {
    let cntr = 0;
    cntr += 1;
    return cntr;
}
// trying to increment the counter
function myFunction() {

document.getElementById('demo').innerHTML = addd();
}