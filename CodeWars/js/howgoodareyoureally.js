// Задача №20

// There was a test in your class and you passed it. Congralulations! But you're an ambitious person. You want to know if you're better than the average student in your class.
// You got an array with your colleges' points. Now calculate the average to your points!

// Return True if you're better, else False!

// Note: Your points are not included in the array of your classes points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, item) => acc + item, 0) / classPoints.length < yourPoints;
}