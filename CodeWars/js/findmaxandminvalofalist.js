// Задача №39

// Найти максимальное или минимальное значение среди элементов в массиве

// Способ №1

// const min = list => Math.min(...list);
// const max = list => Math.max(...list);


// Способ №2

const min = list => {
  let m = list[0];
  for(let i = 1; i < list.length; i++) {
    if (list[i] < m) m = list[i]
  }
  return m;
}

const max = list => {
  let m = list[0];
  for(let i = 1; i < list.length; i++) {
    if (list[i] > m) m = list[i]
  }
  return m;
}