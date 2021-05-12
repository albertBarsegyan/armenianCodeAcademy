/* - Given an array, return the sum of numbers that are 18 or over. */

function sumNumbersOver18(array) {
  let sum = array.reduce((acc, item) => acc + item);
  if (sum >= 18) {
    return sum;
  }
}

const arr = [1, 5, 6];
console.log(sumNumbersOver18(arr));
// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347
