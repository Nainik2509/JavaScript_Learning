/**
 * This file is part of [JAVASCRIPT_LEARNING]
 *
 * (c) 2022 [Nainik Mehta] 
 * <[https://www.linkedin.com/in/nainik-mehta-25nk12]>
 * <[https://github.com/Nainik2509/JavaScript_Learning]>
 *
 * --------------------------------------------------
 *
 * @module JavaScript - Data Types
 * @author [Nainik Mehta] <[nainikmehta1999@gmail.com]>
 * @version 1.0.0
 *
 * 
 * -> Primitive Data Types : 
 * * * -> Number            - Floating point numbers => Used for decimals & integers
 * * * -> String            - Sequence of characters => Used for text 
 * * * -> Boolean           - Logical type that can only be true or false => Used for taking decisions
 * * * -> Undefined         - Value taken by a variable that is not yet defined => (‘empty value’)
 * * * -> Null              - Also means (‘empty value’)
 * * * -> Symbol (ES2015)   - Value that is unique and cannot be changed [Not useful for now]
 * * * -> BigInt (ES2020)   - Larger integers than the Number type can hold
 * 
 * -> Javascript has dynamic typing :: We do not have to manually define the data type of the value stored in a variable. 
 *    Instead data types are determined automatically.
 * 
 * -> let                   - To declare variable that can be changed later. (Functional Scope) 
 * -> const                 - To declare variable that can't be re-assign. Initial value is required. (Block Scope)
 * -> var                   - Should be avoided. 
 * 
 * -> Type Conversion and Coercion
 * 
 * --------------------------------------------------
 */

////////////////////////////////////////////////////////////////
// Boolean
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////////////////////////////////

// let, const and var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);