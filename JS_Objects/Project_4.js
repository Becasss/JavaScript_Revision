// Javascript Object Constructor

// Object Type Person
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;;

}

// create a Person Object
const myFather = new Person("Bikash", "Yamphu Rai", 59, "blue");




// create two person objects
const myMother = new Person("Rania", "Yamphu Rai", 57, "brown");
const myBrother = new Person("Rajesh", "Yamphu Rai", 55, "brown");

// Display age
// Display age
console.log("My father age is" + myFather.age + '.');
console.log("My mother age is" + myMother.age + '.');
console.log("My brother age is" + myBrother.age + '.');


// Property Default Values:

function Person1(first, last, age, eyes) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyes;
    this.nationality = "English";
};

// Create 2 Person Objects
const myFather1 = new Person1("Dhan", "Bahadur rai", 59, "blue");
const myMother1 = new Person1("Rania", "Yamphu rai", 57, "brown");

// Display Nationality 
console.log("My father nationality is" + myFather1.nationality + '.');
console.log("My mother nationality is" + myMother1.nationality + '.');.l
