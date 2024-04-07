// Задача №40

// If the number has an integer square root, take this, otherwise square the number.

// [4, 3, 9, 7, 2, 1] => [2, 9, 3, 49, 4, 1]


// Способ №1

// function squareOrSquareRoot(array) {
//   return array.map(el => {
//     if(Number.isInteger(Math.sqrt(el))) {
//       return Math.sqrt(el);
//     } else {
//       return Math.pow(el, 2);
//     }
//   });
// }


// Способ №2

const squareOrSquareRoot = array =>
  array.map(el => Number.isInteger(Math.sqrt(el))
  ? Math.sqrt(el)
  : el ** 2
);