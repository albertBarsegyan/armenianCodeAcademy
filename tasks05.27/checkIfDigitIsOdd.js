/* 1. Write a recursive function to determine whether all digits of the number are odd or not. */

function checkingOdd(num) {}

// let li = [1, 2, 3, 4, 5];

// const findSum = (arr, sum = 0) => {
//   if (!arr.length) {
//     return sum;
//   }
//   let [first, ...rest] = arr;
//   sum += first;
//   return findSum(rest, sum);
// };

let list = {
  value: 11,
  next: {
    value: 11,
    next: {
      value: 10,
      next: {
        value: 14,
        next: null,
      },
    },
  },
};

// console.log(findSum(li));
function getNextValue(obj, value) {
  if (obj.next === null) {
    return value + obj.value;
  }
  value += obj.value;
  return getNextValue(obj.next, value);
}
console.log(getNextValue(list, 0));

function getDigits(n) {
  let lastDigit = n % 10;
  for (let i = 0; i < array.length; i++) {}
}
