// Omit certain values
const [, , c] = [1, 2, 3];
console.log(c);

// Combine with spread/rest operator (accumulates the rest of the values)
const [a, ...b] = [1, 2, 3];
console.log(a, b);

// Swapping variables
let d = 1;
let e = 2;
console.log(d, e);
[d, e] = [e, d];
// let temp = d;
// d = e;
// e = temp;
console.log(d, e);

const { user: x } = { user: 5 };
console.log(x);
