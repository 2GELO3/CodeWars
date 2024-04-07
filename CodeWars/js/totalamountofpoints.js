// Задача №29

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y - 3 points
// if x < y - 0 point
// if x = y - 1 point

// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


// Способ №1

function points(games) {
  let count = 0;

  games.forEach(item => {
    if (item[0] > item[2]) count += 3;
    if (item[0] = item[2]) count += 1;
  })
  return item;
}


// Способ №2

points = g => g.reduce((x, y) => x + (y[0] > y[2] ? 3 : y[0] < y[2] ? 0 : 1), 0)


// Способ №3

let points = (g) => g.map(x => x[0] - x[2]).filter(x => x >= 0).reduce((a, b) => a + (b > 0 ? 3 : 1), 0);