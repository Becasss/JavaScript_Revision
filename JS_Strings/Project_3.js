// Backticks styntax: use  (`) rather than quotes (')


// Interpolation: syntax: ${...}


// HTML Template:

let header = "Template Strings";

let tags = ["Template", "JavaScript", "ES6"];

let html = `<h2> ${header}</h2> <ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo").innerHTML = html;
console.log(html);