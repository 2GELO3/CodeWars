// Задача №71     => 5 lvl CodeWars


function start(f) {
  const arr = [1, 2];
  return f(arr)
}

function push(arr) {
  return function(n) {
    return function(f) {
      return f([...arr, n])
    }
  }
}

function add(arr) {
  const res = arr.pop() + arr.pop()
  return function(f) {
    return f([...arr, res])
  }
}

function sub(arr) {
  const res = arr.pop() - arr.pop()
  return function(f) {
    return f([...arr, res])
  }
}

function div(arr) {
  const res = ~~(arr.pop() / arr.pop())
  return function(f) {
    return f([...arr, res])
  }
}

function mult(arr) {
  const res = arr.pop() * arr.pop()
  return function(f) {
    return f([...arr, res])
  }
}

function end(arr) {
  return arr.pop()
}

// console.log((start)(push)(5)(push)(7)(mult)(end));