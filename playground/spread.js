// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// let toAdd = [2, 3, 1];
//
// console.log(add(...toAdd));
//
// let groupA = ['Fred', 'Jim'];
// let groupB = ['Kyle', 'Nat', 'John'];
//
// let final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
  console.log(`Hi ${name}! You are ${age} years old!`);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Kyle', ...names];

final.forEach((name) => { console.log("Hi", name); });
