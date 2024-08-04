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