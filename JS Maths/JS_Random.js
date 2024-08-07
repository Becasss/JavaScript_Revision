// Math.random() returns a random number between 0 and(inclusive) and 1 (exclusive):


// Returns a random number
document.write(Math.random());      // Math.random() always reutrns a number lower than 1.


document.getElementById("demo").innerHTML =
    Math.floor(Math.random() * 10);

document.getElementById("momo").innerHTML =
    Math.floor(Math.random() * 11) + 1;



// A Proper Random Function:

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}