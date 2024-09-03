// Stringify a Javascript object

const obj = { name: "John", age: 30, city: "New York" };

const myJSON = JSON.stringify(obj);

console.log(myJSON);


// Stringify a Javascript Array

const arr = ["John", "John", "John", "John", "John"];

const mySON = JSON.stringify(arr);

console.log(mySON);



// Storing Data

const myObj = { name: "John", age: 30, city: "New York" };
const myjo = JSON.stringify(myObj);

localStorage.setItem("testJSON", myjo);


// Retrieving Data:
let text = localStorage.getItem("testJSON");
let z = JSON.parse(text);

console.log(z.name);



// Stringify Dates:

const d = { name: "BIkash", todaay: new Date(), city: "Kathmandu" };

const myd = JSON.stringify(d);

console.log(myd);