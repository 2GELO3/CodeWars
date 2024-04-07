// Задача №11

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


// Способ №1

// function getAverage(marks) {
//   return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
// }


// Способ №2

function getAverage(marks) {
  let acc = 0;
  marks.forEach(el => acc += el);
  return Math.floor(acc / marks.length);
}