// Finding HTML Elements


// Finding HTML Elements by Id

const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
    `The text from the intro paragraph is  ${element.innerHTML}`;
