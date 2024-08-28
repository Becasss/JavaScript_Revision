// Create an object - using the get keyword
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    }
};

// Display data from the object using a getter:
console.log(person.lang);


// Create an object  - using the set keyword

const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    set lang(value) {
        this.language = value;
    }
};

// set a property using set:

person.lang = "en";

console.log(person.language);



// Object.defineProperty()
// Define an Object
const obj = { couner: 0 };

// Define setters and getters
Object.defineProperty(obj, "reset", {
    get: function () { this.counter = 0; }
});

Object.defineProperty(obj, "increment", {
    get: function () { this.counter++; }
});
Object.defineProperty(obj, "decrement", {
    get: function () { this.counter--; }
});
Object.defineProperty(obj, "add", {
    set: function (value) { this.counter += value; }
});
Object.defineProperty(obj, "substract", {
    set: function (value) { this.counter -= value; }
});


// play with counter
obj.reset;
obj.add = 5;
obj.substract = 1;
obj.increment;
obj.decrement;

console.log(obj.counter); // Output: 4



// Object.preventExtensions() method:

const person2 = {
    firstName: 'John',
    lastName: 'Doe'
};

// Prevent Extensions
Object.preventExtensions(person2);

// text Error
let text = "";
try {
    person2.nationality = "English";
}
catch (error) {
    text = error.message;
}
console.log(text);

let answer = Object.isExtensible(person2);
console.log(answer); // Output: false




// Object.seal() Method
"Use Strict"
// Create Object
const person3 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    eyeColor: 'blue',
};

// Seal Object
Object.seal(person3);

// test Error
let text1 = '';
try {
    delete person3.firstName;
    text1 = Object.values(person3);
}
catch (error) {
    text1 = err;

}
console.log(text1); // Output: ["Doe", 30, "blue"]