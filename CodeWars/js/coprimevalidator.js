// Задача №67


const isCoprime = (n1, n2) => {
  const min = Math.min(n1, n2);

  for (let i = 2; i <= min; i++) {
    if (!(n1 % i) && !(n2 % i)) return false;
  }

  return true;
}