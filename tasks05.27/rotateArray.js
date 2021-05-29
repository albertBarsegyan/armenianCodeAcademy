/* Given an array and a number N. Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift()) */

function rotateArray(arr, n) {
  let firstPart = [];
  let lastPart = [];
  if (n < 1) {
    throw new Error(`n must be greater than 0`);
  }

  arr.forEach((item, index) => {
    if (index > n - 1) {
      firstPart.push(item);
    } else {
      lastPart.push(item);
    }
  });
  return firstPart.concat(lastPart);
}

function rotateArray(A, K) {
  if (!A.length) return A;
  let index = -1;
  while (index++ < K) {
    A.unshift(A.pop());
  }
  return A;
}

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

function rotateArrayByPlace(arr, n) {
  if (n > 1) {
    const lastItem = arr.pop();
    arr.unshift(lastItem);
    arr = rotateArrayByPlace(arr, n - 1);
  }
  return arr;
}

console.log(rotateArrayByPlace([120, 150, 1, 20, 30], 3));
