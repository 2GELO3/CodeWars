// Задача №82


const symmetricPoint = (p, q) => {

  const rx = q[0] * 2 - p[0]
  const ry = q[1] * 2 - p[1]

  return [rx, ry]
}