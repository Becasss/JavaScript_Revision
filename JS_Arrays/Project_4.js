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



// JavaScript Array reduce();

let sum = numbers.reduce(functions);
console.log(`the sum is:${sum}`);

function functions(total, value, index, array){
    return total + value;
}

// JavaScript Array reduceRight();

let sumRight = numbers.reduceRight(fncts);
console.log(`the sum right is:${sumRight}`);

function fncts(total, value, index, array){
    return total + value;
}


// JavaScript Array every();

let allEven = numbers.every(isEven);
console.log(`Is even is:${allEven}`);


function isEven(value, index, array){
    return value % 2 == 0;
}

// Javascript Array some();

let someOver5 = numbers.some(Over);
console.log(`Is over 5 is:${someOver5}`);

function Over(value, index, array){
    return value > 5;
}

// Javascript Array.from():

const aplha = Array.from("ABSCDEDG");
console.log(`The array from string is:${aplha}`);


// Javascript Array keys():

const fruitss = ["Banana", "Apple", "Orange", "Mango", "Cherry"];

const keys= fruitss.keys();

let txt = "";
for(let x of keys){
    txt += fruitss[x] + "\n";
}


console.log(txt);


// The entries() Method:

const fruitss1 = ["Banana", "Apple", "Orange", "Mango", "Cherry"];

const f = fruitss1.entries();

let txt1 = "";
for(let x of f){
  txt1 += x + "\n";
  console.log(txt1);
}