// Задача №52


function likes(n) {
  const l = n.length;
  if (!l) return 'no one likes this';
  if(l === 1) return `${n[0]} likes this`;
  if(l === 2) return `${n[0]} and ${n[1]} like this`;
  if(l === 3) return `${n[0]}, ${n[1]} and ${n[2]} like this`;
  if(l > 3) return `${n[0]}, ${n[1]} and ${n[l - 2]} other like this`;
}