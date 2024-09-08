// Variable declarations with data types
let a = 1;
let b = 5;

let name = "boylubog";
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
let age = 17;
let ageStatus = age >= 18 ? "Adult" : "Minor";
console.log(ageStatus);

// Switch statement
let buangna = 'B';

switch (buangna) {
    case 'A':
        console.log('Action A');
        break;
    case 'B':
        console.log('Action B');
        break;
    case 'C':
        console.log('Action C');
        break;
    case 'D':
        console.log('Action D');
        break;
    default:
        console.log('Default Action');
}

// For loop example
for (let i = 0; i < 10; i++) {
    console.log('For Loop:', i);
}

// While loop example
let j = 0;
while (j < 10) {
    console.log('While Loop:', j);
    j++;
}

// Function to check if a number is odd or even
function checkOddEven(num) {
    return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
}

console.log(checkOddEven(6));
console.log(checkOddEven(7));
