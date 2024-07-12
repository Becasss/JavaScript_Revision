// Javacript String Concatenation:

let text1 = "My name is Bikash Yamphu Rai";
let text2 = "I am a software engineer";

let combinedText = text1 + " and " + text2;
console.log(combinedText);

let text = text1.concat(" and ", text2);
console.log(text);




// Javacript String trim():

let trimmedText = "     Hello world         ";
console.log(trimmedText.trimStart());   // trimStart() Method:

console.log(trimmedText.trimEnd()); // trimEnd() Method

console.log(trimmedText.trim());  // trim() Method



// Javascript string padding:

let paddedText = "Hello";
console.log(paddedText.padStart(10, " "));  // padStart() Method:

console.log(paddedText.padEnd(15, " "));  // padEnd() Method



// Javascript String Repeat():

let repeatedText = "Hello";
console.log(repeatedText.repeat(3));  // repeat() Method:




// Replacing String Content:

let replacedText = "Hello I am Bikash Yamphu Rai and I live in Kathamndu and bikash is my first name and yamphu rai is my last name.";
console.log(replacedText.replace('Bikash', 'Sirjana'));

console.log(replacedText.replace(/Bikash/, "Dhan Bahadur")); // regular expression with an "/i" flag (insensitive).

console.log(replacedText.replace(/Bikash/ig, "Shirjana"));  // with a "/g" flag (global match)


// Javascript String split():

let splitText = "Hello, my name is Bikash Yamphu Rai";
const myArray = splitText.split(" ");
text = " ";
for (let i = 0; i < myArray.length; i++) {
    text += myArray[i] + "\n"; 
}
console.log(text);




// Javascript String Search

let searchText = "Hello I am Bikash Yamphu Rai and I live in Kathmandu.";
console.log(searchText.indexOf("Bikash"));  // indexOf() Search Method:


console.log(searchText.lastIndexOf());  // lastIndexof() Search Method:


console.log(searchText.includes("Bikash"));  // includes() Search Method:

console.log(searchText.startsWith("Hello"));    //  startWith() Method:

console.log(searchText.endsWith('Kathmandu'));  // endsWith() Method:



