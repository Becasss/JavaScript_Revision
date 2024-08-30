// DOM Methods are actions that you can perform on HTML elements
// DOM properties are values (of HTML Elements ) that you can set or change


document.getElementById("demo").innerHTML = "Hello, world!";


// innerHTML property can be used to get or change any HTML element, including <html> and <body>.



// The HTML DOM Document Object


// Finding HTML Elements
/*
document.getElementById(id)                      - Find an element by element id
document.getElementsByTagName(name)              - Find elements by tag name
document.getElementsByClassName(name)            - Find elements by class name
*/


// Changing HTML Elements
/*
element.innerHTML = new html content        -  Change the inner HTML of an element 
element.attribute = new value                - change the attributes value of an HTML element
element.style.property = new style          - change the style of an HTMl element
element.setAttribute(attribute,value)       - change the attribute value of an HTML element
*/


// Adding and Deleting HTML elements
/* 
document.createElement(element)             -  Create an HTMl element
document.removeChild(element)               -  Remove an HTML element
document.appendChild(element)               -  Add an HTMl element
document.replaceChild(new,old)              -  Replace an HTML element
document.write(text)                        -  Write into the HTML output stream
*/



// Adding Events Handlers
/*
document.getElementById(id).onclick = function(){code}          - Adding event handler code to an onclick event 
 */



// Finding HTML Objects
/*  
document.anchors            - Returns all <a> elements that have a name attribute
document.applets            - Deprecated
document.baseURI            - Returns the absoulute base URI of the document
document.body               - Returns the <body> elementt
document.cookie             - Returns the document's cookie
document.doctype            - Returns the document's doctype
document.documentElementt   - Returns <html> element
document.documentMode       - Returns the mode used by the browser
document.documentUri        - Returns the URI of the document
document.domain             - Returns the domain name of the document server
document.domConfig          - Obsolet
document.embeds             - Returns all <embed> elements
documents.forms             - Returns all <forms> elements
document.head               - Returns the <head> element
document.images             - Returns all <img> elements
document.inputEncoding      . Returns the document's encoding (character set)
