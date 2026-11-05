"use strict";

const target = document.getElementById("target");

if (confirm("Should I calculate the square root?")) {
    const number = Number(prompt("Enter a number:"));

    if (number < 0) {
        target.textContent = "The square root of a negative number is not defined";
    } else {
        target.textContent = Math.sqrt(number);
    }
} else {
    target.textContent = "The square root is not calculated.";
}