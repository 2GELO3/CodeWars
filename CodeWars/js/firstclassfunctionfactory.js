// Задача №76


// Способ №1

// const factory = n => arr => arr.map(el => el * n)


// Способ №2

function factory(n) {
  return function(arr) {
    const myArray = []

    for (let i = 0; i < arr.length; ++i) {
      myArray.push(arr[i] * n)
    }

    return myArray
  }
}