// Write function that will do reverse operation for Object.entries
function fromPairs(arr) {
  let object = arr.reduce((acc, item, i, array) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
  return object;
}

console.log(
  fromPairs([
    ['a', 1],
    ['b', 2],
  ])
);
