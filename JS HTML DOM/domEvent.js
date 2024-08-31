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


// The onload Attribute

function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are disabled.";
    } document.getElementById("demo2").innerHTML
        = text;
}


// The oninput Event

function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}