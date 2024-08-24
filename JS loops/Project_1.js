const cars = ["BMw", "Volvo", "Saab", "Ford", "Fiat","Audi"];

let len = cars.length;
let text = "";
for(let i = 0; i < len; i++) {
    text += cars[i] + "\n";
}

console.log(text);

const fruits = ["apple", "Banana", "Cherry", "Watermelon"];

let i, lenn, txt;

for (i= 0, lenn = fruits.length, txt = ''; i < lenn; i++) {
    txt += fruits[i] + '\n';
}

console.log(txt);