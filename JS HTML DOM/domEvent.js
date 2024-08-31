function changeText(id) {
    id.innerHTML = "Oops!";
}




// HTML Event Attributes

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}


// Assign Events Using the HTML DOM
document.getElementById("myBtn").onclick = displayDate;

function displayDate(){
document.getElementById("demo1").innerHTML = Date();
}