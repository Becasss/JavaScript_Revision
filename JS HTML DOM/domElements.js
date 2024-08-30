// Finding HTML Elements


// Finding HTML Elements by Id

const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
    `The text from the intro paragraph is  ${element.innerHTML}`;





// Finding HTML Elements by Tag Name
    
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById('demo1').innerHTML =
    " The firstt paragraph is (index 0) inside : " + y[0].innerHTML;




// Finding HTML Elements by Class Name

const a = document.getElementsByClassName("intro");

document.getElementById("demo2").innerHTML =
    `the firstt paragraph is (index 0) with class : ${a[0].innerHTML}`;



// Finding HTML Elements by CSS Selectors

const b = document.querySelectorAll("h2.intro");
document.getElementById("demo3").innerHTML =
    `The first paragraph is (index 0) with class : ${b[0].innerHTML}`;






// Finding HTML Elements by HTML Object Collections
const c = document.forms["frm1"];
let text = "";
for (let i = 0; i < c.length; i++){
    text += c.elements[i].value + '<br>';
}
document.getElementById("demo4").innerHTML = text;