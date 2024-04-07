// Задача №62


// Способ №1

// const billboard = (name, price = 30) => {
//   let res = 0;

//   for (let i = 0; i < name.length; i++) {
//     res += price
//   }
//   return res;
// }


// Способ №2

// const billboard = (name, price = 30) => name.split('').reduce((sum, letter) => sum + price, 0);


// Способ №3


// const billboard = (name, price = 30) => [...name].reduce(pre => pre + price, 0);


// Способ №4


const billboard = (n, p = 30) => n.length / (1 / p);