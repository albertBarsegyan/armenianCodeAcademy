/* Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concat arrays). */

function joinNestedArray(arr, list = []) {
  if (arr.length === 0) {
    return list;
  }
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      return joinNestedArray(element, list);
    } else {
      list.push(element);
    }
  });
  return list;
}
