"use strict";

const rollCount = Number(prompt("How many dice rolls?"));
let sum = 0;

for (let i = 0; i < rollCount; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
}

document.getElementById("target").textContent = `Sum: ${sum}`;