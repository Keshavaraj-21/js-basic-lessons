/* eslint-disable no-const-assign */
// Java script object also inherits the properties of another object, known as its "prototype."
// the method of an object are typically inherited properties,and this "protypal inheritance" is a key feature of java script

// dynamic properties can usually be added, and deleted in js
// onjects.
// any value in js that is not a string a number true false null or undefined as aobjecta.
//
// property
// a property has a name and a value
// a property name may be any string including the empty string, but no object may have two properties with same name.
// but no object may have 2 properties with the same name.

// every js obj has 2nd js obj associated with it
// this 2nd obj is known as "prototype"
// the obj created by "new Object()" inherits from the "Object.prototype".
// THe obj created by "{}" also inherits from "Object.prototype".

// the obj created by "new Array()" uses "Array.prototype".
// the obj created by "new Date()" uses "Date.prototype".

function getChild (parent) {
  if (parent == null) throw TypeError()
  return Object.create(parent)
}
const o4 = { x: "Don't change this value" }
const p = getChild(o4)
console.log(o4.x)
const p = Object.create(o4)
console.log(p)
o4 = null
p = getChild(o4)
p = Object.create(o4) // Object.create(null)
console.log(p)

Object.prototype = 0 // zero
console.log(Object)
// the prototype properties of built-in are read-only.
// Object.prototype unchanged
// const o5 = {}
// console.log(o5)
// o5.x = 100
// // console.log(o5)
// p = getChild(o5)
// // console.log(p)
// p.y = 200
// const q = getChild(p)
// q.z = 300
// // console.log(q)
// console.log('q.x + q.y + q.z' + (q.x + q.y + q.z))
// console.log('p.x + p.y ' + (p.x + p.y))
// console.log('o5.x + 05.y ' + (o5.x + o5.y))
// console.log('o5.x' + o5.x)
