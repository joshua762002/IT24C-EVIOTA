// Variable declarations with data types
let a = 1;
let b = 5;

let name = "pie";
let char = 'a';

// Arithmetic operations
let subtraction = a - b;
console.log('Subtraction:', subtraction);

let addition = a + b;
console.log('Addition:', addition);

let multiplication = a * b;
console.log('Multiplication:', multiplication);

// Handling division by zero
if (b !== 0) {
    let division = a / b;
    console.log('Division:', division);
} else {
    console.log("Error: Division by zero is not allowed.");
}

// Conditional statements
let age = 10;
let ageStatus = age >= 18 ? "Adult" : "Minor";
console.log(ageStatus);

// Switch statement
let nana = 'B';

switch (nana) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    case 'D':
        console.log('D');
        break;
    default:
        console.log('Default');
}

// For loop example
for (let i = 0; i < 15; i++) {
    console.log('For Loop:', i);
}

// While loop example
let j = 0;
while (j < 15) {
    console.log('While Loop:', j);
    j++;
}

// Function to check if a number is odd or even
function checkOddEven(num) {
    return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
}

console.log(checkOddEven(2));
console.log(checkOddEven(17));