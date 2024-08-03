// Current date and time
const d = new Date();
document.write(d);

const f = new Date("2023-12-09");
document.write("<br>" + f);


// Creating Date Objects

/** 
 new Date()
 new Date(date string)
new Date(year, month)
new Date(year, month, day)
new Date(year, month,day, hours)
new Date(year, month, day, hours, minutes)
new Date(year, month, day, hours, minutes, seconds)
new Date(year, month, day, hours, minutes, seconds, milliseconds)


new Date(milliseconds)
*/

const g = new Date("octomber 12, 2014 11:12:00");
document.write("<br>" + g);


const h = new Date(2018, 11, 12, 10, 22, 20, 0);
document.write("<br>" + h);

// new Date (milliseconds)
const i = new Date(1647235120000);
document.write("<br>" + i);
document.write("<br>" + i.toString());