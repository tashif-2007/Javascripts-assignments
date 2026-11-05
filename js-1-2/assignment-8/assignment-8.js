"use strict";

const startYear = Number(prompt("Enter the start year:"));
const endYear = Number(prompt("Enter the end year:"));
const list = document.getElementById("target");

for (let year = startYear; year <= endYear; year++) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        const item = document.createElement("li");
        item.textContent = year;
        list.appendChild(item);
    }
}