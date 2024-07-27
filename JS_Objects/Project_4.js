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

// Display age
console.log("My father age is" + myFather.age + '.');


// create two person objects
const myMother = new Person("Rania", "Yamphu Rai", 57, "brown");
const myBrother = new Person("Rajesh", "Yamphu Rai", 55, "brown");

// Display age
console.log("My mother age is" + myMother.age + '.');
console.log("My brother age is" + myBrother.age + '.');