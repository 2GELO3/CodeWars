// Задача №50


function averageString(str) {

  if (!str) return 'n/a';

  let d = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  }

  let n = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }

  const da = str.split(' ');
  let sum = 0;

  for (let i = 0; i < da.length; i++) {
    if (d[da[i]] !== undefined) {
      sum += d[da[i]];
    } else {
      return 'n/a';
    }
  }

  const avg = Math.floor(sum / da.length);

  return n[avg];
}