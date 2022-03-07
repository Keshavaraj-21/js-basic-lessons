/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable semi */
// ## Number
// only **one** type of number in javascript whether it has decimal point or not

const age = 100;
const money = 1000.50;
console.log(typeof age); // number
console.log(typeof money); // number
// typeof is used to find type of variable.
console.log('10' - '3');

// the above works with mutiplication,division and sub
// but not with add(+)
// because + is used for concatenation also..

// math helper methods:
console.log(Math.round(2.5));
console.log(Math.floor(5.3));
console.log(Math.ceil(2.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets / kids);
console.log(eachKidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

const x = 2 ** 3;
console.log(x);
// eslint-disable-next-line no-undef
x1 = Math.pow(3, 2);
// eslint-disable-next-line no-undef
console.log(x1);

console.log(0.1 + 0.2);
// let costOfProduct = 100.95;
const costOfProduct = 10095; // in paise

console.log(typeof Infinity);
console.log(typeof -Infinity);

const result = 10 / 'hello';
console.log(result);
console.log(typeof NaN);

// check the datatype of a value
let X = 100;
let result1 = Number.isInteger(X);
console.log(`Is x a number: ${result1}`);

let y = 'abcd';
result1 = Number.isInteger(y);
console.log(`Is y a number: ${result1}`);
result1 = (typeof y === 'string');
console.log(`Is y a string: ${result1}`);
let flag = true;
result1 = (typeof flag === 'boolean');
console.log(`Is flag a boolean: ${result1}`);
let nos = [1, 2, 3, 4, 5];
result1 = (typeof nos === 'object');
console.log(`Is nos a object: ${result1}`);
