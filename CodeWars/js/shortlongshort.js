// Задача №64


// Способ №1

function solution(a, b) {

  let res = '';

  if (a.length > b.length) {
    res = b + a + b;
  } else {
    res = a + b + a
  }

  return res;
}


// Способ №2


const solution = (i => () => [
  'abba',
  'baab',
] [i++]) (0);