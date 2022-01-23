/**
 * This file is part of [JAVASCRIPT_LEARNING]
 *
 * (c) 2022 [Nainik Mehta] 
 * <[https://www.linkedin.com/in/nainik-mehta-25nk12]>
 * <[https://github.com/Nainik2509/JavaScript_Learning]>
 *
 * --------------------------------------------------
 *
 * @module JavaScript - Strings and Template Literals
 * @author [Nainik Mehta] <[nainikmehta1999@gmail.com]>
 * @version 1.0.0
 *
 * 
 * ->  Template Literals : ` `
 *  
 * --------------------------------------------------
 */


// Strings and Template Literals
const firstName = 'Nainik';
const job = 'teacher';
const birthYear = 1998;
const year = 2022;

const nainik = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(nainik);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);