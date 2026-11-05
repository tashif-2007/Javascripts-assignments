"use strict";

const number = Number(prompt("Enter an integer:"));
const target = document.getElementById("target");
let isPrime = Number.isInteger(number) && number > 1;

for (let divisor = 2; divisor * divisor <= number; divisor++) {
    if (number % divisor === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    target.textContent = `${number} is a prime number.`;
} else {
    target.textContent = `${number} is not a prime number.`;
}