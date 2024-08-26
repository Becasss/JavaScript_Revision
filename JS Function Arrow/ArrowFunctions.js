// Types of arrow functions

// No Parameters
const greet = () => "Hello world!";
console.log(greet());


// Single Parameters

const square = x => x * x;
console.log(square(5));


// Multiple Parameters

const add =  (z, y) => z + y;
console.log(add(3, 5));


// Function body with Multiple statements

const greetPerson = name => {
    const greeting = "Hello world!" + name + "!";
    return greeting;
}
console.log(greetPerson("Bikash"));


// Returning Object Literals

const makePerson = (firstName, lastName) => ({first: firstName, last: lastName});;
console.log(makePerson("Bikash", "Yamphu Rai"));


// High Order Function and Callbacks
const numbers = [1,2,3,4,5,6,7,8,9,10];
const doubled = numbers.map(num => num * 2);
console.log(doubled);