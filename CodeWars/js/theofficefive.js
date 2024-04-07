// Задача №54

function meeting(x, need) {
  if (!need) return 'Game On';
  const r = [];
  let rest = need;

  for (let i = 0; i < x.length; i++) {

    if (rest > 0) {
      let c = x[i][1] - x[i][0].length;
      r.push(c > 0 ? (c > rest ? rest : c) : 0);
      if (c > 0) rest -= c;
    } else {
      return r;
    }
  }
  return rest <= 0 ? r : 'Not enough!';
}