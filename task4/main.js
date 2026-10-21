'use strict';

// Score Calculator for Course assessment

const score = parseInt(prompt('Enter your score (0-100):'));
const result = document.querySelector('#result');

if (!isNaN(score) && score >= 0 && score <= 100) {
  let grade;

  if (score < 40) {
    grade = 0;
  } else if (score < 52) {
    grade = 1;
  } else if (score < 64) {
    grade = 2;
  } else if (score < 76) {
    grade = 3;
  } else if (score < 88) {
    grade = 4;
  } else {
    grade = 5;
  }

  result.textContent = `Your grade is ${grade}.`;
} else {
  result.textContent = 'Please enter a valid score between 0 and 100.';
}
