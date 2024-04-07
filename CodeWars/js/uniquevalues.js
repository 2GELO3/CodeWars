//Задача №3

// Символы важны, а именно их регистр, порядок и кол-во. Поэтому всё сводится к написанию функции, которая будет из переданной фразы вытаскивать какое-то уникальное значение. Для всего вышесказанного необходимо - Отсортировать, Удалить дубли и сравнить оба варианта

const uniq = (str) => Array.from(new Set([...str.toLowerCase()].sort())).join('')

function findUniq(arr) {
  const store = {};
  arr.forEach(item => {
    const uniqItem = uniq(item);
    !!store[uniqItem] ? store[uniqItem]++ : (store[uniqItem] = 1);
  });

  const uniqItem = Object.entries(store).find(([key, val]) => val === 1)[0];

  return arr.find(item => unic(item) === uniqItem);
}

