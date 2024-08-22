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


// JS Array Unshift().

animals.unshift("Elephant");
console.log(`animals after unshift: ${animals}`);


// Changing Elements
animals[0] = "Banana";
console.log(`animals after change: ${animals}`);

//Js Array delete().

delete animals[1];
console.log(`animals after delete: ${animals}`);


//Merging Arrays (Concatenating)

let newAnimals = ["Hippopadmaas", "Eagle"];
let mergeAnimals = animals.concat(newAnimals);
console.log(`animals after concat: ${mergeAnimals}`);

// Merging an Array with values
let mergeAnimalsArray = mergeAnimals.concat("Giraffected");
console.log(`animals after concat with array: ${mergeAnimalsArray}`);



// Array copyWithin()

let animalCopy = animals.copyWithin(2, 0);
console.log(`animals after copyWithin: ${animalCopy}`);


// Flattering an array

let nestedAnimals = [["Lion", "Tiger"], ["Elephant", "Monkey"]];
let flatAnimals = nestedAnimals.flat();
console.log(`animals after flat: ${flatAnimals}`);


// JS array flatMap()
const myArr = [1,2,3,4,5,6];
const newArr = myArr.flatMap(x  => [x, x * 10]);
console.log(`newArr: ${newArr}`);


// JS Array splice() - to add elements

let animalSplic = animals.splice(2, 0, "Giraff", "Cobra");
console.log(`animals after splice: ${animals}`);

// Array splice() - to remve elements

animalSplic = animals.splice(3, 2);
console.log(`animals after splice: ${animals}`);



// JS Array toSpliced() - 

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(`spliced: ${spliced}`);

// JS Array slice() - slices out a piece of an array into a new array.


const animalSlice = animals.slice(1, 3);
console.log(`animalSlice: ${animalSlice}`);



// Array IndexOf()

let index = animals.indexOf("Giraff");
console.log(`Index of giraff: ${index}`);

const car = ['a', 'b', 'c', 'd'];
let findex = car.indexOf("a") + 1;
console.log(`Index of a: ${findex}`);

// Array LastIndexOf()

