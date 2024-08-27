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





// Using Object.assign()

// Using Object.create()
// Using Object .fromEntries()




//  JS Object Methods

// General Methods

// Copies properties from a source object to a target object:
Object.assign(target, source)


// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()


// Returna an array of the key of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Group object elements according to a function
Object.groupBy(object, callback)





// Property Managment Methods

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)


// Adding or changing object properties
Object.defineProperties(object, descriptor)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing object Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties of an array
Object.getOwnPropertyNames(object)


// Accessing the prototype
Object.getPrototypeOf(object)




// Object Protection Methods

// Prevents re-assignment
const car = { type: "Fiat", model: 500, color: "white" };


// Prevents adding object properties
Object.preventExtensioins(object)


// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)


