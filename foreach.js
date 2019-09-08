/*****
 * Array methods lesson series - 2
 * 
 * ---foreach---
 * 
 * The forEach() method calls a function once for each element in an array, in order.
 * 
 * 
 * Return Value:	undefined
 * JavaScript Version:	ECMAScript 5
 * Note: the function is not executed for array elements without values.
 * 
 * syntax - array.forEach((currentValue, index, arr)=>{}, thisValue)
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

// basic for loop
// array.length is always 1 or heigher than 1
for(let i=0; i < companies.length; i++) {
    console.log(i,companies[i]);
}
console.log("\n\n\n");
//foreach loop - printing the whole array
companies.forEach((company, index)=>console.log(index,company));

//foreach loop - printing one value from the array
companies.forEach((company, index)=>console.log(index,company.name));


