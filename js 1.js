// --- JAVASCRIPT VARIABLES ---
var x=5;
let x=5; // Note: let and const have block scope and cannot be redeclared in the same scope
const x=5;

// --- JAVASCRIPT OUTPUTS ---

// 1. Output to Console 
console.log('Welcome');
console.log("Welcome");

// 2. Output to Alert Box
window.alert("Welcome");

// 3. Changing HTML Elements using the DOM
// innerHTML changes the element including HTML tags
document.getElementById("myp").innerHTML = "<h1> Welcome </h1>";

// innerText changes only the plain text
document.getElementById("myp").innerText = "Welcome";

// 4. Writing directly to the document
// Note: This method should only be used for testing.
document.write("Hello World");