// Prototype Inheritance

// Date objects inherit from Date.prototype

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastNmae = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
}
Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "Blue");

console.log(`The Nationality of my father is ${myFather.nationality}`);

console.log(`My father is ${myFather.name()}`);



// General Methods

// JS Object.assign() Method:
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

const person2 = {
    firstName: "John",
    lastName: "Smith"
};


// Assign Source to Target

Object.assign(person1, person2);

// Display Target

let text = Object.entries(person1);
console.log(text);




// Object.entries() Method:

const person3 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyeColor: "blue"
};

let text1 = Object.entries(person3);
console.log(text1);



// Object.entries() also makes it simple to convert objects to maps:

const fruits = { Banana: 300, Oranges: 200, Apples: 500 };

const myMap = new Map(Object.entries(fruits));

console.log(myMap);




// Object.formEntries() Method
const fruits1 = [
    ['apple', 300],
    ['orange', 900],
    ['banana', 200]
];
const myObj = Object.fromEntries(fruits1);
console.log(myObj.banana);




// Object.values() Method
const person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyeColor: "blue"
};
let text3 = Object.values(person4);
console.log(text3);




// Object.groupBy() Method:

const fruits2 = [
    { name: "apples", quantity: 300 },
    {
        name: "bananas",
        quantity: 500
    },
    { name: "cherry", quantity: 300 },
    { name: "cheese", quantity: 150 }
];

// callback function to select low volumes
function myCallback({ quantity }) {
    return quantity > 200 ? "Ok" : "low";
}

    // Group by ok and low
    const result = Object.groupBy(fruits2, myCallback); 


let text2 = "These fruits are OK: \n";
for (let [x, y] of result.ok.entries()) {
    text2 += y.name + " " + y.quantity + "\n";
}

text2 += "\n These fruits are low: \n";
for (let [x, y] of result.low.entries()) {
    text2 += y.name + " " + y.quantity + "\n";
}

console.log(text2);