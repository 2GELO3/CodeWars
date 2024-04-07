// Задача №26

// Your goal is to return multiplication table for number that is always an integer from 1 to 10

// For example, a multiplication table (string) for number == 5 looks like below:

// P.S. You can use \n in string to jump to the next line.


function multiTable(number) {
  let res = '';
  for (let i = 1; i <= 10; i++) {
    res += `${i} * ${number} = ${i * number} ${i < 10 ? res += '\n' : ''}`;
  }
  return res;
}