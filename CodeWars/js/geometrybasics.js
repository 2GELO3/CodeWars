// Задача №84


// Способ №1

// const distanceBetweenPoints = (a, b) => {
//   const k1 = (b.x - a.x) ** 2
//   const k2 = (a.y - b.y) ** 2
//   return Math.sqrt(k1 + k2)
// }


// Способ №2


const distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y)