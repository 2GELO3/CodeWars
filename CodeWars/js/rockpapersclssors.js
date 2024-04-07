// Задача №42

// Examples:

// rps('scissors', 'paper') => Player 1 won!
// rps('scissors', 'rock') => Player 2 won!
// rps('paper', 'paper') => Draw!



const rps = (p1, p2) => {
  const getMsg = (n) => `Player ${n} won!`;

  if (p1 === 'scissors' && p2 === 'paper') return getMsg(1);
  if (p1 === 'paper' && p2 === 'scissors') return getMsg(2);

  if (p1 === 'paper' && p2 === 'rock') return getMsg(1);
  if (p1 === 'rock' && p2 === 'paper') return getMsg(2);

  if (p1 === 'rock' && p2 === 'scissors') return getMsg(1);
  if (p1 === 'scissors' && p2 === 'rock') return getMsg(2);

    if (p1 === p2) return 'Draw!';
};

