/*****
 * Array methods lesson series - 4
 * 
 * ---map---
 * 
 * The map() method creates a new array with the results of calling a function for every array element.
 * The map() method calls the provided function once for each element in an array, in order.
 * 
 * Return Value:	An Array containing the results of calling the provided function for each element in the original array.
 * JavaScript Version:	ECMAScript 5
 * Note: the function is not executed for array elements without values.
 * Note: this method does not change the original array.
 * 
 * syntax - array.map(function(currentValue, index, arr), thisValue)
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

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const modifiedCompaniesArray = companies.map((comapny) => `${comapny.name}  |   ${comapny.start} - ${comapny.end}`);
console.log(modifiedCompaniesArray);