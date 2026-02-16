// function add(a, b) {
//   console.log(a);
//   console.log(b);
// }
// add(4, 5);

// function add() {
//   console.log(arguments);
//   console.log(arguments.length);
//   console.log(arguments[0])
// }
// add(7, 5, 8, 9);

// function add(a,b) {
//   return a+b
// }
// const result = add(7, 5);
// console.log(result)

// function add(...arr) {
//   let sum = arr.reduce((total, num) => total + num, 0);
//   return sum;
// }
// const result = add(7, 5, 8, 9);
// console.log(result);

const add = (...args) => {
  let sum = args.reduce((total, num) => total + num, 0);
  return sum;
};
const result = add(7, 5, 8, 9);
console.log(result);

