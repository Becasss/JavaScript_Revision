const d = new Date("2014-11-01T00:00:00");
document.write(d.toString());



/// JavaScript Date.parse()

const msec = Date.parse("2014-11-01T00:00:00");
document.write("<br>" + msec);



// The new Date() Constructor
// In javascript, date objects are created with new Date().

// Get the current date
const i = new Date();
document.write("<br>" + i);


// The getFullYear() Method:

const a = new Date("2014-11-01T00:00:00");
document.write("<br>" + a.getFullYear());

// The getMonth() Method:
document.write("<br>" + a.getMonth());



// The getMonth() Method:
const months = ["Jan", "Feb", "Mar", "Apr", "May", "March"];

const w = new Date("2021-03-25");
let month = months[w.getMonth()];
document.write("<br>" + month);

// The getDay() Method:
document.write("<br>" + w.getDay());


// The getHours() Method:
document.write("<br>" + a.getHours());

// The getMinutes() Method: