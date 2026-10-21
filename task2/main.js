'use strict';

// Distance between two points

const aPointX = parseFloat(prompt('Enter the x-coordinate of point A:'));
const aPointY = parseFloat(prompt('Enter the y-coordinate of point A:'));
const bPointX = parseFloat(prompt('Enter the x-coordinate of point B:'));
const bPointY = parseFloat(prompt('Enter the y-coordinate of point B:'));

const distance = Math.sqrt(
  Math.pow(bPointX - aPointX, 2) + Math.pow(bPointY - aPointY, 2)
);
const result = document.querySelector('#result');

if (!isNaN(aPointX) && !isNaN(aPointY) && !isNaN(bPointX) && !isNaN(bPointY)) {
  result.textContent = `Distance between points A and B: ${distance.toFixed(2)}`;
} else {
  result.textContent = 'Please enter valid numbers for all coordinates.';
}
