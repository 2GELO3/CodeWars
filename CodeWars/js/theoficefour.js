// Задача №53


function meeting(x) {
  const f = x.indexOf('O');
  return f > -1 ? f : 'None available!';
}