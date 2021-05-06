/* Write a function which remove elements with length <= 3 */

//first solution by array filter method
function filterByLength(array) {
  return array.filter((item) => item.length > 3);
}

function filterArrayLength(array) {
  let result = [];
  for (const item of array) {
    if (item.length > 3) {
      result.push(item);
    }
  }
  return result;
}
