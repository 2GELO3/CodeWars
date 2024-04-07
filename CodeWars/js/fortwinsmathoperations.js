// Задача №28

// Create an any? function that accepts an array and a block, and returns true for any item in the array. If the array is empty, the function should return false.


// Способ №1

function any(arr, fun) {
  return arr.some(fun)
}


// Способ №2

let any = (arr, fun) => arr.some(fun)
