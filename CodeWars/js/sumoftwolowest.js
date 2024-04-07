// Задача №78


// Способ №1

// const sumTwoSmallestNumbers = arr => {
//   const a = arr.sort((a, b) => a - b)
//   return a[0] + a[1]
// }


// Способ №2


const sumTwoSmallestNumbers = arr => {
  let m1, m2;

  if (arr[0] < arr[1]) {
    m1 = arr[0]
    m2 = arr[1]
  } else {
    m1 = arr[1]
    m2 = arr[0]
  }

  for (let i = 2; i < arr.length; i++) {

    if (arr[i] < m1) {
      m2 = m1
      m1 = arr[i]
    } else if (arr[i] > m1 && arr[i] < m2) {
      m2 = arr[i]
    }
  }
  return m1 + m2;
}