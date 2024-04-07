// Задача №79


// Способ №1

// const position = l => {

//   let n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let s = n.toLowerCase()

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == l) return `Position of alphabet: ${i + 1}`
//   }
// }


// Способ №2


// const position = l => ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().indexOf(l)



// Способ №3


const position = l => `Position of alphabet: ${l.charCodeAt() - 96}`