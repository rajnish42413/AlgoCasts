//Calculate the Max/Min value from an array
// The built-in functions Math.max() and Math.min() find the maximum and minimum value of the arguments, respectively.

Math.max(1, 2, 3, 4); // 4
Math.min(1, 2, 3, 4); // 1

// Function.prototype.apply() allows you to call a function with a given this value and an array of arguments.

var numbers = [1, 2, 3, 4];
Math.max.apply(null, numbers) // 4
Math.min.apply(null, numbers) // 1

// A simpler, ES2015 way of accomplishing this is with the new spread operator.

var numbers = [1, 2, 3, 4];
Math.max(...numbers) // 4
Math.min(...numbers) // 1
