'use strict';

const number = Number(prompt('Enter a positive integer: '));
const result = document.getElementById('result');

if (Number.isInteger(number) && number > 0) {
  for (let row = 1; row <= number; row++) {
    const tableRow = document.createElement('tr');
    tableRow.style.textAlign = 'center';

    for (let column = 1; column <= number; column++) {
      const tableCell = document.createElement('td');
      tableCell.textContent = row * column;
      tableCell.style.border = '1px solid black';
      tableCell.style.padding = '10px';
      tableRow.appendChild(tableCell);
    }
    result.appendChild(tableRow);
  }
} else {
  alert('Please enter a valid positive integer.');
}
