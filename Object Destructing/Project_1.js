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


// Object Property Alias

const employee = {
    id : 123,
    name: "John Doe",
    salary : 50000
}

// Destructuring
let {name: firtName} = employee;

// Display the primitive values
console.log(firtName);



// String Destructing 
let name = "W3schools.com";

// Display Value
let [a1, a2, a3, a4, a5, a6] = name;

// Display Value
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
