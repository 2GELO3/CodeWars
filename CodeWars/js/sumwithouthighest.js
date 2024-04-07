// Задача №41

// Example:

// [6, 2, 1, 8, 10] => 16  p.s. 1 and 10
// [1, 1, 11, 2, 3] => 6   p.s. 1 and 11


// Способ №1

// function sumArray(array) {

//   if (!array || array.length <= 1) return 0;

//   let min = array[0], max = array[0], sum = array[0];

  // array.forEach(el => {
  //   if (el < min) min = el;
  //   if (el > max) max = el;
  //   sum += el;
  // });

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) min = array[i];
//     if (array[i] > max) max = array[i];
//     sum += array[i];
//   }

//   return sum - min - max;
// }


// Способ №2

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0