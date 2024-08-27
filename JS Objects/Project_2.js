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