"use strict";

const first = Number(prompt("Enter the first integer:"));
const second = Number(prompt("Enter the second integer:"));
const third = Number(prompt("Enter the third integer:"));

const sum = first+second+third;
const product = first*second*third;
const average = sum/3;

document.getElementById("target").innerHTML = `Sum:${sum}<br>Product:${product}<br>Average:${average}`;