// Prototype Inheritance

// Date objects inherit from Date.prototype

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastNmae = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "Blue");

console.log(`The Nationality of my father is ${myFather.nationality}`);


Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
}
console.log(`My father is ${myFather.name}`);