// The forEach() Method:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let text = "";

numbers.forEach(myFunction);
console.log(text);

function myFunction(value,index, array) {
text += value + "\n";
}


// JavaScript Array map();

const numbers1 = numbers.map(myfunction);
console.log(numbers1);

function myfunction(value) {
return value * 2;
}



// JavaScript Array flatMap();

const newArr = numbers.flatMap(x => [x, x*10]);
console.log(newArr);


// Javascriptp Array filter();


const over5 = numbers.filter(mFunction);
console.log(over5);

function mFunction(value,index,array) {
    return value > 5;
}