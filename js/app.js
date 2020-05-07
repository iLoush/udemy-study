'use strict';

// variable declaration
/*
var leftBorderWidth = 1; // 
let second = 2; // 
const pi = 3.14; // variable which is not changeable 
*/

// data types:
/*
let number = 5;
let string = "string";
let sym = Symbol();
let boolean = true;
null;
undefined;
let obj = {};
NaN;
Infinity;

console.log(4 / 0); // --> infinity
console.log('srting' * 9); // --> NaN
// console.log(something); // --> null чего-то в коде не существует, ссылка на не существующую вещь
let something;
console.log(something); // --> underfined, переменная есть но значение не присвоенно

// object
let person = {
   name: "Irina",
   age: 30,
   isMarried: true
};
console.log(person.name);
console.log(person['name']);

// array
let array = ['pic1.png', 'pic2.jpg', 'pic3.png'];
console.log(array[1]);

// alert("Hello, World!");
*/

/*let answer = confirm("Are you here?");
console.log(answer); // --> true if ok is pressed or false if cancel is pressed
*/

/*let answer = prompt("Are you 18?", "yes");
console.log(answer);
console.log(typeof (answer));
// вся информация которая приходит от пользователя будет в ввиде строк внезависимости от того как мы ее получили
*/

// operators 
let incr = 10,
   decr = 10;

// incr++;
// decr--;
// console.log(++incr); //--> 11
// console.log(--decr); //--> 9
console.log(incr++); // --> 10
console.log(decr--); // --> 10

console.log(5 % 2); // остаток от деления 5 на 2