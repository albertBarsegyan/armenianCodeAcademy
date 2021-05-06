/* 11. Given an array of integers, find the pair of adjacent elements that has the largest product and return that
product.*/
function pairLargestSum(array) {
  let sortedArray = array.sort((a, b) => b - a);
  return sortedArray[0] + sortedArray[1];
}

function productPair(array) {
  let result = [];
  let productList = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] === undefined) {
      break;
    }
    let pair = [array[i], array[i + 1]];
    result.push(pair);
    pair = [];
  }
  result = result.forEach((item, i) => {
    productList[i] = item.reduce((a, b) => a * b);
  });
  return Math.max(...productList);
}
console.log(productPair([1, 2, 3, 4, 5]));
