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
 * -> Objects 
 * -> Dot vs. Bracket Notation
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


////////////////////////////////////////////////////////////////
// Object Methods

const jonas = {
    firstName: 'Nainik',
    lastName: 'Mehta',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

////////////////////////////////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
 
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
 
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 
GOOD LUCK 😀
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
