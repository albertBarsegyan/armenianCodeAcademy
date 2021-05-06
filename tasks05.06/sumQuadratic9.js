/* 9. Given an array of numbers. Find the sum of numbersʼ quadratic which are even. */
function getSumQuadraticOfNumber(array) {
  let quadratOfNums = [];
  array.forEach((item, i) => quadratOfNums.push(Math.sqrt(item)));
  return quadratOfNums.filter((item) => item % 2 === 0).reduce((a, b) => a + b);
}
