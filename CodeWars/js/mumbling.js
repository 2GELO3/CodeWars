// Задача №55

function accum(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    res += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + (i < s.length - 1 ? '-' : '')
  }
  return res;
}