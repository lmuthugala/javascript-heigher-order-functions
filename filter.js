/*****
 * Array methods lesson series - 3
 * 
 * ---filter---
 * 
 * The filter() method creates an array filled with all array elements that pass a test (provided as a function).
 * 
 * 
 * Return Value:	An Array containing all the array elements that pass the test. If no elements pass the test it returns an empty array.
 * JavaScript Version:	ECMAScript 5
 * 
 * Note: the function is not executed for array elements without values.
 * Note: filter() does not change the original array.
 * 
 * syntax - array.filter((currentValue, index, arr)=>{}, thisValue)
 * 
 * Parameter: (currentValue, index, arr) => {}
 *      Argument Description
 *          currentValue -	Required. The value of the current element
 *          index - Optional. The array index of the current element
 *          arr - Optional. The array object the current element belongs to - (entire array)
 * 
 * Parameter: thisValue
 *          Optional. A value to be passed to the function to be used as its "this" value.
 *          If this parameter is empty, the value "undefined" will be passed as its "this" value
 */

// lets assume we got array of ages and we want to filter people who can drink (ages array that are 21 or over)

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//traditional way using for loop
let canDrink = [];
for(let i=0; i < ages.length; i++){
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

//filter method
const canDrink2 = ages.filter(age => age >= 21);
console.log(canDrink2);