let age: number = 20;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

let a: number = 5;
let b: number = 3;
console.log(`Is a greater than b? ${a > b}`);

let isStudent: boolean = true;
if (isStudent) {
  console.log("Welcome, student!");
} else {
  console.log("Access restricted.");
}

let num: number = 7;
if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

let firstName: string = "Maryam";
console.log(`Hello, ${firstName}! How are you today?`);

let x: number = 10;
let y: number = 20;
let z: number = 15;
if (x > y && x > z) {
  console.log(`${x} is the largest number`);
} else if (y > x && y > z) {
  console.log(`${y} is the largest number`);
} else {
  console.log(`${z} is the largest number`);
}

let greeting: string = "Good morning";
let name1: string = "Ali";
console.log(`${greeting}, ${name1}!`);

let isRaining: boolean = false;
console.log(isRaining ? "Take an umbrella!" : "Enjoy the sun!");

let n1: number = 8;
let n2: number = 4;
console.log(`Addition: ${n1} + ${n2} = ${n1 + n2}`);
console.log(`Subtraction: ${n1} - ${n2} = ${n1 - n2}`);
console.log(`Multiplication: ${n1} * ${n2} = ${n1 * n2}`);
console.log(`Division: ${n1} / ${n2} = ${n1 / n2}`);

let marks: number = 85;
if (marks >= 90) {
  console.log(`Your grade is A`);
} else if (marks >= 80) {
  console.log(`Your grade is B`);
} else if (marks >= 70) {
  console.log(`Your grade is C`);
} else if (marks >= 60) {
  console.log(`Your grade is D`);
} else {
  console.log(`Your grade is F`);
}
