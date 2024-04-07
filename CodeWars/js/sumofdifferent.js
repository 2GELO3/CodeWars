// Задача №27

// You task is to sum the differences between consecutive pairs in the array in descending order

// For example: sumOfDifferences([1, 2, 10]) Returns: 9
// Descending: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0.


// Способ №1

// function sumOfDifferences(arr) {
//   const sorted = arr.sort((a, b) => b - a)
//   let sum = 0;
//   for (let i = 1; i < sorted.length; i++) {
//     sum += sorted[i - 1] - sorted[i];
//   }
//   return sum;
// }


// Способ №2

function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}