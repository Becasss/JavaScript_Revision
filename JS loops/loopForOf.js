const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for(let x of cars){
    text += x + "\n";   
}

console.log(text); // Output: BMW\nVolvo\nMini


// Looping over a string

let language = "JavaScript";

let txt = "";
for(let x of language){
    txt += x + "\n";
}
console.log(txt); 