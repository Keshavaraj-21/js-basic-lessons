/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
// 3 ways to create a string;
//  1.using single quotes
//  2.using double quotes
//  3.using back ticks

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line camelcase
const my_name = 'Mahendra'; // single
const middle = 'Singh'; // double
const last = 'Dhoni'; // back tick

console.log(my_name);
console.log(middle);
console.log(last);

const sentence1 = 'she\'s so cool';
console.log(sentence1);

const sentence2 = "she's so cool";
console.log(sentence2);

const sentence3 = 'she\'s so cool\'';
console.log(sentence3);

const sentence4 = "she's so \"cool\"";
console.log(sentence4);

// multi line string using single quotes doesn't works
// const song1 = ' I like
//         ARR songs and
//         Aniruth songs';
const song1 = ` I like
        ARR songs and 
        Aniruth songs`;
console.log(song1);
// const hello3 = 'hello my name is ' + my_name + ". Nice to meet you";
// console.log(hello3);
const hello3 = `hello my name is ${my_name}. Nice to meet you`;
console.log(hello3);

const html = `<div>
                <h2>${middle}</h2>
                <p>${hello3}<p>
                </div>
                `;
console.log(html);
// document.body.innerHTML = html;

const isDrawing = false;
const age = 18;
const ofAge = age > 19;
console.log(ofAge);

// `=` sign: used for assignment/ updation of values
// `===` checks both type and value.
console.log(age === 18);

const s1 = '18';
// eslint-disable-next-line eqeqeq
console.log(s1 == 18);
