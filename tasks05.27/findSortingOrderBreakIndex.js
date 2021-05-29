/* Given an array of numbers which is almost sorted in ascending order. Find the index
where sorting order is violated.*/
function findAscOrder(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1] || arr[i] > arr[i + 1]) {
      return i;
    }
  }
  return -1;
}

function recFindAscOrder(arr, index = 1) {
  if (index === arr.length - 1) {
    return -1;
  }
  if (arr[index] < arr[index - 1]) {
    return index;
  } else {
    index++;
  }
  return recFindAscOrder(arr, index);
}
recFindAscOrder([-9, -4, -4, 3, 12, 4, 5]);
