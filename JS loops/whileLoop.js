let text  = '';
let i = 0;
while (i < 10){
    text += `\n The number is : ${i}`;
    i ++;
}
console.log(text);




// do While Loop:

let txt = '';
let a = 0;
do{
    txt += `\n The number is : ${a}`;
    a++;
}
while (a < 10);
console.log(txt);



// Comparing FOR and while Loop:

const cars = ["A", "B", "C", "D", "E", "F"];


let trt = "";
for (let b = 0;b < cars.length;b++){
    trt += cars[b] + "\n";
}
console.log(trt);