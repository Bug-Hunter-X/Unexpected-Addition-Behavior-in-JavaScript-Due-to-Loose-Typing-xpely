function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error('Invalid input types. Both inputs must be numbers.');
    return null; // or throw an error
  }
}
console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // Error message
console.log(foo(true, 1)); // Error message