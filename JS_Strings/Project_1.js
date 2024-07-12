// Strings are for storings text.

// strings length
let str = "Hello, world!";
console.log(str.length); // Output: 13


// Escape Characters:

let escape = "Heoolo \"Bikash Yamphu Rai\" is going \\ in the \b beah to play football."
console.log(escape);



// JavaScript string as an Object:
let boyName = new String("Bikash Yamphu Rai");
console.log(typeof (boyName)); // Output : Object



// Javascript String Methods:
let text = "I am Bikash Yamphu Rai and I am very hardworking and ambitious person.";
console.log(text.length); // Output :70

let char = text.charAt(0); // at(position) method:
console.log(char);      // Output :I


let cA = text.charAt(6);    // charAt(position) method:
console.log(cA);    // Output: i


let cCA = text.charCodeAt(7); // charCodeAt(position) method:
console.log(cCA); // Output: 107


let p = text[9];    // Property Acess[position] method:
console.log(p); // Output: s

// #Note: In strings first-index is starts with 0



// Extracting Strings Parts:

let part = text.slice(3, 10);   // Slice(start,end) method:
console.log(part); // Output: m Bikash


let part2 = text.substring(5, 10); // Substring(start,end) method:
console.log(part2); // Output: Bikas


let part3 = text.substr(1, 15); // Substr(start, length) Method:
console.log(part3); // Output: am Bikash Yamp





// Converrting To UpperCase and Lower Case:

let upper = text.toUpperCase(); // toUpperCase() Method:
console.log(upper); // Output: I AM BIKASH YAMPHU RAI AND I AM VERY HARDWORKING AND AMBITIOUS PERSON.


let lower = text.toLowerCase(); // toLowerCase() Method:
console.log(lower); // Output: i am bikash yamphu rai and i am very hardworking and ambitious person.