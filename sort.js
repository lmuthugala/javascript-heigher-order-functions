/*****
 * Array methods lesson series - 5 (last one of this series)
 * 
 * ---sort---
 * 
 * The sort() method sorts an array alphabetically:
 * there is also a reverse() method reverses the elements in an array.
 * 
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

//********************assending order********************// 
const sortedCompanies = companies.sort((a,b)=>(a.start > b.start ? 1 : 0));
console.log(sortedCompanies);

//lets assume we want only one value of the sorted array(not a objecta array);

const sortedCompanies2 = companies.sort((a,b)=>(a.start > b.start ? 1 : 0)).map(company => `${company.name} | ${company.start} - ${company.end}`);
console.log(sortedCompanies2);




//***************descending order***********************// 
const sortedCompanies3 = companies.sort((a,b)=>(a.start > b.start ? 0 : 1));
console.log(sortedCompanies3);

//lets assume we want only one value of the sorted array(not a objecta array);

const sortedCompanies4 = companies.sort((a,b)=>(a.start > b.start ? 0 : 1)).map(company => `${company.name} | ${company.start} - ${company.end}`);
console.log(sortedCompanies4);