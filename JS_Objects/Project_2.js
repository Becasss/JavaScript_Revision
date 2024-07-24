// Javascript Object Properties

// Accessing Javascript Object Properties
// Syntax: objectName.property
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}

console.log(person.firstName + " " + person.lastName + " " + person.age);



// Adding New Properties

person.city = "Sankhuwasabha";
person.wifeName = "Susmita Shrestha";
person.mobileNumber = 84021490;

console.log(person.mobileNumber + " " + person.wifeName);


// Deleting Properties
delete person.firstName;
console.log(person);



// Nested Objects

let car = {
    name: "Toyota",
    modelName: 2323,
    color: "Red",
    owner: {
        firstName: "Bikash",
        lastName: "Yamphu Rai"
    }
}

console.log('The owner Name is ' + car.owner.firstName + " " + car.owner.lastName+ '.');