let day;
switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesdays";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    default: 
        day = "Saturday";
        break;
}

console.log(day);

let text;
switch(new Date().getDay()) {
    case 4:
    case 5:
        text = "It's a weekend!";
        break;
    case 0:
    case 6:
        text = "Soon It is weekend!";
      break;
    default:
        text = "Looking forward to the weekend!";
}

console.log(text);