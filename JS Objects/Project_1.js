// Javascript Object Literal

const person = {};

person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.eyeColor = "blue";

// Display Data form Object
console.log(`My name is ${person.firstName} ${person.lastName}.`);


// Javascript new Object() Method:

const person1 = new Object();

// Add Properties
person1.firstName = "Jane";
person1.lastName = "Doe";
person1.age = 25;
person1.eyeColor = "brown";

// Display Data from Object.
console.log(`My name is ${person1.firstName} ${person1.lastName}.`);



// Object Constructor Functions

function person2(first, last, age, eye) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyeColor = eye;
}

// create Two Person Objects
const myFather = new person2("Dhan", "Bahadur", 59, "Blue");
const myMother = new person2("Rania", "Yamphu", 57, "brown");

console.log(`My father is ${myFather.firstName} ${myfather.lastName}.`);
console.log(`My mother is ${myMother.firstName} ${myMother.lastName}`);