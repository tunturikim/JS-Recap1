'use strict';

// Natural number iterator

const number = parseInt(prompt('Enter a natural number: '));
const result = document.getElementById('result');

if (!isNaN(number) && number > 0) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  result.textContent = `The sum of natural numbers from 1 to ${number} is: ${sum}`;
} else {
  result.textContent = 'Please enter a positive integer.';
}
