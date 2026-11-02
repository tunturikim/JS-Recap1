'use strict';

// Trinangle identifier

const sideA = parseFloat(prompt('Enter the length of side A:'));
const sideB = parseFloat(prompt('Enter the length of side B:'));
const sideC = parseFloat(prompt('Enter the length of side C:'));

const result = document.querySelector('#result');

if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
  if (sideA === sideB && sideB === sideC) {
    result.textContent = 'The triangle is equilateral.';
  } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    result.textContent = 'The triangle is isosceles.';
  } else {
    result.textContent = 'The triangle is scalene.';
  }
} else {
  result.textContent = 'Please enter valid numbers for all sides.';
}
