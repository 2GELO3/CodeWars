// Задача №13

// Examples:

// finalGrade(100, 12);  100
// finalGrade(99, 0);   100
// finalGrade(10, 15);  100

// finalGrade(85, 5)   90
// finalGrade(55, 3)   75


// Способ №1

// function finalGrade(exam, projects) {
//   if(exam > 90 || projects > 10) {
//     return 100;
//   } else if (exam > 75 && projects >= 5) {
//     return 90;
//   } else if (exam > 50 && projects >= 2) {
//     return 75;
//   } else {
//     return 0;
//   }
// }


// Способ №2

// const finalGrade = (m, n) => m > 90 || n > 10 ? 100 : m > 75 && n >= 5 ? 90 : mm > 50 && n >= 2 ? 75 : 0;


// Способ №3

finalGrade = ( exam, projects) => {
  switch (true) {
    case (exam > 90 || projects > 10):
      return 100;
      break;
    case (exam > 75 && projects >= 5):
      return 90;
      break;
    case (exam > 50 && projects >= 2):
      return 75;
      break;
    case (exam <= 50 && projects < 2):
      return 0;
      break;
  }
}