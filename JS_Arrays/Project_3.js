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

// The Fisher Yates Method
document.getElementById('fy').innerHTML = point;

function myfunction(){
    for(let i = points.length -1; i >0; i --){
        let j = Math.floor(Math.random()* (i+1));

        let k = points[i];
        points[i] = points[j];
        points[j] = k;
    }
    document.getElementById('fy').innerHTML = points;
}




// Find the min or max with sort() method:

let numbers = [4, 2, 9, 5, 1, 6];

numbers.sort(function(a, b){
    return a - b;
});

console.log(`Minimum value: ${numbers[0]}`);

console.log(`Maximum value : ${numbers[numbers.length - 1]}`)



//Using Math.min() or Math.max() on an Array

document.getElementById('mo').innerHTML = numbers
= myArrayMin(numbers);

function myArrayMin(arr){
    return Math.min.apply(null, arr);
}



// Sorting Object Arrays

const cars = [
    {type:"Volvo", year: 2016},
    {type:"Saab", year:2001},
    {type:"BMW", year: 2010}
];
displayCars();

cars.sort(function(a,b) {
    return a.year - b.year
});
displayCars();
function displayCars(){
    document.getElementById('sort').innerHTML = 
    cars[0].type + " " + cars[0].year+ "<br>" +
    cars[1].type + " " + cars[1].year+ "<br>" +
    cars[2].type + " " + cars[2].year;
}


// Comparing string properties is a little more complex.
const carss = [
    {type:"Volvo", year: 2016, color: "black"},
    {type:"Saab", year: 2001, color: "white"},
    {type:"BMW", year: 2010, color: "red"}
];

displayCarss();

function myyFunction(){
    carss.sort(function(a,b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if(x<y) {return -1;}
        if(x > y) {return 1;}
        return 0;
    });
    displayCarss();
}

function displayCarss(){
    document.getElementById('dodo
        ').innerHTML = 
    carss[0].type + " " + carss[0].year + " " + carss[0].color + "<br>" +
    carss[1].type + " " + carss[1].year + " " + carss[1].color + "<br>" +
    carss[2].type + " " + carss[2].year + " " + carss[2].color;
}