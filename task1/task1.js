'use strict';

// Temperature Converter

const celsius = parseFloat(prompt('Enter temperature in Celsius:'));
const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;
const result = document.querySelector('#result');

if (!isNaN(celsius)) {
  result.textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}, Kelvin: ${kelvin.toFixed(2)}`;
} else {
  result.textContent = 'Please enter a valid number.';
}
