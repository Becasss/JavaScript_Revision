// Javascript Objects:

const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);

console.log(myObj.name);


// Accessing Object Values:

console.log(myObj.city);


// Looping through array

const a = '{"name":"John", "age":30, "car":["Ford","BMW","Fiat"]}';
const b = JSON.parse(a);

let text = '';
for (let i in b.car) {
    text += b.car[i] + ',';

}


console.log(text);