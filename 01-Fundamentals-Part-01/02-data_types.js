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
 * --------------------------------------------------
 */

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