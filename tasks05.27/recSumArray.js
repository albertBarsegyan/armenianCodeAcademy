/* to find the sum of a given array. */
function recSumArray(arr, acc = 0) {
  if (arr.length === 0) {
    return acc;
  }
  let [first, ...rest] = arr;
  acc += first;
  return recSumArray(rest, acc);
}
console.log(recSumArray([1, 2]));
