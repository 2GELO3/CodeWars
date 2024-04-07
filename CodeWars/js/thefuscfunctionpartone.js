// Задача №73


// Способ №1

function fusc(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n % 2) return fusc(Math.floor(n / 2)) + fusc(Math.ceil(n / 2))
  return fusc(n / 2)
}


// Способ №2

const fusc = n => {
  if (n < 2) return n;
  if (n & 1) return fusc(n >> 1) + fusc((n >> 1) + 1)
  return fusc(n >> 1)
}