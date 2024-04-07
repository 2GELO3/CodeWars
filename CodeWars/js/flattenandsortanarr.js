// Задача №49

// Example:

// Given [[3, 2, 1], [4, 6, 5], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


// Способ №1

// function flattenAndSort(array) {
//   let res = [];

//   array.forEach(el => {
//     if (Number.isInteger(el)) {
//       res.push(el)
//     } else if (Array.isArray(el) && el.length) {
//       res = [...res, ...el];
//     }
//   })

//   return res.sort((a, b) => a - b)
// }


// Способ №2

function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}