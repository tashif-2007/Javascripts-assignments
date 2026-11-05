"use strict";

const diceCount = Number(prompt("How many dice?"));
const targetSum = Number(prompt("What sum are you looking for?"));
const trials = 10000;
let matches = 0;

for (let trial = 0; trial < trials; trial++) {
    let sum = 0;

    for (let die = 0; die < diceCount; die++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    if (sum === targetSum) {
        matches++;
    }
}

const probability = (matches / trials) * 100;

document.getElementById("target").textContent =
    `Probability to get sum ${targetSum} with ${diceCount} dice is ${probability.toFixed(2)}%`;