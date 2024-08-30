function validateForm() {
    let x = document.forms['myForm']['fname'].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

// validate Numbers

function myfunction() {
    // get the value of the input field with id = "numb"
    let a = document.getElementById("numb").value;
    // If x is not a number or less than one or greater than 10
    let text;
    if (isNaN(a) || a < 1 || a > 10) {
        text = "input not valid";
    }
    else {
        text = "input is valid";
    }
    document.getElementById("demo").innerHTML = text;
}