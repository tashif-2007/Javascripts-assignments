"use strict";

const year = Number(prompt("Enter a year:"));
const target = document.getElementById("target");

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    target.textContent = `${year} is a leap year.`;
} else {
    target.textContent = `${year} is not a leap year.`;
}