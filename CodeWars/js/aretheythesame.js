// Задача №70


// Способ №1

// const comp = (a1, a2) => {

//   if (a1 === nul || a2 === null) return false;

//   for (let i = 0; i < a2.length; i++) {
//     const indexA1 = a1.indexOf(Math.sqrt(a2[i]))
//     if (indexA1 === -1) return false;
//     a1[indexA1] = null;
//   }

//   return true;
// }


// Способ №2


const comp = (a1, a2) => !!a1 && !!a2 && a1.map(x => x * x).sort().join() == a2.sort().join();