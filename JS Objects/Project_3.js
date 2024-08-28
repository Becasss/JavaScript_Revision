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