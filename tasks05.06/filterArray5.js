/* 5. Write a function that implements filtering in array */
function filterFalsyValues(array) {
  let trueValues = [];
  for (const item of array) {
    if (item) {
      trueValues.push(item);
    }
  }
  return trueValues;
}
console.log(
  filterFalsyValues(['', undefined, ' ', 1, 2, 3, NaN, 0, null, {}, []])
);
