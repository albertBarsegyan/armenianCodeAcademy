function recFibonacci(number) {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  return recFibonacci(number - 1) + recFibonacci(number - 2);
}
console.log(recFibonacci(10));
function recFibonacci(number) {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
}

//   let res = recFibonacci(number - 1);
//   let p = recFibonacci(number - 2);
//   return res + p;
// }
// console.log(recFibonacci(10));
