// Задача №68


// Способ №1

// const vowelIndices = word => {

//   const vowels = 'aeiouAEIOU';
//   const res = [];

//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       word[i] === vowels[j] ? res.push(i + 1) : res;
//     }
//   }

//   return res;
// }


// Способ №2


const vowelIndices = word => {

  const vowels = 'aeiouyAEIOUY';
  const res = [];

  for (let i = 0; i < word.length; i++) {
    vowels.includes(word[i]) ? res.push(i + 1) : res;
  }

  return res;
}