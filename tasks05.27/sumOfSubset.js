const sumOfSubset = (array) => {
  const subsetList = Array.from(new Set(array)).reduce(
    (acc, item) => {
      return acc.concat(acc.map((accItem) => [item, ...accItem]));
    },
    [[]]
  );
  return subsetList.map((subset) =>
    subset.reduce((acc, item) => acc + item, 0)
  );
};
console.log(sumOfSubset([1, 2, 3, 4]));

function countTrue(arr) {
  let count = 0;
  arr.forEach((item) => {
    if (item === true) {
      count++;
    }
  });
  return count;
}
