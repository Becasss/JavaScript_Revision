// The if statement: 
let daytime = new Date().getHours();
if(daytime < 18){
   console.log( "Good Day!");
}


// The else statement:

const hour = new Date().getHours();
let greeting;

if(hour < 12){
    greeting = "Good Morning!";
}
else{
    greeting = "Good Evening!";
}

console.log(greeting);


// The else if statement:

const time = new Date().getHours();

let greting;

if(time < 10){
    greting = "Good Morning!";
}
else if(time < 20){
    greting = "Good daytime";
}
else{
    greting = "Good Evening!";
}

console.log(greting);