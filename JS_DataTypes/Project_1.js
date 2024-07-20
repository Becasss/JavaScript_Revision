// JavaScript has 8 Datatypes

// String, Number, Bigint, Boolean, Undefined, Null, Symbol and Ojbet

// Object data types can contain both built-in objects and user defined objects.
// Objects, arrays, dates, maps, sets, intarrays, floatarrays, promises and more.


// Numbers:
let length = 19;
let weight = 4.5;
document.write("length: " + length + " weight: " + weight);


// Strings:
let name = "Bikash";
let lastName = "Yamphu Rai";
document.write('<br>My name is ' + name + lastName);


// Booleans:
let x = true;
let y = false;
document.write("<br>x: " + x + " y: " + y);


// Objects:
const person = {
    firstName: "John",
    laName: "Doe",
    age: 30
};
document.write("<br>Person:" + person.firstName + "lastName:" + person.laName + "age:" + person.age);



// Array Object:
const cars = ["Saab", "Volvo", "BMW"];
document.write("<br>Cars:" + cars[0] + " " + cars[1] + " " + cars[2]);





// Javascript Data types are dynamic
let z;      // Now z is undefined
z = 10;     // Now z is a number
z = "hello"; // Now z is a string

document.write("<br>z: " + z);
