import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log('Add: ', add(8, 3));  // Test your add function
console.log('Subtract: ', subtract(5, 3));
console.log('Uppercase: ', toUpperCase('hello'));
console.log('Lowercase: ', toLowerCase('HELLO'));  
console.log('Multiply: ', multiply(4, 5));
console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed: ', reverseArray([1, 2, 3]));

addAndLogUpper(5, 3);

const numbers = [15, 24, 54, 2, 6, 2];

const maxNumber = findMax(numbers);
console.log('Max number:', maxNumber);

const multiplidResult = multiply(maxNumber, 4);
console.log(' Multiplied result:', multiplidResult);

const uppercasedResult = toUpperCase(multiplidResult.toString());
console.log('Uppercased result:', uppercasedResult);


