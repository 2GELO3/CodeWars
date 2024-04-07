//Задача №2

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// Способ №1

// function solution(string) {
//   let res = '';
//   for (let char of string) {
//     if (char === char.toUpperCase()) {
//       res += ' ' + char;
//     } else {
//       res += char;
//     }
//   }
//   return res;
// }

// Минусы данного решения

// 1) многословно


// Способ №2

// function solution(string) {
//   let res = '';
//   for (let char of string) {
//     char === char.toUpperCase() && (char = `${char}`)

//     res += char;
//   }
//   return res;
// }


// Способ №3

// String.prototype.reduce = function(cb, acc) {
//   for (let el of this) {
//     acc += cb(acc, el)
//   }
//   return acc;
// }

// function solution(string) {
//   return string.reduce((acc, char) => char === char/toUpperCase() ? `${char}` : char, '')
// }

// Способ №4

function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}