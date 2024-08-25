const person = {
    firstName : "John",
    lastName: "Doe",
    age : 21
};

// Destructuring 
let {firstName, lastName} = person;


// Display the primitive Values
console.log(firstName);
console.log(lastName);


// Object Default Values:

const people = {
    fname : " Bikash",
    lname: "Yamphu Rai",
    age : 27
}

// Destructuring
let {fname,lname, country = "US"} = people;

// Display the primitive values
console.log(fname);
console.log(lname);
console.log(country);


// Object Property Alias

const employee = {
    id : 123,
    name: "John Doe",
    salary : 50000
}

// Destructuring
let {name: firtName} = employee;

// Display the primitive values
console.log(firtName);



// String Destructing 
let name = "W3schools.com";

// Display Value
let [a1, a2, a3, a4, a5, a6] = name;

// Display Value
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);



// Array Destructuring
// Crate an Array
const fruits = ["Banana", "Orange", "Apples", "Mangos"];

// DEstructuring
let [fruit1, fruit2]= fruits;

// Display primitive values

console.log(fruit1);
console.log(fruit2);


// Skipping array values
let [b1,,,b2] = fruits;


console.log(b1);
console.log(b2);


//Array position values

const {[0]:f1, [1]:f2} =fruits;

console.log(f1);
console.log(f2);


// TheREst Property

const numbers = [10,20,30,40,60,70];

const [a,b, ...rest] = numbers;

console.log(a);
console.log(b);
console.log(rest);
    


// Desctructuring Maps

const map = new Map([
    ["aples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Destructuring

let text = "";
for(const [key,value] of map){
    text += `${key}: ${value}\n`;
}

console.log(text);