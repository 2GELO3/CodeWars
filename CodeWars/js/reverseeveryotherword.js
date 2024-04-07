// Задача №45

const reverse = str =>
  str
    .trim()
    .split(' ')
    .map((el, i) => (i % 2) ? el.split('').reverse().join('') : el)
    .join(' ');
