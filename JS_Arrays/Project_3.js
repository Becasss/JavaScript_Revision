// Sorting an array

const fruits  = ["Banana", "Coffee", "Olives", "Mango", "Jerry"];
let sorted = fruits.sort();
console.log(`sorted fruits: ${sorted}`);


// Reversing an array

let reversed = fruits.reverse();
console.log(`reversed fruits: ${reversed}`);


// Sortin in reverse order - combining sort() & reverse() methods


const characters = ["z", "a", "b", "c", "d", "e","i", "f", "o", "p"];
let sortedReverse = characters.sort().reverse();
console.log(`sorted characters: ${sortedReverse}`);

// JS Array  toSorted() Method

const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const sorrted = months.toSorted();
console.log(`sorted months: ${sorrted}`);


//JS Array toReversed() Method

const animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Monkey"];
const reversedAnimals = animals.toReversed();
console.log(`reversed animals: ${reversedAnimals}`);