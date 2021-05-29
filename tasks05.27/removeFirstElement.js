/* Given an array. Write a recursive function that removes the first element and returns the
given array. (without using arr.shift()) */
function removeFirstElement(arr, list = []) {
  if (arr.length === 1) {
    return list.reverse();
  }

  list.push(arr.pop());
  return removeFirstElement(arr, list);
}
console.log(removeFirstElement([1, 2, 3, 4]));
