// The new Map() Method  - to creae a Map:

// Create a Map

const fruits = new Map([['apples', 500],
    ["Oranges", 300],
    ["Bananas", 200]
]);

// Display the Map
let numb = fruits.get("apples");
console.log(numb); // Output: 500



// The Set() Method - to creae a Set:

const Products = new Map();

// Set Map Values
Products.set("apples",500);
Products.set("Oranges",300);
Products.set("Bananas",200);

let nmb = Products.get("Bananas");
console.log(nmb); // Output: 200


// The get() Method - gets  the value of a key in a Map

console.log(Products.get("Oranges")); // <Output:300></Output:300>