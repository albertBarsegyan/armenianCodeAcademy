/* Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1). */
const arr = [56, -9, 87, -23, 0, -105, 55, 1];

const negNumb = [-5, -9, -111, -1000, -7];

function findMinPosNumb(arr) {
  let min = +Infinity;
  arr.forEach((item) => {
    if (item < min && item >= 0) {
      min = item;
    }
  });
  return min === Infinity ? -1 : min;
}

function recMinPosNumb(arr, min = Infinity) {
  if (arr.length === 0) {
    return min === Infinity ? -1 : min;
  }
  const [first, ...rest] = arr;
  if (first < min && first >= 0) {
    min = first;
  }
  return recMinPosNumb(rest, min);
}

console.log(recMinPosNumb(negNumb));
