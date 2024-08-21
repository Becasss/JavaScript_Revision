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


// Accessing the first array element
console.log(cars[0]); // Output: Toyota

// Accessing the last array element
console.log(cars[cars.length - 1]); // Output: BMW



// Looping Array Elements
let flen = cars.length;

let text = "<ul>";
for(let i = 0; i < flen; i ++) {
    text += "<li>" + cars[i] + "</li>";
}
text += "</ul>";


console.log(text); // Output: <ul><li>Toyota</li><li>Volvo</li><li>BMW</li></ul>



// Adding Array elements
const fruits = ["Banana", "Apple", "Orange"];
document.getElementById("demo").innerHTML = fruits;

function myFunction(){
    fruits.push("Lemon");
    document.getElementById("demo").innerHTML = fruits;
}

let x = "";
const myobj= {
    name: "Honey", 
    age:31,
    cars:[
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW",models:["500", "x3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
    ]   
}
for(let i in myobj.cars){
    x += "<h2>" + myobj.cars[i].name + "</h2>";
    for(let j in myobj.cars[i].models){
        x += myobj.cars[i].models[j] + "<br>";
    }
}