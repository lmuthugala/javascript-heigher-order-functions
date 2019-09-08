/*****
 * Array methods lesson series - 1
 * 
 * ---reducers---
 * 
 * The reduce() method reduces the array to a single value.
 * The reduce() method executes a provided function for each value of the array (from left-to-right).
 * The return value of the function is stored in an accumulator (result/total). 
 * 
 * 
 * Return Value:	Returns the accumulated result from the last call of the callback function
 * JavaScript Version:	ECMAScript 5
 * 
 */

const numbers = [1,2,3,-4,10];

//a=0, c=1 => a=1
//a=1, c=2 => a=3
//a=3, c=3 => a=6
//a=6, c=-4 => a=2
//a=2, c=10 => a=12
const sum1 = numbers.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
console.log(sum1)

//a=1, c=2 => a=3
//a=3, c=3 => a=6
//a=6, c=-4 => a=2
//a=2, c=10 => a=12
const sum2 = numbers.reduce((accumulator,currentValue)=> accumulator+currentValue);
console.log(sum2)