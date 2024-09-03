// Parsing JSON

const obj = JSON.parse('{"name":"John","age":20, "city":"New York"}');
console.log(obj);



// Array as JSON

const text = '["Ford", "BMW", "Audi", "Fiat"]';

const myArr = JSON.parse(text);

console.log(myArr);