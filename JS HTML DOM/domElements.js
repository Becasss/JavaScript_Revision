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
