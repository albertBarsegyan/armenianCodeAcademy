/* 11. Given an array of integers, find the pair of adjacent elements that has the largest product and return that
product.*/
function pairLargestSum(array) {
  let sortedArray = array.sort((a, b) => b - a);
  return sortedArray[0] + sortedArray[1];
}
