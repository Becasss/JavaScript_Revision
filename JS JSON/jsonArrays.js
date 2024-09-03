// Javscript Arrays

const myJSON = '["FOrd", "BMW", "Fiat"]';

const myArray = JSON.parse(myJSON);

console.log(myArray);


// Arrays in Objects

const obj = '{"name":"Bikash", "age":30,"cars": ["Ford", "BMW", "Fiat"]}';

const myarr = JSON.parse(obj);

console.log(myarr.cars);
console.log(myarr.cars[0]);