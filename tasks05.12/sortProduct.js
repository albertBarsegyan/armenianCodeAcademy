let a = [1, 8, 2, 2, 8, 8, 3, 8, 4, 5, 6, 6, 6, 2];

function repeatedCount(array) {
  let unique = [];
  let repeated = [];
  let repCount = array.reduce((acc, item, index, arr) => {
    if (acc[item]) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
  repCount = Object.entries(repCount);
  repCount.forEach((item, i, repArray) => {
    if (item[1] === 1) {
      unique.push(Number(item[0]));
    } else {
      repeated.push(item);
    }
  });
  let r = [];
  repeated.sort((a, b) => a[1] - b[1]);
  repeated.forEach((item, i, rep) => {
    let arr = [];
    for (let index = 0; index < item[1]; index++) {
      arr.push(Number(item[0]));
    }
    r.push(arr);
  });
  let res = [];
  r.forEach((item) => {
    if (Array.isArray(item)) {
      res.push(...item);
    } else {
      res.push(item);
    }
  });
  return [...unique, ...res];
}
console.log(repeatedCount(a));
