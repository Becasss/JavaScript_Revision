// The For In loop

/**     
 //syntax:
  for(key in object){
        // Code block to be executed
 }
 */

// For In Over Object:
 const person = {fname: 'John',
    lname: 'Doe',
    age: 30
 }

 let text = "";
 for(let x in person) {
    text += person[x] + "\n";
 }
 console.log(text);


 // For In Over Array:

 const numbers = ["45", "4 ", "67", " 20", "100"];

 let txt = "";
 for(let x in numbers) {
   txt += numbers[x] + "\n";
 }
 console.log(txt);