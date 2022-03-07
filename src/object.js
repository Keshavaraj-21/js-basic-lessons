/* eslint-disable semi */
// objects in javascript

const person = {
  first: 'Keshav',
  last: 'Raj',
  age: 21
};
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = 'Tom';
person.last = 'Jerry';
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);

// eslint-disable-next-line no-unused-vars
const empty = {};
const point = { x: 10, y: 50 };
console.log(point.x);
console.log(point.y);

const point2 = { x: point.x, y: point.y + 1 };
console.log(point2.x);
console.log(point2.y);

const book = {
  'main title': 'Java script', // propertynames includes spaces.
  'sub-title': 'Guide to Javascript for beginners',
  for: 'students', // reserved key words
  author: {
    first: 'Keshav',
    last: 'Raj'
  }
};
console.log(book['main title']);
console.log(book['sub-title']);
console.log(book.for);
console.log(book.author.first);
console.log(book.author.last);
// console.log(book.sub - title);
console.log(book.for);
