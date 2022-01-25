/**
 * This file is part of [JAVASCRIPT_LEARNING]
 *
 * (c) 2022 [Nainik Mehta]
 * <[https://www.linkedin.com/in/nainik-mehta-25nk12]>
 * <[https://github.com/Nainik2509/JavaScript_Learning]>
 *
 * --------------------------------------------------
 *
 * @module JavaScript - Objects
 * @author [Nainik Mehta] <[nainikmehta1999@gmail.com]>
 * @version 1.0.0
 *
 *
 * -> Objects :
 *
 * --------------------------------------------------
 */

////////////////////////////////////////////////////////////////
// Introduction to Objects
const jonasArray = [
    'Nainik',
    'Mehta',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Nainik',
    lastName: 'Mehta',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};


////////////////////////////////////////////////////////////////
// Dot vs. Bracket Notation
const nainik = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(nainik);

console.log(nainik.lastName);
console.log(nainik['lastName']);

const nameKey = 'Name';
console.log(nainik['first' + nameKey]);
console.log(nainik['last' + nameKey]);

// console.log(nainik.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (nainik[interestedIn]) {
    console.log(nainik[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

nainik.location = 'Portugal';
nainik['twitter'] = '@jonasschmedtman';
console.log(nainik);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${nainik.firstName} has ${nainik.friends.length} friends, and his best friend is called ${nainik.friends[0]}`);

