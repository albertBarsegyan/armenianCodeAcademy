function adjacentElementsProduct(arr) {
  return Math.max(
    ...arr.slice(1).map((item, index, array) => [item * arr[index]])
  );
}
