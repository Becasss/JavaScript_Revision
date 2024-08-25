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