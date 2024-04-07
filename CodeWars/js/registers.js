//Задача №1

//Complete the solution so that the function will break up camel casing, using a space between words.

//Example
//"camelCasing"  =>  "camel Casing"
//"identifier"   =>  "identifier"
//""             =>  ""


//Способ №1

// function toWeirdCase(string) {
//   return string.split(' ').map().join(' ');
// }

// const mapWord = (word) => word.split('').map(mapChar).join('');

// const mapChar = (char, i) => i%2 === 0 ? char.toUpperCase() : char;


// Плюсы данного решения

// 1) читабельность (краткость, лаконичность)
// 2) распределение ответственности (делегирование полномочий)
// 3) тестируемость

// Минусы данного решения

// 1) производительность (Данное решение не оптимально, как с точки зрения сложности, так и памяти)


//Способ №2

// function toWeirdCase(string) {
//   let count = 0;
//   let res = ''

//   for (let char of string) {
//     if (char === ' ') {
//       count = 0;
//       res += ' ';
//       continue;
//     }

//     if (count%2 === 0) {
//       res += char.toUpperCase();
//     } else {
//       res += char;
//     }

//     count++
//   }

//   return res;
// }

// Плюсы данного решения

// 1) производительность (Данное решение не оптимально, как с точки зрения сложности алгоритмов, так и памяти)

// Минусы данного решения

// 1) читабельность
// 2) распределение ответственности (делегирование полномочий)
// 3) тестируемость

//Способ №3

function toWeirdCase(string) {
  return string.replace(/(\w{1,2})/g, (m) => m[0].toUpperCase() + (m[1] ? m[1] : ''))
}