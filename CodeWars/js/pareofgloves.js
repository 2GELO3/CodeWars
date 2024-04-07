// Задача №66


// Способ №1

// const numberOfPairs = (gloves) => {
//   const hash = {};
//   let count = 0;

//   for (let i = 0; i < gloves.length; i++) {
//     if(!hash[gloves[i]]) hash[gloves[i]] = 1;
//     else hash[gloves[i]]++;
//   }

//   Object.keys(hash).forEach(el => count += Math.floor(hash[el] / 2))

//   return count;
// }


// Способ №2


const numberOfPairs = a => [...new Set(a)].map(b => a.join``.split(b).length - 1).reduce((a, b) => a + (b >> 1), 0)