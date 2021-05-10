let arr = [1, 2, 3, 4, 5, 1, 6, 7, 8];
let i = arr.reduce((acc, item, i, array) => {
  acc[item]++;

  return acc;
}, {});
console.log(i);
