/* Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result. */

function sumDigit(num, acc = 0) {
  if (num < 10) {
    acc += num;
    if (acc > 10) {
      return sumDigit(acc);
    } else {
      return acc;
    }
  }
  const lastDigit = num % 10;
  acc += lastDigit;
  return sumDigit(Math.floor(num / 10), acc);
}
console.log(sumDigit(14));
