var age = 20;
if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}
var a = 5;
var b = 3;
console.log("Is a greater than b? ".concat(a > b));
var isStudent = true;
if (isStudent) {
    console.log("Welcome, student!");
}
else {
    console.log("Access restricted.");
}
var num = 7;
if (num % 2 === 0) {
    console.log("".concat(num, " is even"));
}
else {
    console.log("".concat(num, " is odd"));
}
var firstName = "Maryam";
console.log("Hello, ".concat(firstName, "! How are you today?"));
var x = 10;
var y = 20;
var z = 15;
if (x > y && x > z) {
    console.log("".concat(x, " is the largest number"));
}
else if (y > x && y > z) {
    console.log("".concat(y, " is the largest number"));
}
else {
    console.log("".concat(z, " is the largest number"));
}
var greeting = "Good morning";
var name1 = "Ali";
console.log("".concat(greeting, ", ").concat(name1, "!"));
var isRaining = false;
console.log(isRaining ? "Take an umbrella!" : "Enjoy the sun!");
var n1 = 8;
var n2 = 4;
console.log("Addition: ".concat(n1, " + ").concat(n2, " = ").concat(n1 + n2));
console.log("Subtraction: ".concat(n1, " - ").concat(n2, " = ").concat(n1 - n2));
console.log("Multiplication: ".concat(n1, " * ").concat(n2, " = ").concat(n1 * n2));
console.log("Division: ".concat(n1, " / ").concat(n2, " = ").concat(n1 / n2));
var marks = 85;
if (marks >= 90) {
    console.log("Your grade is A");
}
else if (marks >= 80) {
    console.log("Your grade is B");
}
else if (marks >= 70) {
    console.log("Your grade is C");
}
else if (marks >= 60) {
    console.log("Your grade is D");
}
else {
    console.log("Your grade is F");
}
