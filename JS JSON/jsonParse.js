// Parsing JSON

const obj = JSON.parse('{"name":"John","age":20, "city":"New York"}');
console.log(obj);



// Array as JSON

const text = '["Ford", "BMW", "Audi", "Fiat"]';

const myArr = JSON.parse(text);

console.log(myArr);



// Exceptions : Converting a string into a date:

const date = '{"name":"John","birth":"1986-12-14", "age":20, "city":"New York"}';

const bdate = JSON.parse(date);

console.log(bdate); // Throws error: Invalid Date
console.log(bdate.name);
bdate.birth = new Date(bdate.birth);
console.log(bdate.brith); // Throws error: Invalid