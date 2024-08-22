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


// Numeric sort

const points = [40, 1100, 1, 4, 25, 10];

points.sort(function(a,b){
    return a - b;
});


console.log(`sorted points: ${points}`);



// Use the same trick to sort an array deescending

points.sort(function(a,b){
    return b- a;
});

console.log(`descending sorted points: ${points}`);

//Compare Function

const point = [40, 100, 1, 5, 25, 10];

document.getElementById('demo').innerHTML = point;

function myFunction1(){
    point.sort();
    document.getElementById('demo').innerHTML = point;
}

function myFunction2(){
    point.sort(function(a,b){
        return b - a;
    });
  document.getElementById('demo').innerHTML = point;
}


// Sorting array in random order

const poi = [40, 100, 1, 5, 25, 10];
document.getElementById('momo').innerHTML = poi;

function myFunction(){
    poi.sort(function()
    {return 0.5 - Math.random()});
    document.getElementById('momo').innerHTML = poi;
}