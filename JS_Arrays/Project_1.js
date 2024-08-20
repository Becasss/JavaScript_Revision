// Javascript Arrays

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars); // Output: Saab, Volvo, BWM


console.log(cars[0]);

console.log(cars[1]);

console.log(cars[2]);


const car = new Array('Mercedes', 'tractor', 'Jeeper',);
 console.log(car); // Output: Mercedes, tractor, Jeeper


// Accessing Array Elements
let carr = car[0];

console.log(carr); // Output:Mercedes


// Changing array elements
cars[0] = "Toyota";
console.log(cars); // Output: Toyota, Volvo, BWM



// Converting Array to string
console.log(cars.toString()); // Output:Toyota,Volvo, BWM


// Accessing the full array:
console.log(cars); // Output: Toyota, Volvo, BWM

// Arrays are objects
console.log(typeof cars); // Output:object

// The length Property
console.log(cars.length); // Output:3