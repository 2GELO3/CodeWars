// Задача №25

// Createe a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// Способ №1

function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}


// Способ №2

const greet = (name, owner) => `Hello  + ${name === owner ? boss : guest}`

