// Задача №80


// Способ №1

// const findMultiples = (integer, limit) => {

//   const res = []

//   for (let i = integer; i <= limit; i += integer) {
//     res.push(i)
//   }
//   return res;
// }


// Способ №2

const findMultiples = (int, lim) => Array(Math.floor(lim/int)).fill(1).map((x, i) => int * (i + 1))