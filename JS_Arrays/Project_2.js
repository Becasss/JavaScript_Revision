// JS Array Length

const fruits = ["Apple", "Banana", "Orange", "Mango"];
let length = fruits.length;
console.log(`length: ${length}`);



// JS Array toString()

const animals = ["Lion", "Leopard", "Dog", "Cat"];
let animalsString = animals.toString();
console.log(`animals: ${animalsString}`);


// JS Array at()

let animal = animals.at(2);
console.log(`animal: ${animal}`); // Getting second element of animals using at()


// Get the second elemeent of animals using []

let secondAnimal = animals[1];
console.log(`second animal: ${secondAnimal}`);


// JS Array join()
let joinedAnimal = animals.join("*");
console.log(`joined animals: ${joinedAnimal}`); // Joining all elements of animals with 


// JS Array Pop()

let lastAnimal = animals.pop();
console.log(`last animal: ${lastAnimal}`); // Removing last element from animals
console.log(`animals after pop: ${animals}`);


/// JS Array Push()

animals.push("Tiger");
console.log(`animals after push: ${animals}`);


// JS Array Shift().

let firstAnimal = animals.shift();
console.log(`first animal: ${firstAnimal}`); // Removing first element from animals
console.log(`animals after shift: ${animals}`);