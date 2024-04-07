// Задача №32

// Examples:

// typeValidation(42, "number"); => true
// typeValidation("42", "number"); => false


function typeValidation(v, t) {
  return typeof(v) === t;
}