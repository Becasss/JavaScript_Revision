// The new Set() Method - to creat a set

const letters = new Set([1, 2, 3, 4, 5]);

// Display set.size

console.log(`The set has ${letters.size} keys.`);


// Create a set and add values:

const numbers = new Set();

/// Add values to the set
numbers.add("1");
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);

// Display the set


console.log(numbers);
console.log(numbers.size);





// Create a set an add variables:

const animals = new Set();

// Create Variables

const a = "a";
const b = "b";
const c = "c";


// Add values as variables to the set
animals.add(a);
animals.add(b);
animals.add(c);


// Display the size
console.log(`The size of animals is ${animals.size}.`);





// Listing the Elements

const letter = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
for (const x of letter){
    text += x + "\n";
}

console.log(text);
console.log(typeof letter);




// The has() Method:
const lettr = new Set(["a", "b", "c"]);
answer = lettr.has("d");
console.log(`The answer is ${answer}`);




// forEach() Method:

let txt2 = "";
lettr.forEach (function(value){
    txt2 += value + "\n";
})
console.log(txt2);




// The Values() Method:

const letterss = new Set(["a", "b", "c"]);



// list all Elements
let text3 = "";
for (const x of letterss.values()) {
    text3 += x + "\n";
}

console.log(text3);



// The Keys() Method:

let text4 = "";
for (const x of letterss.keys()) {
    text4 += x + "\n";
}

console.log(text4);