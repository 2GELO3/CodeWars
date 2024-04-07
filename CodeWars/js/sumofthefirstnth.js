// Задача №51


// Способ №1

// function SeriesSum(n) {

//   if (!n) return '0.00';
//   let sum = 1, j = 4

//   for (let i = 1; i < n; i++) {
//     sum += 1 / j;
//     j += 3;
//   }

//   return sum.toFixed(2);
// }


// Способ №2

function SeriesSum(n) {
  for (let s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  return s.toFixed(2)
}
