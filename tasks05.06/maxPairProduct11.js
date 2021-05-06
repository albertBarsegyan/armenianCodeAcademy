/* 11. Given an array of integers, find the pair of adjacent elements that has the largest product and return that
product.*/
function pairLargestSum(array) {
  let sortedArray = array.sort((a, b) => b - a);
  return sortedArray[0] + sortedArray[1];
}

function productPair(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let pair = [array[i], array[i + 1]];
    result.push(pair);
    pair = [];
  }
  result = result.forEach((item, i) => {
    if (item) {
    }
    // item.reduce((a, b) => a * b);
  });
  return result;
}
console.log(productPair([1, 2, 3, 4, 5]));
