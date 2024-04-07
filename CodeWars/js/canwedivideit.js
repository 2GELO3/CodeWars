// Задача №30

// To find the volume (centrimeters cubed) of a cuboid you use the formula:
// volume = length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: the sides must be integers


// Способ №1

// const cubeChecker = (volume, side) => {
//   if (volume <= 0 || side <= 0) return false;
//   return Math.cbrt(volume) === side;
// };


// Способ №2

// let cubeChecker = function(v, s) {
//   return s > 0 && v == s * s * s;
// };


// Способ №3

// let cubeChecker = function(volume, side) {
//   return Math.pow(side, 3) === volume && side > 0;
// };


// Способ №1

// function isDividedBy(number, a, b) {
//   return number % a === 0 && number % b === 0;
// }


// Способ №2

isDividedBy = (n, a, b) => !(n % a || n % b);