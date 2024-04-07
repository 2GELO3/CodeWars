// Задача №63


// Способ №1

// const nameShuffler = str => str.split(' ').reverse().join(' ');


// Способ №2

const nameShuffler = str => {

  let fn = '', ln = '', mode = 'fn';

  for (let i = 0; i < str.length; i++) {

    if (str[i] === ' ') {
      mode = 'ln';
      continue;
    }

    if (mode === 'fn') {
      fn += str[i];
    } else {
      ln += str[i];
    }
  }

  return `${ln} ${fn}`;
}

