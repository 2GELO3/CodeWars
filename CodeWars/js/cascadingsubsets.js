// Задача №5

// DESCRIPTION:
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

// As you can see, the lists are cascading; ie, they overlap, but never out of order.


// Способ №1

// function eachCons(array, n) {
//   const r = [];
//   for (let i = 0; i <= array.length - n; i++) {
//     const chunk = [];
//     for (let j = i; j < i + n; j++) {
//       chunk.push(array[j])
//     }
//     r.push(chunk)
//   }
//   return r;
// }


// Способ №2

// function eachCons(array, n) {
//   const newArr = [];
//   for (let a = n, i = 0; a <= array.length; i++, a++) {
//     newArr.push(array.slice(i, a))
//   }
//   return newArr
// }


// Способ №3

function eachCons(array, n, result=[]) {
  if (array.length < n) return result;

  result = [...result, array.slice(0, n)];
  const [, ...tail] = array;
  return eachCons(tail, n, result);
}