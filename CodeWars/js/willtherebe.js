// Задача №31

// Способ №1

function enough(cap, on, wait) {
  const p = on + wait - cap;
  return p < 0 ? 0 : p;
}


// Способ №2

function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}