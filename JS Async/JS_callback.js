// Function SEquence

function myDisplayer(some) {
    document.getElementById('demo').innerHTML = some;
}

function myfirst() {
    myDisplayer("Hello");
}
function mysecond() {
    myDisplayer("World");
}


mysecond();
myfirst();