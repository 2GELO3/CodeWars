// Задача №35

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

// sumStr("4", "5") => should output "9"
// sumStr("34", "5") => should output "39"

// if either input is an empty string, consider it as zero.


// Способ №1

// function sumStr(a, b) {
//   return (Number(a) + Number(b)).toString();
// }


// Способ №2

// const sumStr = (a, b) => (+a + +b).toString();


// Способ №3

const sumStr = (a, b) => '' + (a- -b)