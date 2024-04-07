// Задача №69


const extraPerfect = n => {

  const res = [];

  for (let i = 1; i <= n; i += 2) {
    n % 2 !== 0 ? res.push(i) : res;
  }
  return res;
}