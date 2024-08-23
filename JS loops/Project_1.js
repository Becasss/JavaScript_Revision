const cars = ["BMw", "Volvo", "Saab", "Ford", "Fiat","Audi"];

let len = cars.length;
let text = "";
for(let i = 0; i < len; i++) {
    text += cars[i] + "\n";
}

console.log(text);