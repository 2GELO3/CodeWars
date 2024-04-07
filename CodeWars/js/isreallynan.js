// Задача №34

// Tests:

// Test.expect(isReallyNaN(37) === false)
// Test.expect(isReallyNaN('37') === false)
// Test.expect(isReallyNaN(NaN) === true)
// Test.expect(isReallyNaN(undefined) === false)


// Способ №1

const isReallyNaN = val => Number.isNaN(val);


// Способ №2

isReallyNaN = v => v !== v;