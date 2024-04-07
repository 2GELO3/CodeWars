// Задача №14

// Write a method that given two arguments width and height, returns a string representing a rectangle with those dimensions.

// The rectangle should be filed with spaces, and its borders should be composed of asterisks(*).

// For example, the following call:
// getRectangleString(3, 3);

// Should return the following string:
// ***
// * *
// ***
// End each line of the string (including the last one) with a carriage return-line feed combination.

// Note: You may assume that width and height will always be greater than zero.

function getRectangleString(width, height) {
  const rn = '\r\n';
  const tb = '*'.repeat(width) + rn;
  const center = (width > 1) ? ('*' + ' '.repeat(width - 2) + '*' + rn).repeat(height - 2) : '';
  return height > 1 ? (tb + center + tb) : tb.repeat(height);
}