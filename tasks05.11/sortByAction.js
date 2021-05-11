/* - Create a function that takes an array of numbers arr, a string str
and return an array of numbers as per the following rules:
- "Asc" returns a sorted array in ascending order.
- "Desc" returns a sorted array in descending order.
``` javascript */

function sortArrayByAction(arr, action) {
  let result = [...arr];
  if (action === 'Asc') {
    result = arr.sort((a, b) => a - b);
  }
  if (action === 'Desc') {
    result = arr.sort((a, b) => b - a);
  }
  return result;
}

console.log(sortArrayByAction([4, 3, 2, 1], 'Asc'));

// [1, 2, 3, 4]
console.log(sortArrayByAction([7, 8, 11, 66])); // [7, 8, 11, 66]
console.log(sortArrayByAction([7, 8, 11, 66], 'Desc')); // [66, 11, 8, 7]
