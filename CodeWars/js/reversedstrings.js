// Задача №23

// Complete the solution so that it reverses the string value passed into it

// solution('world'); => return 'dlrow'


// Способ №1

function solution(str) {
  return str.split('').reverse().join('');
}


// Способ №2

function solution(str) {
  let s = '';
  for (let i = str.length - 1; i >= 0; i--) {
    s += str[i];
  }
  return s;
}