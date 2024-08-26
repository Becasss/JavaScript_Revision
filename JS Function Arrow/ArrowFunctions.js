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