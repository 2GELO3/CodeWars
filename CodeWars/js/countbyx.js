// Задача №47

const countBy = (x, n) => {
  const res = [];

  for (let i = x, count = n; count > 0; i += x) {
    res.push(i);
    count--;
  }
  return res;
}