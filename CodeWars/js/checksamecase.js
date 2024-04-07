// Задача №60

// Вспомогательные функции
const isNotLetter = s => s === s.toUpperCase() && s === s.toLowerCase();
const defineCase = s => s === s.toUpperCase() ? 'U' : 'L';

function sameCase(a, b) {
  if (isNotLetter(a) || isNotLetter(b)) return -1;
  return defineCase(a) === defineCase(b) ? 1 : 0;
}